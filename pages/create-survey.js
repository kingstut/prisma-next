import Layout from "../components/layout"
import { useSession } from "next-auth/react"
import SurveyForm from "../components/SurveyForm"

import { handleResponse} from "helpers/api"
const fetch = require('node-fetch');

export default function CreateSurveyPage() {
  const { session } = useSession()
  
  async function handleOnSubmit(data, e) {
    e.preventDefault();

    //data should be   {question:,  budget: , cpr: }
  
    fetch('/api/surveys/survey-api', 
    {method: 'PUT', query: {survey: data, session: session}}).then(handleResponse)

  }

  return (
    <Layout>
      <h1>Create a Survey</h1>
      <p>
      You must be signed in to create a survey.
      </p>
      <p>Input your question:</p>

      { user && (
          <SurveyForm onSubmit={handleOnSubmit} />
        ) }

    </Layout>
  )
}