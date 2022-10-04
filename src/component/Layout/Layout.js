import React from 'react'

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import Routers from '../../routes/Routers';
import Carts from '../UI/cart/Carts.jsx';
import { useSelector } from 'react-redux';

export default function Layout() {
    const showCart = useSelector(state => state.cartUi.cartIsVisiable);
    return (
        <>
            <Header/>
            {
                showCart && <Carts/>
            }
            <div>
                <Routers/>
            </div>
            <Footer/>
        </>
    )
}
