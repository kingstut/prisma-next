import {responseRepo} from 'helpers/response-creator';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'PUT':
            return postVerification();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function postVerification() {
        try {
            responseRepo.addToVerified(req.query.survey_id, 
                req.query.user_id, req.query.verifier_id, req.query.verification) 
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

}