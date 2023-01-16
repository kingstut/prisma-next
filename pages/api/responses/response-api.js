import {responseRepo} from 'helpers/response-creator';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'PUT':
            return postResponse();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function postResponse() {
        try {
            responseRepo.createResponse(req.query.survey_id, req.query.response)
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

}