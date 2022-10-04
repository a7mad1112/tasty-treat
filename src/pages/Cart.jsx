import React from 'react'
import CommonSection from '../component/UI/common-section/CommonSection';
import Helmet from '../component/Helmet/Helmet';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import '../styles/cart-page.css';
import { cartActions } from '../store/shopping-cart/cartSlice';
import { Link } from 'react-router-dom';


export default function Cart() {

    const cartItems = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);


    return <Helmet title='Cart'>
            <CommonSection title='Your Cart' />
            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            {
                                cartItems.length === 0 ? <h5 className="text-center">Your cart is empty</h5>
                                : (
                                    <table className='table table-bordered'>
                                        <thead>
                                            <tr>
                                                <th>Image</th>
                                                <th>Product Title</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map(item => <Tr item={item} key={item.id} />)
                                            }
                                        </tbody>
                                    </table>
                                )
                            }
                            <div className='mt-4'>
                                <h6 >Subtotal: $<span className='cart__subtotal'>{totalAmount}</span></h6>
                                <p>Taxes and shipping will calculate at checkout</p>
                                <div className='cart__page-btn'>
                                    <button className='addTOCart__btn me-4'><Link to='/foods'>Continue Shopping</Link></button>
                                    <button className='addTOCart__btn'><Link to='/checkout'>Proceed to checkout</Link></button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
};

const Tr = props => {
    const dispatch = useDispatch();
    const deleteItem = () => {
        dispatch(cartActions.deleteItem(props.item.id))
    }
    return <tr>
        <td className='text-center cart__img-box'><img src={props.item.image01} alt={`${props.item.title}-img`} /></td>
        <td className='text-center'>{props.item.title}</td>
        <td className='text-center'>${props.item.price}</td>
        <td className='text-center'>{props.item.quantity}x</td>
        <td className='text-center cart__item-del'><i onClick={deleteItem} className="ri-delete-bin-line"></i></td>
    </tr>
}
