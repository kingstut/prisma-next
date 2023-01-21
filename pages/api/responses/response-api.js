import {responseRepo} from '../../../helpers/response-creator';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return postResponse();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function postResponse() {
        try {
            console.log("RECEIVED API ", req.body)
            const { session:session , question: survey, data : data } = req.body
            const survey_id = survey.survey_id
            const answer = data.answer
            const user_id = session.user.email
            console.log("SENDING API ", survey_id, answer, user_id)
            responseRepo.createResponse( survey_id, answer, user_id)
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

}