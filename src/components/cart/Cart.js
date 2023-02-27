import React, { useState } from 'react'
import { MdClose } from 'react-icons/md'
import { BsCartX } from 'react-icons/bs'
import CartItem from './CartItem'
import './Cart.scss'

const Cart = ({setCart}) => {
  return (
    <div className="cart-panel">
      <div className="opeclevel"></div>
      <div className="cart-content">

        <div className="cart-header">
          <span className="heading">Cart</span>
          <span className="close-btn" onClick={()=>setCart(false)}>
            <MdClose></MdClose>
            <span className="text">close</span>
          </span>
        </div>
    {/*
    <div className="empty-cart">
          <BsCartX></BsCartX>
          <span>No Product In The Cart.</span>
          <button className='return'>Let's Go To Shop</button>
        </div> */}
        
        <>
          <CartItem/>
          <div className="cart-footer">
            <div className="subtotal">
              <span className="text">Subtotal: </span>
              <span className='text total'>&#8377; 1234</span>
            </div>
            <div className="btn">
              <button className="checkout">Checkout</button>
            </div>
          </div>
        </>

      </div>
    </div>
  )
}

export default Cart