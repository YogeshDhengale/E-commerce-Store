import React, {useState} from 'react'
import './navbar.css'
//import {FaCartPlus} from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import Cart from '../cart/Cart';
//import { Link } from 'react-router-dom'


const Navbar = () => {
    const [cart, setCart]=useState(false)
  return (
    <>
            <div className='navbar'>
                <div Class="logo">
                    <h1 ><a href="/">E-Commerce Store</a></h1>
                </div>
                <div className='cam' onClick={()=> setCart(true)}>
                  <CgShoppingCart></CgShoppingCart>
                </div>
            </div>

            {cart && <Cart setCart={setCart}></Cart>}

        </>
  )
}

export default Navbar