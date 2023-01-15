import Layout from "../components/layout"
import { useSession } from "next-auth/react"
import {create_survey} from "api/survey-api"
import SurveyForm from "../components/SurveyForm"

export default function CreateSurveyPage() {
  const { session } = useSession()
  
  async function handleOnSubmit(data, e) {
    e.preventDefault();

    await create_survey({data, session});

  }

  return (
    <Layout>
      <h1>Create a Survey</h1>
      <p>
        <em>You must be signed in to create a survey.</em>
      </p>
      <p>Input your question:</p>

      { user && (
          <SurveyForm onSubmit={handleOnSubmit} />
        ) }

    </Layout>
  )
}