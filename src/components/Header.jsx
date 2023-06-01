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
  function open() {
    document.querySelector(".header__bottom-nav").classList.add("active")
  }
  function close() {
    document.querySelector(".header__bottom-nav").classList.remove("active")
    document.querySelectorAll(".nav ul li").forEach(item => item.classList.remove("active"))
  }

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
                <span className='header-icon menu-open' onClick={open}></span>
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
            {mobile == true &&
              <span className='menu-close' onClick={close}>
                <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="#555" d="m3.219 2.154 6.778 6.773 6.706-6.705c.457-.407.93-.164 1.119.04a.777.777 0 0 1-.044 1.035l-6.707 6.704 6.707 6.702c.298.25.298.74.059 1.014-.24.273-.68.431-1.095.107l-6.745-6.749-6.753 6.752c-.296.265-.784.211-1.025-.052-.242-.264-.334-.72-.025-1.042l6.729-6.732-6.701-6.704c-.245-.27-.33-.764 0-1.075.33-.311.822-.268.997-.068Z"/></svg>
              </span>
            }
            <Navbar />
          </div>
        </div>
      </header>
    )
  }
  
  export default Header