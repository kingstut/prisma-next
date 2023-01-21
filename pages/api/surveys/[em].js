import {surveyRepo} from '../../../helpers/survey-creator';
/*
function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getSurvey();
        default:
            return res.status(405).end(`Method ${req.method} Not Allowed`)
    }

    function getSurvey() {
        console.log("ENTERED" )
        console.log("GET SURVEY EMAIL",req )
        const email = req.data.args.em
        
        const survey = surveyRepo.getValidSurveys(email);
        return res.status(200).json(survey);
    }
}
*/
export default async function handler({ query: { em } }, res) {
    //console.log("ENTERED" )
    //console.log("GET SURVEY EMAIL", em )
    
    const survey = await surveyRepo.getValidSurveys(em);
    
    //console.log("SURVEYS INIT", survey)
    if (survey.length > 0) {
        return res.status(200).json(survey);
    } else {
      res
        .status(404)
        .json({ message: `No surveys found` })
    }
  }