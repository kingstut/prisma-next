import Layout from "../components/layout"
import { handleResponse} from "../helpers/api"
import { useSession, getSession } from "next-auth/react"

import GetFormList from "../components/GetFormList"
import axios from "axios"

export function showToVerify(){
  console.log("TESTING INSIDE")
  return (
  <p> FORM SUBMITTED </p>
  )
  }
export default function GetSurveyPage({surveys}) {
  
  const { data: session } = useSession()
  
  async function handleOnSubmit({question: question, data}, e) {
    console.log("TESTING")
    //showToVerify()
    e.preventDefault();
    //fetch('/api/responses/response-api', {method: 'PUT', query: query}).then(handleResponse)
    await axios.post('http://localhost:3000/api/responses/response-api', 
    { session, question, data } ).then(handleResponse)
    console.log("TESTING INSIDE")
    return (
      <p> FORM SUBMITTED </p>
      )
    }


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

export async function getServerSideProps(context) {
  // Fetch data from external API
  const session = await getSession(context)
  const em = session.user.email
  //const res = await axios.get('http://localhost:3000/api/surveys/', 
  // { params: {em: email} } ).then(handleResponse)
  const res = await fetch(`http://localhost:3000/api/surveys/${em}`).then(handleResponse)
  const surveys = await res.json()

  // Pass data to the page via props
  return { props: { surveys } }
}