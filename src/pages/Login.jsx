import React from 'react'
import CommonSection from '../component/UI/common-section/CommonSection';
import Helmet from '../component/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Login() {

    const loginNameRef = useRef();
    const loginPasswordRef = useRef();
    const submitHandler = e => {
        e.preventDefault();
    }

    return <Helmet title='Login'>
        <CommonSection title='Login' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                        <form className="form mb-5" onSubmit={submitHandler}>
                            <div className="form__group">
                                <input ref={loginNameRef} required type="email" placeholder='Email' />
                            </div>

                            <div className="form__group">
                                <input ref={loginPasswordRef} required type="password" placeholder='Password' />
                            </div>

                            <button className='addTOCart__btn' type='submit'>Login</button>
                        </form>

                        <Link to='/register'>Don't have an account? Create an account</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}
