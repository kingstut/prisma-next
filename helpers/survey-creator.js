import {userRepo} from './user-creator';
import { responseRepo } from './response-creator';
const fs = require('fs');
import { prisma } from '../server/db/client'
// users in JSON file for simplicity, store in a db for production applications
let surveys= require('../data/surveys.json');

export const surveyRepo = {
    getAllSurveys: () => surveys,
    getSurveyById,
    getSurveyByUser: user_id => surveys.find(x => x.user_id.toString() === user_id.toString()),
    findSurvey: x => surveys.find(x),
    createSurvey,
    addValidResponse,
    closeSurvey,
    getValidSurveys,
    removeUser
};

async function getSurveyById(survey_id){
    const survey = await prisma.survey.findUnique({
         where: {
            survey_id: survey_id
         }
    })
    return survey
}


async function createSurvey(email, rec_data) {
    // add and save user
    const users = await userRepo.getAllUsers()
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

async function getValidSurveys(email){
    const surveys = await prisma.survey.findMany({
        where: {
          show_to_users: {
            has: email,
          },
        },
      })

    return surveys
    
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

async function removeUser(survey_id, user_id){
    const surv = await surveyRepo.getSurveyById(survey_id)
    const index = surv.show_to_users.indexOf(user_id);
    delete surv.show_to_users[index]

    await prisma.survey.update({
        where: {
          survey_id: survey_id,
        },
        data: {
            show_to_users: surv.show_to_users,
        },
      })
      console.log("DONE")
}

// private helper functions
function saveData() {
    fs.writeFileSync('data/surveys.json', JSON.stringify(surveys, null, 4));
}