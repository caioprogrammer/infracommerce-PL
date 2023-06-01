import { useEffect } from 'react';
import { useState } from 'react'
import LogoHeader from '../assets/images/normal/tifanny-header-logo.svg'
import FloatCart from './FloatCart';
import LocationOptions from './LocationOptions';
import Navbar from './Navbar';

function Header() {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    function setMobileWidth() {
      if (window.innerWidth < 996) {
        setMobile(true)
      } else {
        setMobile(false)
      }
    }
    setMobileWidth();
    window.addEventListener("resize", () => {
      setMobileWidth();  
    })
  })

    return (
      <header className="header">
        <div className="header__top">
          <div className="content">
            <div className="top-banner">
              <div className="messages">
                <span>
                  Purchases made on this site will ship to U.S. addresses only. Do you want to shop the U.S. site?
                </span>
              </div>
              <div className="options">
                <a className="hoverEffect" href="#">Shop the U.S. site</a>
                Or
                <div className="dropdown-label">
                  Choose Location
                  <i className="fa-solid fa-caret-down"></i>
                </div>
              </div>
            </div>
            <LocationOptions />
          </div>
        </div>
        <div className="header__bottom">
          <div className='header__bottom-content'>
            <div className="left">
              {mobile == true &&
                <span className='header-icon menu-open'></span>
              }
              <div className="search">
                <a href="#">
                  <span className="header-icon search"></span>
                </a>
              </div>
              <div className="location">
                <a href="#">
                  <span className="header-icon location"></span>
                </a>
              </div>
              <div className="concierge">
                <a href="#">
                  <span className="header-icon concierge"></span>
                  <label htmlFor="#">
                    Contact Us
                  </label>
                </a>
              </div>
            </div>
            <div className="central">
              <img src={LogoHeader} alt="Logo Tiffany" />
            </div>
            <div className="right">
              <div className="appointment">
                <a href="#">
                  <span className="header-icon appointment"></span>
                  <label htmlFor="#">
                    Book an Appointment
                  </label>
                </a>
              </div>
              <div className="customer">
                <a href="#">
                  <span className="header-icon customer"></span>
                </a>
              </div>
              <div className="wishlist">
                <a href="#">
                  <span className="header-icon wishlist"></span>
                </a>
              </div>
              <div className="cart">
                <a href="#">
                  <span className="header-icon cart"></span>
                </a>
                <FloatCart />
              </div>
            </div>
          </div>
          <div className='header__bottom-nav'>
            <Navbar />
          </div>
        </div>
      </header>
    )
  }
  
  export default Header