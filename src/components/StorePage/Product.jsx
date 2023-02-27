import React from 'react'
import { useNavigate } from "react-router-dom";
import './product.scss'


const Product = ({data, id}) => {
  const navigate=useNavigate()
  return (
    <div className='product-card'  onClick={()=> navigate("/product/"+id)}>
      <div className="thumbnail">
        <img src={process.env.REACT_APP_DEV_URL+data.img.data.attributes.url} alt="" />
      </div>
      <div className="product-details">
        <span className="name">{data.title}</span>
        <span className="price">&#8377; {data.price}</span>
      </div>
    </div>
  )
}

export default Product