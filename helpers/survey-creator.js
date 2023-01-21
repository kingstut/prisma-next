import {userRepo} from './user-creator';
import { responseRepo } from './response-creator';
const fs = require('fs');
import { prisma } from '../server/db/client'
// users in JSON file for simplicity, store in a db for production applications
let surveys= require('../data/surveys.json');

export const surveyRepo = {
    getAllSurveys: () => surveys,
    getSurveyById: survey_id => surveys.find(x => x.survey_id.toString() === survey_id.toString()),
    getSurveyByUser: user_id => surveys.find(x => x.user_id.toString() === user_id.toString()),
    findSurvey: x => surveys.find(x),
    createSurvey,
    addValidResponse,
    closeSurvey,
    getValidSurveys: user_id => surveys.find(x => x.show_to_users.includes(user_id)),
    removeUser
};

async function createSurvey(email, rec_data) {
    // add and save user
    console.log("REC DATA", rec_data)
    const users = await userRepo.getAllUsers()
    console.log(users)
    await prisma.survey.create({
        data: {
            user_id: email,
            question : rec_data.question,
            show_to_users : users.map((user) => user.user_id),
            closed :false,
            budget : parseFloat(rec_data.budget),
            cpr : parseFloat(rec_data.cpr),
            verified_res : [] 
        },
      })

}


function addValidResponse(survey_id, answer) {
    this_survey = getSurveyById(survey_id)
    this_survey.verified_res.push(answer)
    if (this_survey.verified_res.length >= this_survey.budget/this_survey.cpr){
        closeSurvey(survey_id)
    }
    saveData()
}

function closeSurvey(survey_id) {
    this_survey = getSurveyById(survey_id)
    this_survey.closed = true;
    saveData()
}

function removeUser(survey_id, user_id){
    urv = surveyRepo.getSurveyById(survey_id)
    const index = surv.show_to_users.indexOf(user_id);
    delete surv.show_to_users[index]
    saveData()
}

// private helper functions
function saveData() {
    fs.writeFileSync('data/surveys.json', JSON.stringify(surveys, null, 4));
}