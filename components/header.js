import Link from "next/link"
import { signIn, signOut, useSession } from "next-auth/react"
import styles from "./header.module.css"
import {Container, Navbar, Button, Nav, NavDropdown, Row, Col} from 'react-bootstrap'
// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function Header() {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      {/* <!-- Navbar Start --> */}

      <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home" pl='5'> <span className={`${styles.nav_title}`}>Whole Foods</span> <br/> <span className={`${styles.nav_sub_title} `}>Food Marketplace</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="margin-left-auto">
          <span className="border border-white"><Button variant="link" className="text-white text-decoration-none">Dashboard</Button> </span>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      {/* <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand classname='text-white text-end'>Whole Foods</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
           <Button>Login</Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}

    {/* <!-- Navbar End --> */}
    </header>
  )
}