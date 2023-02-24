import React, { useRef, useEffect } from 'react';
import { Container } from 'reactstrap';
import logo from '../../assets/images/res-logo.png';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/header.css';
import { useSelector, useDispatch } from 'react-redux';
import { cartUiActions } from '../../store/shopping-cart/cartUiSlice';

const nav_links = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Foods',
        path: '/foods'
    },
    {
        display: 'Cart',
        path: '/cart'
    },
    {
        display: 'Checkout',
        path: '/checkout'
    }
]

export default function Header() {

    const menuRef = useRef(null);
    const headerRef = useRef(null);
    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const dispatch = useDispatch();
    
    const togglemenu = () => menuRef.current.classList.toggle("show__menu");
    const toggleCart = () => {
        dispatch(cartUiActions.toggle());
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)
                headerRef.current.classList.add('header__shrink');
            else
                headerRef.current.classList.remove('header__shrink');
            
                return () => window.removeEventListener('scroll');
        })
    }, []);
    return <header className="header" ref={headerRef}>
        <Container>
            <div className='nav__wrapper d-flex align-items-center justify-content-between'>
                <div className="logo">
                    <img src={logo} alt='logo' />
                    <h5>Tasty Treat</h5>
                </div>

                {/* ==== menu ==== */}
                <div className=' navigation' ref={menuRef} onClick={togglemenu}>
                    <div className="menu d-flex align-items-center gap-5">
                        {
                            nav_links.map((item, index) => (
                                <NavLink to={item.path} key={index}
                                className={navClass => navClass.isActive ? 'active__menu' : null}
                                >{item.display}</NavLink>
                            ))
                        }
                    </div>
                </div>

                {/* ==== nav right icons ==== */}
                <div className="nav_right d-flex align-items-center gap-4">
                    <span className="cart__icon" onClick={toggleCart}>
                        <i className="ri-shopping-basket-line"></i>
                        <span className="cart__badge">{totalQuantity}</span>
                    </span>
                    <span className="user">
                        <Link to='/login'> <i className="ri-user-line"></i> </Link>
                    </span>
                    <span className="mobile__menu" onClick={togglemenu}>
                        <i className="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
};
