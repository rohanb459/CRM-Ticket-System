import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

export const LoginForm = (props) => {
  return (
    <Container>
        <Row>
            <Col>
                <h1 className=" text-center">User Login</h1>
                <hr />

                <Form autoComplete='off' onSubmit={props.handleOnSubmit}>
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

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            onChange={props.handleOnChange}
                            value={props.pass}
                            placeholder = "Enter password"
                            
                        />         
                    </Form.Group>
                    <br></br>
                    <Button type="submit"  className='text-center'>Login</Button>
                    <hr/>

                    <Row>
                        <Col>
                            <a href='#!' onClick={()=>props.formSwitcher('reset')}>Forget Password</a>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    </Container>
  )
}
