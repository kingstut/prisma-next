import React from 'react'
import Layout from '../components/layout'
import { Button, Row, Col } from "react-bootstrap"
import { Trash3Fill } from 'react-bootstrap-icons'
export default function fifth() {
    return (
        <Layout>

            <Row className="w-100 m-0 justify-content-center mt-5 h-100">
                <Col md='3' className='text-center'>
                    <div  className={`first_div bg-warning mb-2`} style={{borderRadius: "5px" }}>
                       <div style={{paddingTop:"70px"}}> Min. char: 0 &nbsp; Max char: 5000
                        Only number allowed X</div>
                    </div>
                    <div className='my-3 ' style={{ fontSize: "25px" }}>
                        <Trash3Fill />
                    </div>
                </Col>
                <Col md='3' className='text-center mb-2 '>
                    <div  className={`first_div bg-warning`} style={{ borderRadius: "5px" }}>
                        <div>
                            <Button className='btn-dark' style={{ borderRadius: "0px !important", width: "150px", marginTop: "80px" }}>Single Choice</Button>
                        </div>
                        <div>
                            <Button className='btn-dark ' style={{ borderRadius: "0px !important", width: "150px", marginTop: "20px" }}>Multiple Choice</Button>
                        </div>
                        <div>
                            <Button className='btn-dark' style={{ borderRadius: "0px !important", width: "150px", marginTop: "20px" }}>Text Input</Button>
                        </div>
                    </div>
                    <div className='my-3'>
                        <Button className='btn-dark' style={{ borderRadius: "0px !important", width: "120px" }}>
                            Submit</Button>
                    </div>
                </Col>
                <Col md='3' className='text-center'></Col>
            </Row>
        </Layout>
    )
}
