import { prisma } from '../../server/db/client'
const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let users= require('../data/users.json');

export const userRepo = {
    getAllUsers: () => users,
    getUserById: async (user_id) => await prisma.user.findUnique({
        where: {
          user_id: user_id,
        },
      }),
    createUser,
    checkPayment,
    addNewRes,
    updateResponded, 
    updateVerfied
}

async function checkIfExists(email) {
    await prisma.user.count(
        {
          where: {
            user_id: email
          }
        }
    )
    return placeCount>0 
}

async function createUser(session) {
    // generate new user id
    if (!checkIfExists(session)) 
    {   
        await prisma.user.create({
            data: {
                session,
            },
          })
    }
}

async function checkPayment(user_id){
    const user = await prisma.user.findUnique({
        where: {
          user_id: user_id,
        },
      })
    for (res of user.responses) {
        if (res.paid == false){
            if (res.responded===-1 || res.verified === -1){
                res.paid == true
            }
            else if (res.responded===1 && res.verified === 1){
                res.paid == true
                user.money += res.to_pay
            }
        }
    }
    saveData()
}

function addNewRes(user_id, survey_id){
    surv = surveyRepo.getSurveyById(survey_id)
    this_user = userRepo.getResponseBySurveyId(user_id)
    new_user_res = {survey_id: survey_id,
                    responded: 0,
                    verified: 0, 
                    paid: false, 
                    to_pay: surv.cpr}
    this_user.responses.push(new_user_res)
    saveData()
}

function updateResponded(user_id, survey_id, value){
    user = userRepo.getUserById(user_id)
    this_user_res = user.find(x => x.responses.survey_id.toString() === survey_id.toString())
    this_user_res.responded = value
    saveData()
}

function updateVerfied(user_id, survey_id, value){
    user = userRepo.getUserById(user_id)
    this_user_res = user.find(x => x.responses.survey_id.toString() === survey_id.toString())
    this_user_res.verified = value
    saveData()
}

// private helper functions
function saveData() {
    fs.writeFileSync('data/users.json', JSON.stringify(users, null, 4))
}