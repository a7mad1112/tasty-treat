import React from 'react'
import { ListGroup } from 'reactstrap'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'
import '../../../styles/shopping-cart.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartUiActions } from '../../../store/shopping-cart/cartUiSlice';

const Carts = () => {
    const dispatch = useDispatch ();
    const cartsProduct = useSelector(state => state.cart.cartItems);
    const totalAmount = useSelector(state => state.cart.totalAmount);

    const toggleCart = () => dispatch(cartUiActions.toggle());
    return <div className="cart__container">
        <ListGroup className='cart'>
            <div className="cart__close">
                <span onClick={toggleCart}><i className="ri-close-line"></i></span>
            </div>

            <div className='cart__item-list'>
                {
                    cartsProduct.length === 0 ? <h6 className='text-center mt-5'>No item added to the cart</h6>
                    : cartsProduct.map((item, index) => <CartItem item={item} key={index} />)
                }
            </div>

            <div className='cart__bottom d-flex align-items-center justify-content-between '>
                <h6>Subtotal : <span>${totalAmount}</span></h6>
                <button><Link to='/checkout'>Checkout</Link></button>
            </div>
        </ListGroup>
    </div>
}

export default Carts