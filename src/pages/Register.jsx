import React from 'react'
import CommonSection from '../component/UI/common-section/CommonSection';
import Helmet from '../component/Helmet/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function Register() {

    const signupNameRef = useRef();
    const signupPasswordRef = useRef();
    const signupEmailRef = useRef();
    const submitHandler = e => {
        e.preventDefault();
    }

    return <Helmet title='Signup'>
        <CommonSection title='Signup' />
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className='m-auto text-center'>
                        <form className="form mb-5" onSubmit={submitHandler}>
                            <div className="form__group">
                                <input ref={signupNameRef} required type="text" placeholder='Full name' />
                            </div>
                            <div className="form__group">
                                <input ref={signupEmailRef} required type="email" placeholder='Email' />
                            </div>

                            <div className="form__group">
                                <input ref={signupPasswordRef} required type="password" placeholder='Password' />
                            </div>

                            <button className='addTOCart__btn' type='submit'>Sign Up</button>
                        </form>

                        <Link to='/login'>Already have an account? Login</Link>
                    </Col>
                </Row>
            </Container>
        </section>
    </Helmet>
}
