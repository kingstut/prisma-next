const fs = require('fs');

// users in JSON file for simplicity, store in a db for production applications
let surveys= require('data/surveys.json');

export const surveyRepo = {
    getAllSurveys: () => surveys,
    getSurveyById: id => surveys.find(x => x.id.toString() === id.toString()),
    getSurveyByUser: user => surveys.find(x => x.user.toString() === user.toString()),
    findSurvey: x => surveys.find(x),
    createSurvey,
};

function createSurvey(survey, session) {
    // generate new survey id
    survey.id = surveys.length ? Math.max(...surveys.map(x => x.id)) + 1 : 1;
    survey.user = session.user

    // add and save user
    surveys.push(survey);
    saveData();
}


// private helper functions
function saveData() {
    fs.writeFileSync('data/surveysrs.json', JSON.stringify(surveys, null, 4));
}