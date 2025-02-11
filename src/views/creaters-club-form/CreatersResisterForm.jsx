import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import {
    Form,
    Button,
    ProgressBar,
    Row,
    Col,
  } from "react-bootstrap";
const CreatersResisterForm = () => {
  return (
    <section className='section resitrationform'>
        <Container>
            <div className="">
                <h3>Register Now!</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley...</p>
                <Form className='form'>
                    <div className="row">
                        <div className="col-lg-4">
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Enter your name"
                            className="mb-3 form-floating-lb"
                            >
                            <Form.Control
                                className="form-float"
                                type="text"
                                placeholder="Enter your name"
                            />
                            </FloatingLabel>
                        </div>
                        <div className="col-lg-4">
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Enter your email id"
                            className="mb-3 form-floating-lb"
                            >
                            <Form.Control
                                className="form-float"
                                type="email"
                                placeholder="name@example.com"
                            />
                            </FloatingLabel>
                        </div>
                        <div className="col-lg-4">
                            <FloatingLabel
                            controlId="floatingInput"
                            label="Enter your phone no."
                            className="mb-3 form-floating-lb"
                            >
                            <Form.Control
                                className="form-float"
                                type="email"
                                placeholder="1234567896"
                            />
                            </FloatingLabel>
                        </div>
                        <div className="col-lg-12 text-end">
                        <Link to="/pay-now" className="button2">Submit</Link>
                        </div>
                    </div>
                </Form>
            </div>
        </Container>
    </section>
  )
}

export default CreatersResisterForm