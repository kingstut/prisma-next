import Layout from "../components/layout"
import { useSession } from "next-auth/react"
import {get_survey} from "api/survey-api"
import {create_data} from "api/survey-api"
import GetFormList from "../components/GetFormList"

export default function GetSurveyPage() {
  const { session } = useSession()
  
  async function handleOnSubmit(data, e) {
    e.preventDefault();

    await create_data({data, session});

  }

  return (
    <Layout>
      <h1>Fill Surveys</h1>
      <p>
        <em>You must be signed in to fill a survey.</em>
      </p>

      { user && (
          <GetFormList questions={get_questions} onSubmit={handleOnSubmit} />
        ) }

    </Layout>
  )
}