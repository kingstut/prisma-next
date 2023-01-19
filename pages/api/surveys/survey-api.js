import {surveyRepo} from '../../../helpers/survey-creator';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'PUT':
            return postSurvey();
        case 'GET':
            return getSurvey();
        case 'UPDATE':
            return updateSurvey();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function postSurvey() {
        try {
            const email = JSON.parse(req.body)["session"]["session"]["user"]["email"]
            const data = JSON.parse(req.body)["data"]["data"]

            console.log(email)
            console.log(data)

            surveyRepo.createSurvey(req.query.survey, req.query.session)
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function getSurvey() {
        const survey = surveyRepo.getValidSurveys(req.query.user_id);
        return res.status(200).json(survey);
    }

    function updateSurvey() {
        try {
            surveyRepo.removeUser(req.query.survey_id, req.query.user_id);
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    /*
    function deleteSurvey() {
        surveyRepo.delete(req.query.id);
        return res.status(200).json({});
    }
    */
}