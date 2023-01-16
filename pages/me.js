import { useSession } from "next-auth/react"
import Layout from "../components/layout"

import { handleResponse} from "helpers/api"
const fetch = require('node-fetch');

export default function MePage() {
  const { session } = useSession()

  const user = fetch('/api/dashboard/dashboard-api', 
  {method: 'GET', query: {user_id: session.user.email}}).then(handleResponse)

  return (
    <Layout>
      <pre>{JSON.stringify(user, null, 2)}</pre> 
    </Layout>
  )
}