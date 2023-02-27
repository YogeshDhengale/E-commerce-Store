import React, { useEffect, useState, useContext } from 'react'
import './single.scss'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Context } from '../../u/context'


const SingleProduct = () => {
  const [singleData, setSingleData] = useState()
  const { id } = useParams();

  const { handleAddToCart } = useContext(Context)


  useEffect(() => {
    const fetchSingle = async () => {
      try {
        const res = await axios.get(process.env.REACT_APP_DEV_URL + `/api/products?populate=*&[filters][id]=${id}`, {
          headers: {
            Authorization: "bearer " + process.env.REACT_APP_STRIPE_APP_KEY,

          },
        });
        setSingleData(res.data)
      } catch (error) {
        console.log(error);
        return error;
      }

    };
    fetchSingle();
  }, [])

  if (!singleData) return;

  const product = singleData.data[0].attributes;

  return (
    <div className="single-main">
      <div className="layout">
        <div className="single-product-page">
          <div className="left"><img src={process.env.REACT_APP_DEV_URL + product.img.data.attributes.url} alt="" /></div>
          <div className="right">
            <span className="name">{product.title}</span>
            <span className="price">&#8377; {product.price}</span>
            <div className="btn">
              <button className='cart-btn' onClick={()=>{
                handleAddToCart(singleData.data[0], 1)
              }}>BUY NOW</button>
            </div>
            <span className="divider" />
          </div>
        </div>
      </div>
      <div className="layout2">
        <h1 htmlFor="description">Description: </h1>
        <div className="description"><p>{product.description}</p></div>
        <h1 htmlFor="reviews">Reviews: </h1>
        <div className="reviews"><p>{product.reviews}</p></div>
      </div>
    </div>
  )
}

export default SingleProduct