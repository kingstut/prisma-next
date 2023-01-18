import React from 'react'
import Layout from '../components/layout'
import {Button,Row,Col} from "react-bootstrap"

export default function fourth() {
    return (
        <Layout>
            <Row className="w-100 m-0 justify-content-center mt-5 h-100">
                <Col md='3' className='text-center'>
                        <div className='bg-warning'style={{height: "55vh", width: "100%",borderRadius:"5px"}}>
                            <div>
                                <h4  className="pt-3" style={{borderBottom:"1px solid",width:"40%",margin:"auto"}}>Title</h4>
                            </div>
                            <div>
                            <Button className='btn-dark' style={{ borderRadius: "0px !important",width:"150px",marginTop:"40px"}}>Single Choice</Button>
                            </div>
                            <div>
                            <Button className='btn-dark' style={{ borderRadius: "0px !important",width:"150px",marginTop:"20px"}}>Multiple Choice</Button>
                            </div>
                           <div>
                           <Button className='btn-dark' style={{ borderRadius: "0px !important" ,width:"150px",marginTop:"20px"}}>Text Input</Button>
                           </div>
                        </div>
                    <div className='my-3'>
                    <Button className='btn-dark' style={{ borderRadius: "0px !important", width: "120px" }}>
                            Submit</Button>
                    </div>
                </Col>
                <Col md='3' className='text-center'></Col>
                <Col md='3' className='text-center'></Col>
            </Row>
        </Layout>
    )
}
