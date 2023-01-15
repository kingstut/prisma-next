import {apiHandler} from 'helpers/api';
import {surveyRepo} from 'helpers/survey-creator';

export default apiHandler({
    post: create_survey, 
    get: get_survey
});

function create_survey(req, res) {
    const { survey, session } = req.body;

    usersRepo.createSurvey(survey, session);
    return res.status(200).json({});
}

function get_survey(req, res) {
    const { survey, session } = req.body;

    usersRepo.createSurvey(survey, session);
    return res.status(200).json({});
}