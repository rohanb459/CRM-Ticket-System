import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const ResetPassword = (props) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className=" text-center">Reset Password</h1>
                <hr />

                <Form autoComplete='off' onSubmit={props.handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            onChange={props.handleOnChange}
                            value={props.email}
                            placeholder = "Enter email"
                            
                        />
                    </Form.Group>

                    
                    <br></br>
                    <Button type="submit"  className='text-center'>Reset Password</Button>
                    <hr/>

                    <Row>
                        <Col>
                            <a href='#!' onClick={()=>props.formSwitcher('login')}>login Now</a>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}
