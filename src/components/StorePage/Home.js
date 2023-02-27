import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import './home.scss';
import Category from '../category/categories';
import Products from './Products';
import { Context } from '../../u/context';

const Home = () => {


{/*  const getCategories=()=>{
    fetchData("/api/categories?populate=*").then((res) => {
      console.log(res);
      setData(res)
    })
  }*/}
 



  return (
    <div>
       <div className="main-content">
                <div className="layout">
                   {/** <Category  data={data}/> */}


                    <Products
                        headingText="Popular Products"
                      
                    />
                </div>
            </div>
    </div>
  )
}

export default Home