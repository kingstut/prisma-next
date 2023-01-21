import Layout from "../components/layout"
import { useSession } from "next-auth/react"
import SurveyForm from "../components/SurveyForm"

import { handleResponse} from "../helpers/api"
import axios from "axios"

//const fetch = require('node-fetch');

export default function CreateSurveyPage() {
  const  { data: session } = useSession()
 
  
  async function handleOnSubmit(data, e) {
    console.log(data)
    e.preventDefault();

    //data should be   {question:,  budget: , cpr: }
    axios.post('http://localhost:3000/api/surveys/survey-api', 
    { session, data } ).then(handleResponse)

  }

  return (
    <Layout>
      <h1>Create a Survey</h1>
      <p>
      You must be signed in to create a survey.
      </p>
      <p>Input your question:</p>
      {session && ( 
      <SurveyForm onSubmit={handleOnSubmit} />
       ) }
    </Layout>
  )
}

      /*
      {session && ( <p> hi </p>
      //<SurveyForm onSubmit={handleOnSubmit} />
       ) }
      */