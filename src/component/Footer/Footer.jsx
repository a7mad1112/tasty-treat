import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import '../../styles/footer.css';
export default function Footer() {
    return (
        <footer className='footer'>
            <Container>
                <Row>
                    <Col lg='3' md='4' sm='6'>
                        <div className="logo footer__logo text-start">
                            <img src={logo} alt='logo' />
                            <h5>Tasty Treat</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer__title'>Delivery Time</h5>
                        <ListGroup className='delivery__time-list'>
                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Sunday - Thursday</span>
                                <p>10:00am - 11:00pm</p>
                            </ListGroupItem>

                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Friday - Saturday</span>
                                <p>Off day</p>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                    <h5 className='footer__title'>Contact</h5>
                        <ListGroup className='delivery__time-list'>
                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <p>Location: Palestine, Jenin</p>
                            </ListGroupItem>
                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Phone: +970595809023</span>
                            </ListGroupItem>

                            <ListGroupItem className='delivery__time-item border-0 ps-0'>
                                <span>Email: ahmalawneh79@gmail.com</span>
                            </ListGroupItem>
                        </ListGroup>
                    </Col>
                    <Col lg='3' md='4' sm='6'>
                        <h5 className='footer__title'>Newsletter</h5>
                        <p>Subscribe our newsletter</p>
                        <div className="newsletter">
                            <input type="email" placeholder='Enter your email' />
                            <span><i className="ri-send-plane-line"></i></span>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col lg='6' md='6'>
                        <p className='copyright__text'>Copyright - 2022, website made by Ahmed Alawneh. All
                            Rights Reserved.
                        </p>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="social__links d-flex justify-content-end align-items-center gap-4">
                            <p className='m-0'>Follow: </p>
                            <span> <a target='_blank' href='https://www.facebook.com/profile.php?id=100044925130847'><i className="ri-facebook-line"></i></a> </span>
                            <span> <a target='_blank' href='https://github.com/a7mad1112'><i className="ri-github-line"></i></a> </span>
                            <span> <a target='_blank' href='https://www.linkedin.com/in/ahmad-alawneh-a92306250/'><i className="ri-linkedin-line"></i></a> </span>
                            <span> <a target='_blank' href='https://t.me/ProgrammerLevi'><i className="ri-telegram-line"></i></a> </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
