import { surveyRepo } from './survey-creator';
import { userRepo } from './user-creator';

const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let responses= require('../data/responses.json');

export const responseRepo = {
    getAllresponses: () => responses,
    getResponseBySurveyId: survey_id => responses.find(x => x.survey_id.toString() === survey_id.toString()),
    findResponse: x => responses.find(x),
    createResponse,
    addToVerified
};

function createResponse(survey_id, response) {
    this_survey = getResponseBySurveyId(survey_id)
    if (response.length === 0) {
        this_survey.survey_res = [];
    }
    else {
    const new_res  = { user_id: response.user_id,
                        answer: response.answer, 
                        verified: [], 
                        valid: 0}
    // add and save res
    this_survey.survey_res.push(new_res)

    // add res for user 
    userRepo.addNewRes(response.user_id, survey_id)
    
    //stop showing this survey to this user
    surveyRepo.removeUser(survey_id, response.user_id)
    }
    saveData()
}

function addToVerified(survey_id, user_id, verifier_id, verification) {
    this_reslist = getResponseBySurveyId(survey_id).survey_res
    this_res = this_reslist.find(x => x.user_id.toString() === user_id.toString())

    this_res.verified.push({verifier_id: verifier_id, verification: verification})

    if (this_res.verified.length === 3) {
        let num_zero = 0 
        for (v of this_res.verified) {
            if (v.verification === 0) {
                num_zero++;
            }
        }
        if (num_zero>1) {
            this_res.valid = -1

            //don't pay user 
            userRepo.updateResponded(user_id, survey_id, -1)
            userRepo.checkPayment(user_id)

            //pay those who verified zero, don't pay those who verified one
            for (v of this_res.verified) {
                value = v.verification === 0 ? 1 : -1  
                userRepo.updateResponded(v.verifier_id, survey_id, value)
                userRepo.checkPayment(v.verifier_id)
            }          
        }
        else {
            this_res.valid = 1

            //pay user 
            userRepo.updateResponded(user_id, survey_id, 1)
            userRepo.checkPayment(user_id)

            //pay those who verified one, don't pay those who verified zero
            for (v of this_res.verified) {
                val = v.verification === 1 ? 1 : -1    
                userRepo.updateResponded(v.verifier_id, survey_id, value)
                userRepo.checkPayment(v.verifier_id)         
            }   

            //push to valid responses in survey 
            surveyRepo.addValidResponse(survey_id, this_res.answer)
        }

        //delete this response from responses 
        const index = this_reslist.indexOf(this_res);
        delete this_reslist[index];

    }
    
    saveData()
}


// private helper functions
function saveData() {
    fs.writeFileSync('data/responses.json', JSON.stringify(responses, null, 4))
}