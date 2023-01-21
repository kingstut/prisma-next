import {userRepo} from '../../../helpers/user-creator';

export default handler;

function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return postUser();
        case 'GET':
            return getUser();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function postUser() {

        try { 
            //console.log("req body", req.body)
            const { session: session } = req.body
            const email = session.user.email //JSON.parse(req.body)["session"]["session"]["user"]["email"]
            userRepo.createUser(email)
            //userRepo.createUser(req.query.session)
            return res.status(200).json({});
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }

    function getUser() {
        const user = userRepo.getUserById(req.query.user_id);
        return res.status(200).json(user);
    }

}