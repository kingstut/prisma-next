import Layout from "../components/layout"
import { handleResponse} from "helpers/api"
import { useSession } from "next-auth/react"

import GetFormList from "../components/GetFormList"

const fetch = require('node-fetch');

export default function GetSurveyPage() {
  const { session } = useSession()
  
  async function handleOnSubmit({survey_id, data}, e) {
    e.preventDefault();

    await create_data({data, session});
    query = { survey_id: survey_id, 
              response: 
              { user_id: session.user.email, 
                answer: data}
            }
    fetch('/api/responses/response-api', {method: 'PUT', query: query}).then(handleResponse)
  }

  const surveys = fetch('/api/surveys/survey-api', 
  {method: 'GET', query: {user_id: session.user.email}}).then(handleResponse)

  return (
    <Layout>
      <h1>Fill Surveys</h1>
      <p>
      You must be signed in to fill a survey.
      </p>

      if (session.user) {
        <GetFormList surveys={surveys} onSubmit={handleOnSubmit} />
      }

    </Layout>
  )
}