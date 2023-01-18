import React from 'react'
import { Row, Col, Button } from "react-bootstrap"
export default function sixth() {
    return (
        <>
            <div className='bg-dark text-light' style={{ height: "50px", padding: "20px 0px 0px 20px" }}>
                <h4>Your Surveys</h4>
            </div>
            <div style={{minHeight:'595px'}}>
                <Row className='m-0 justify-content-center'>
                    <Col md='5' className='mt-5'>
                        <div className={`sixth_div mx-auto`}
                            style={{
                                backgroundColor: "yellow",
                                height: "30vh",
                                width: "25vh",
                                borderRadius: "5px"
                            }}>

                        </div>
                    </Col>
                    <Col md='5' className='mt-5 text-center'>
                        <div className='mx-auto'>
                            <p>Status: 100%</p>
                            <Button className='btn-dark' style={{ borderRadius: "0px !important", width: "120px" }}>
                                Get CSV</Button>
                        </div>
                    </Col>
                </Row>
                <Row className='m-0 justify-content-center'>
                    <Col md='5' className='mt-5'>
                        <div className='mx-auto'
                            style={{
                                backgroundColor: "aqua",
                                height: "30vh",
                                width: "25vh",
                                borderRadius: "5px"
                            }}>

                        </div>
                    </Col>
                    <Col md='5' className='mt-5 mb-5 text-center'>
                        <div className='mx-auto justify-content-center d-grid'>
                            <p>Status: 80%</p>
                            <Button className='btn-dark' style={{ borderRadius: "0px !important", width: "120px" }}>
                                Get CSV</Button>
                            <Button
                                className='bg-danger mx-auto mt-1'
                                style={{
                                    borderRadius: "0px !important",
                                    width: "80px",
                                    fontSize:"10px",
                                }}
                            >
                                Stop survey
                            </Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='bg-dark mt-5' style={{bottom:"0",position:'fixed',width:"100%"}}>&nbsp;</div>
        </>

    )
}
