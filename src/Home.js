import React from 'react'
import "./CSS/Home.css";
import Product from './Product.js';

function Home() {
  return (
    <div className='Home'>
      <div className="home__container">
        <img className='home__banner'
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Ravina/Push/3000x1200_Yeh-Meri-Family-S2_V11._CB588519479_.jpg"
        alt=''
        />
      </div>
      <div className="home__row">
        {//procut 1,2
        }
        <Product
          title= "Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
          price= {49999.00}
          rating= {4}
          image= "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" />
        
        <Product
          title= "Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
          price= {49999.00}
          rating= {4}
          image= "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" />
        
      </div>
      <div className="home__row">
        {//product 1,2,3
        }
        <Product
          title= "Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
          price= {49999.00}
          rating= {4}
          image= "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" />
        <Product
          title= "Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
          price= {49999.00}
          rating= {4}
          image= "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" />
        
        <Product
          title= "Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
          price= {49999.00}
          rating= {4}
          image= "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" />
      </div>
      <div className="home__row">
        {//product
        } 
        <Product
          title= "Samsung Galaxy S23 5G (Green, 8GB, 256GB Storage)"
          price= {49999.00}
          rating= {4}
          image= "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" />
        
      </div>
    </div>
  );
}

export default Home;
