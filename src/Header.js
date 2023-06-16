/* To make things faster we added extension es7 
wrote "rfce" and basic format automatially popped up*/
import React from 'react';
import "./CSS/Header.css";
import SearchIcon from '@mui/icons-material/Search'; /*copied from material ui website to download search icon */
import { ShoppingCartCheckout } from '@mui/icons-material';

function Header() {
  return (
    <div className='header'>
      <img className='header__logo'
      src='https://nickiekrommingahill.com/wp-content/uploads/2020/05/white-amazon-logo-png-6.png'
            alt=''
      />
      <div className='header__search'>
        <input className='header__searchInput' type='text' />      
        <SearchIcon className='header__searchIcon' />
      </div>

      <div className='header__nav'>
        <div className='header__options'>
          <span className='header__optionLineOne'>
            Hello Guest
          </span>
          <span className='header__optionLineTwo'>
            Sign In
          </span>
        </div>
        <div className='header__options'>
        <span className='header__optionLineOne'>
          Returns
          </span>
          <span className='header__optionLineTwo'>& Orders </span>
        </div>
        <div className='header__options'>
        <span className='header__optionLineOne'>
          Your
          </span>
          <span className='header__optionLineTwo'>
            Prime
          </span>
        </div>
        <div className="header__optionBasket">
          <ShoppingCartCheckout />
          <span className='header__optionBasket header__basketCount'>
            0
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
