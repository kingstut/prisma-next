import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { Button, Col, Row } from 'react-bootstrap'

export default function third() {
    return (
        <Layout>
            <Row className="w-100 m-0 h-100 mt-5" style={{ justifyContent: "center", alignItems: "center", }}>
                <Col md='3' className='text-center mb-3'>
                    <div className={`first_div bg-warning`}>
                    </div>
                </Col>
                <Col md='3' className='text-center mb-3'>
                    <div className={`first_div bg-warning`}>
                    </div>
                </Col>
                <Col md='3' className='text-center mb-3'>
                    <div>
                        <Button className='btn-dark' style={{ borderRadius: "0px !important", width: "120px" }}>
                            &nbsp;</Button>
                    </div>
                    <div>
                        $ gif
                    </div>
                </Col>
            </Row>
        </Layout>

    )
}
