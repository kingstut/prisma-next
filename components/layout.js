import Footer from "./footer"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main style={{minHeight:'426px'}} >{children}</main>
      <Footer/>
    </div>
  )
}