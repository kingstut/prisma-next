import { SessionProvider } from "next-auth/react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/globals.css";
// Use of the <SessionProvider> is mandatory to allow components that call
// `useSession()` anywhere in your application to access the `session` object.
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
