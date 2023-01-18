import Layout from "../components/layout"
import prisma from "../lib/prismadb"
import Head from "next/head";
import {Container, Navbar, Button, Nav, NavDropdown, Row, Col} from 'react-bootstrap'

export default function IndexPage() {
  return (
    <div style={{minHeight:"100% !important"}}>
    <Layout>
      <Head>
        <title>Dashboard</title>
      </Head>
      
     <div>
     <Container fluid>
      <Row>
        <Col md='6' className="bg-warning d-flex" style={{height:463, alignItems:"center",justifyContent:"center"}}>
          <Button  classname='text-white text-decoration-none' variant="dark"  style={{borderRadius:'0px'}} >Create Food</Button>
        </Col>
        <Col md='6' className=" pt-3 text-center "  style={{height:463, borderRadius:'none'}}>
        <Button  classname='text-white text-decoration-none '  style={{borderRadius:'0px'}} variant="dark">Get Food</Button>
        </Col>
      </Row>
    </Container>
     </div>
    </Layout>
    </div>
  )
} 

export const getStaticProps = async () => {

  const users = await prisma.user.findMany()
  console.log('users', users)
  // const feed = await prisma.user.findMany({
  //   where: { published: true },
  //   include: {
  //     author: {
  //       select: { name: true },
  //     },
  //   },
  // });
  return {
    props: { users },
    revalidate: 10,
  };
};