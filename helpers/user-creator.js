import { prisma } from '../server/db/client'
import { surveyRepo } from './survey-creator';
const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let users= require('../data/users.json');

export const userRepo = {
    getAllUsers,
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

async function getAllUsers() {
    const users = await prisma.user.findMany()
    return users
    /*
    var user_emails = []
    for (u of users) {
        user_emails.push(u.user_id)
    }
    return user_emails
    */
}

async function checkIfExists(email) {
    //console.log("EMAIL", email)
    const placeCount = await prisma.user.count(
        {
          where: {
            user_id: email
          }
        }
    )
    //console.log("placeCount ", placeCount)
    return placeCount>0 
}

async function createUser(session) {
    // generate new user id

    if (checkIfExists(session) !== true) 
    {   //console.log("STILL GOING")
        await prisma.user.create({
            data: {
                user_id: session,
            },
          })
    }
}

async function checkPayment(user_id){
    const user = userRepo.getUserById(user_id)
    for (res of user.responses) {
        if (res.paid == false){
            if (res.responded===-1 || res.verified === -1){
                res.paid == true
                await prisma.answer.update({
                    where: {
                        user_id: user_id,
                        survey_id: res.survey_id
                    },
                    data: {
                        paid: true
                    }
                })
            }
            else if (res.responded===1 && res.verified === 1){
                await prisma.answer.update({
                    where: {
                        user_id: user_id,
                        survey_id: res.survey_id
                    },
                    data: {
                        paid: true
                    }
                })
                await prisma.user.update({
                    where: {
                        user_id: user_id,
                    },
                    data: {
                        money: user.money + res.cpr
                    }
                })
                
            }
        }
    }
    
}

async function addNewRes(user_id, survey_id){
    const surv = await surveyRepo.getSurveyById(survey_id)
    const this_user = await userRepo.getUserById(user_id)
    const answers = this_user.responses
    const new_answer = await prisma.answer.create({
        data: {
            survey_id: survey_id,
            cpr: surv.cpr,
            authorId: user_id
        },
    })
    answers.push(new_answer)
    await prisma.user.update({
        where: {
            user_id: user_id
        },
        data: {
            responses: answers
        }
    })
    
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