import { useSession } from "next-auth/react"
import Layout from "../components/layout"

import { handleResponse} from "helpers/api"
const fetch = require('node-fetch');

export default function MePage() {
  const { session } = useSession()
  const [content, setContent] = useState()

  // Fetch content from protected route
  useEffect((session) => {
    const fetchData = async () => {
      const user = fetch('/api/dashboard/dashboard-api', {method: 'GET', query: {user_id: session.user.email}}).then(handleResponse)
      const json = await user.json()
      if (json.content) {
        setContent(json.content)
      }
    }
    fetchData(session)
  }, [session])

  return (
    <Layout>
      <pre> {content} </pre> 
    </Layout>
  )
}
