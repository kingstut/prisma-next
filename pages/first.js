import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import { Button, Col, Row } from 'react-bootstrap'
export default function first() {
    return (
        <Layout>
            <Row className="w-100 m-0 justify-content-center mt-5">
                <Col md='3' className='mt-3'>
                    <div className={` first_div bg-warning`}>
                    </div>
                </Col>
                <Col md='3' className='mt-3'>
                    <div className={`first_div bg-warning`}>
                    </div>
                </Col>
                <Col md='3' className='mt-3'>
                    <div className={`first_div bg-warning`}>
                    </div>
                </Col>
            </Row>
            <div className='my-3 text-center'>
                <Button className='btn-dark' style={{ borderRadius: "0px !important", width: "120px" }}>
                    Next One
                </Button>
            </div>
        </Layout>
    )
}
