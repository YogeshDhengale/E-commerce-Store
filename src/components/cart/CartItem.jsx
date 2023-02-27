import React, { useState, useContext } from 'react'
import { MdClose } from 'react-icons/md'
import pord from '../../assets/godOfWar.webp'
import './cartItem.scss'
import { Context } from '../../u/context'

const CartItem = () => {
    const {
        cartItem, 
        handleAddToCart,
        handleRemoveCart,
        handleCartProductQuantity
    } = useContext(Context);


    const [count, setCount] = useState(1)
    const handleIncriment=()=>{
        setCount(count+1)
    }

    const handleDecriment=()=>{
        if(count>1){
            setCount(count-1)
        }
    }

    cartItem.map(item=>{
        console.log(item.attributes.quantity);
    })

    return (
        <div className='cart-products'>
            {cartItem.map(item => (
             
                <div key={item.id} className="cart-product">
                <div className="img-container">
                    <img src={process.env.REACT_APP_DEV_URL + item.attributes.img.data.attributes.url} alt="" />
                </div>
                <div className="details">
                    <span className="name">{item.attributes.title}</span>
                    <MdClose className='close-btn' onClick={()=> handleRemoveCart(item)}/>
                    <div className="quantity-btn">
                        <span onClick={()=>handleCartProductQuantity('dec', item)}>-</span>
                        <span>{item.attributes.quantity}</span>
                        <span onClick={()=>handleCartProductQuantity('inc', item)}>+</span>
                    </div>
                    <div className="text">
                        <span>{item.attributes.quantity}</span>
                        <span>X</span>
                        <span className='highlight'>&#8377; {item.attributes.price * item.attributes.quantity}</span>
                    </div>
                </div>
            </div>
            ))}
            

        </div>
    )
}

export default CartItem