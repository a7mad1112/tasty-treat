import React, { useState, useEffect } from 'react'
import products from '../assets/fake-data/products';
import { useParams } from 'react-router-dom';
import Helmet from '../component/Helmet/Helmet';
import CommonSection from '../component/UI/common-section/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import '../styles/product-details.css';
import ProductCard from '../component/UI/product-card/ProductCard';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/shopping-cart/cartSlice';

export default function FoodDetails() {

    const [tab, setTab] = useState('desc');
    const {id} = useParams();
    const product = products.find(product => product.id === id);
    const [previewImg, setPreviewImg] = useState(product.image01);
    const relatedProducts = products.filter(item => item.category === product.category);
    const dispatch = useDispatch();
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnterdEmail] = useState('');
    const [reviewMsg, setReviewMsg] = useState('');

    const submitHandler = e => {
        e.preventDefault();
    }

    const addItem = () => {
        dispatch(cartActions.addItem( {...product} ))
    }

    useEffect(() => {
        setPreviewImg(product.image01);
        window.scrollTo(0, 0);
    }, [product]);

    return <Helmet title='Product-details'>
        <CommonSection title={product.title}/>

        <section>
            <Container>
                <Row>
                    <Col lg='2' md='2' sm='2'>
                        <div className="product__images">
                            <div className="img__item mb-3" onClick={() => setPreviewImg(product.image01)}>
                                <img className='w-50' src={product.image01} alt="product-img" />
                            </div>
                            <div className="img__item mb-3" onClick={() => setPreviewImg(product.image02)}>
                                <img className='w-50' src={product.image02} alt="product-img" />
                            </div>
                            <div className="img__item" onClick={() => setPreviewImg(product.image03)}>
                                <img className='w-50' src={product.image03} alt="product-img" />
                            </div>
                        </div>
                    </Col>
                    <Col lg='4' md='4' sm='4'>
                        <div className="product__main-img">
                            <img className='w-100' src={previewImg} alt="product-main-img" />
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='4'>
                        <div className="single__product-content">
                            <h2 className='product__title mb-3'>{product.title}</h2>
                            <p className='product__price'>Price: <span>${product.price}</span></p>
                            <p className='category mb-5'>Category: <span>{product.category}</span></p>
                            <button className='addTOCart__btn' onClick={addItem}>Add to Cart</button>
                        </div>
                    </Col>
                    <Col lg='12'>
                        <div className="tabs d-flex align-items-center gap-5 py-3">
                            <h6 className={tab === 'desc' ? `tab__active` : null} onClick={()=> setTab('desc')}>Description</h6>
                            <h6 className={tab === 'rev' ? `tab__active` : null}  onClick={()=> setTab('rev')}>Review</h6>
                        </div>
                        {
                            tab === 'desc' ? (
                                <div className='tab__content'>
                                    <p>{product.desc}</p>
                                </div>
                            ) : 
                            (
                                <div className="tab__form mb-3">

                                    <div className="review pt-5">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className='user__email'>jhon1@gmail.com</p>
                                        <p className='feedback__text'>great product</p>
                                    </div>

                                    <div className="review">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className='user__email'>jhon1@gmail.com</p>
                                        <p className='feedback__text'>great product</p>
                                    </div>

                                    <div className="review">
                                        <p className="user__name mb-0">
                                            Jhon Doe
                                        </p>
                                        <p className='user__email'>jhon1@gmail.com</p>
                                        <p className='feedback__text'>great product</p>
                                    </div>


                                    <form className="form p-3" onSubmit={submitHandler}>
                                        <div className="form__group">
                                            <input required type="text" placeholder='Enter your name' onChange={e => setEnteredName(e.target.value)} />
                                        </div>

                                        <div className="form__group">
                                            <input required type="text" placeholder='Enter your email' onChange={e => setEnterdEmail(e.target.value)} />
                                        </div>

                                        <div className="form__group">
                                            <textarea required rows={5} type="text" placeholder='Write your review' onChange={e => setReviewMsg(e.target.value)} />
                                        </div>
                                        <button type='submit' className='addTOCart__btn'>Submit</button>
                                    </form>
                                </div>
                            )
                        }
                        
                    </Col>
                    <Col className='mb-5 mt-4' lg='12'>
                        <h2 className='related__product-title'>You might also like</h2>
                    </Col>
                    {
                        relatedProducts.map(item => (
                            <Col className='mb-4' xl='3' lg='4' md='4' sm='6' xs='12' key={item.id}>
                                <ProductCard item={item}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </section>
    </Helmet>
}
