import React, { useState, useEffect } from 'react'
import Helmet from '../component/Helmet/Helmet';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import heroImg from '../assets/images/hero.png';
import '../styles/hero-section.css';
import Category from '../component/UI/category/Category';
import '../styles/home.css';
import featureImg01 from '../assets/images/service-01.png';
import featureImg02 from '../assets/images/service-02.png';
import featureImg03 from '../assets/images/service-03.png';
import products from '../assets/fake-data/products';
import foodCategoryImg01 from '../assets/images/hamburger.png';
import foodCategoryImg02 from '../assets/images/pizza.png';
import foodCategoryImg03 from '../assets/images/bread.png';
import ProductCard from '../component/UI/product-card/ProductCard';
import whyImg from '../assets/images/location.png';
import networkImg from "../assets/images/network.png";
import TestimonialSlider from '../component/UI/slider/TestimonialSlider';



const featureData = [
    {
        title: 'Quick Delivery',
        imgUrl: featureImg01,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'
    },
    {
        title: 'Super Dine In',
        imgUrl: featureImg02,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'
    },
    {
        title: 'Easy Pick Up',
        imgUrl: featureImg03,
        desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.'
    },
];

export default function Home() {

    const [category, setCategory] = useState('ALL');
    const [AllProducts, setAllProducts] = useState(products);
    useEffect(() => {
        if (category === 'ALL')
            setAllProducts(products);
        if (category === 'BURGER'){
            const fillteresdProducts = products.filter(item => item.category === 'Burger');
            setAllProducts(fillteresdProducts);
        }

        if (category === 'PIZZA'){
            const fillteresdProducts = products.filter(item => item.category === 'Pizza');
            setAllProducts(fillteresdProducts);
        }

        if (category === 'BREAD'){
            const fillteresdProducts = products.filter(item => item.category === 'Bread');
            setAllProducts(fillteresdProducts);
        }
    }, [category]);

    const [hotPizza, setHotPizza] = useState([]);
    useEffect(() => {
        const filteredPizza = products.filter(item => item.category === 'Pizza');
        const slicePizza = filteredPizza.slice(0, 4);
        setHotPizza(slicePizza);
    }, []);

    return <Helmet title='Home'>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="hero__content">
                            <h5 className='mb-3'>Easy way to make an order</h5>
                            <h1 className='mb-4 hero__title'> <span>HUNGRY?</span> Just wait <br/> food <span>at your door</span> </h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui magni delectus tenetur autem, sint veritatis!</p>
                            <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                                <button className='order__btn d-flex align-items-center justify-content-between'>Order now <i className="ri-arrow-right-s-line"></i></button>

                                <button className='all__foods-btn'>
                                    <Link to='/foods'>See all foods</Link>
                                </button>
                            </div>
                            <div className='hero__service d-flex align-items-center gap-5 mt-5'>
                                <p className=' d-flex align-items-center gap-2'>
                                    <span className='shipping__icon'><i className="ri-car-line"></i></span>
                                    No shipping charge
                                </p>

                                <p className=' d-flex align-items-center gap-2'>
                                    <span className='shipping__icon'><i className="ri-shield-check-line"></i></span>
                                    100% secure checkout
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="hero__img">
                            <img className='w-100' src={heroImg} alt="hero img" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='pt-0'>
            <Category/>
        </section>
        <section>
            <Container>
                <Row>
                    <Col className=' text-center' lg='12'>
                        <h5 className='feature__subtitle mb-4'>What we serve</h5>
                        <h2 className='feature__title'>Just sit back at home</h2>
                        <h2 className='feature__title'>we will <span>take cart</span></h2>
                        <p className='mb-1 mt-4 feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, placeat.</p>
                        <p className='feature__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, ipsam!</p>
                    </Col>

                    {
                        featureData.map((item, index) => (
                            <Col className='mt-5' lg='4' md='6' sm='6' key={index}>
                                <div className="feature__item text-center px-5 py-3">
                                    <img className='w-25 mb-3' src={item.imgUrl} alt="feature-img" />
                                    <h5 className=' fw-bold'>{item.title}</h5>
                                    <p>{item.desc}</p>
                                </div>
                            </Col>
                        ))
                    }
                    
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center'>
                        <h2>Popular Foods</h2>
                    </Col>
                    <Col lg='12'>
                        <div className="food__category d-flex align-items-center justify-content-center gap-sm-2 gap-lg-4 ">
                            <button className={`all__btn ${category === 'ALL' && 'foodBtnActive'}`} onClick={() => setCategory('ALL')}>All</button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'BURGER' && 'foodBtnActive'}`} onClick={() => setCategory('BURGER')}><img src={foodCategoryImg01} alt="food-category" />Burger</button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'PIZZA' && 'foodBtnActive'}`} onClick={() => setCategory('PIZZA')}><img src={foodCategoryImg02} alt="food-category" />Pizza</button>
                            <button className={`d-flex align-items-center gap-2 ${category === 'BREAD' && 'foodBtnActive'}`} onClick={() => setCategory('BREAD')}><img src={foodCategoryImg03} alt="food-category" />Bread</button>
                        </div>
                    </Col>

                    {
                        AllProducts.map(item => (
                            <Col className='mt-5' xl='3' lg='4' md='4' sm='6' xs='12' key={item.id}>
                                <ProductCard item={item}/>
                            </Col>
                        ))
                    }
                    
                </Row>
            </Container>
        </section>
        <section className='why__choose-us'>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img className='img-fluid' src={whyImg} alt="why-img" />
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="why__tasty-treat">
                            <h2 className="tasty__treat-title mb-4">Why <span>Tasty Treat?</span></h2>
                            <p className='tasty__treat-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto officiis esse ab corporis! Beatae modi iure reiciendis doloribus dolores sapiente repellat fugiat tempora quae expedita vero voluptas, nam ut veritatis?</p>
                            <ListGroup className='mt-4'>
                                <ListGroupItem className='border-0 ps-1'>
                                    <p className=' choose-us-title d-flex align-align-items-center gap-2 '>
                                        <i className="ri-checkbox-circle-line"></i>
                                        Fresh and tasty foods
                                    </p>
                                    <p className='choose-us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, voluptas.</p>
                                </ListGroupItem>

                                <ListGroupItem className='border-0 ps-1'>
                                    <p className=' choose-us-title d-flex align-align-items-center gap-2 '>
                                        <i className="ri-checkbox-circle-line"></i>
                                        Quality support
                                    </p>
                                    <p className='choose-us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, rem. Dolores, assumenda.</p>
                                </ListGroupItem>

                                <ListGroupItem className='border-0 ps-1'>
                                    <p className=' choose-us-title d-flex align-align-items-center gap-2 '>
                                        <i className="ri-checkbox-circle-line"></i>
                                        Order from any location
                                    </p>
                                    <p className='choose-us-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, quisquam!</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <section className='pt-0'>
            <Container>
                <Row>
                    <Col className='text-center mb-5' lg='12'>
                        <h2>Hot Pizza</h2>
                    </Col>
                    {
                        hotPizza.map(item => (
                            // <Col key={item.id} lg='3' md='3'>
                            <Col className='mb-4' xl='3' lg='4' md='4' sm='6' xs='12' key={item.id}>
                                <ProductCard item={item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6' className=' mb-5'>
                        <div className='testimonial'>
                            <h5 className='testimonial__subtitle mb-4'>Testimonial</h5>
                            <h2 className='testimonial__title mb-4'>What our <span>customers</span> are saying</h2>
                            <p className='testimonial__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam maiores sint molestias perferendis voluptas cumque illum ipsa expedita veniam dolor.</p>
                            <TestimonialSlider/>
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <img className='img-fluid' src={networkImg} alt="Testimonial-img" />
                    </Col>
                </Row>
            </Container>
        </section>
        
    </Helmet>
};
