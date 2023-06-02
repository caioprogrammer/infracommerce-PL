import { useEffect, useState } from "react"

function Navbar() {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
      function setMobileWidth() {
        if (window.innerWidth < 996) {
          setMobile(true)
        } else {
          setMobile(false)
        }
      }
      document.querySelectorAll(".nav ul li").forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.add("active")
        })
      })
  
      setMobileWidth();
      window.addEventListener("resize", () => {
        setMobileWidth();  
      })
    })

    return (
        <nav className="nav">
            <ul>
                <li>
                    <a className="hoverEffect" href="#">Jewelry</a>
                    {mobile == true &&
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z" fill="#5C5F62"/></svg>
                    }
                    <div className="subcategories__container">
                        {mobile == true &&
                            <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z" fill="#5C5F62"/></svg>
                        }
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className="hoverEffect" href="#">Gifts</a>
                    {mobile == true &&
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z" fill="#5C5F62"/></svg>
                    }
                    <div className="subcategories__container">
                    {mobile == true &&
                            <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z" fill="#5C5F62"/></svg>
                        }
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <li className="has-image">
                                <img  loading='lazy' src="//media.tiffany.com/is/image/tiffanydm/WATCH-Flyout-Desktop?$tile$&amp;wid=1168&amp;hei=608" alt="Watches"></img>
                                <span>It's About Time</span>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">
                                    Explore all Categories <i className="fa-solid fa-chevron-right"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className="hoverEffect" href="#">Love & Engagement</a>
                    {mobile == true &&
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z" fill="#5C5F62"/></svg>
                    }
                    <div className="subcategories__container">
                        {mobile == true &&
                            <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z" fill="#5C5F62"/></svg>
                        }
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className="hoverEffect" href="#">Fine Watches</a>
                    {mobile == true &&
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z" fill="#5C5F62"/></svg>
                    }
                </li>
                <li>
                    <a className="hoverEffect" href="#">Home & Accessories</a>
                    {mobile == true &&
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z" fill="#5C5F62"/></svg>
                    }
                </li>
                <li>
                    <a className="hoverEffect" href="#">Fragance</a>
                    {mobile == true &&
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z" fill="#5C5F62"/></svg>
                    }
                </li>
                <li>
                    <a className="hoverEffect" href="#">Men's</a>
                    {mobile == true &&
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z" fill="#5C5F62"/></svg>
                    }
                    <div className="subcategories__container">
                        {mobile == true &&
                            <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z" fill="#5C5F62"/></svg>
                        }
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className="hoverEffect" href="#">Stories</a>
                    {mobile == true &&
                        <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 16a.999.999 0 0 1-.707-1.707L11.586 10 7.293 5.707a.999.999 0 1 1 1.414-1.414l5 5a.999.999 0 0 1 0 1.414l-5 5A.997.997 0 0 1 8 16z" fill="#5C5F62"/></svg>
                    }
                    <div className="subcategories__container">
                        {mobile == true &&
                            <svg width="18" height="18" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M12 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 0 1 0-1.414l5-5a.999.999 0 1 1 1.414 1.414L8.414 10l4.293 4.293A.999.999 0 0 1 12 16z" fill="#5C5F62"/></svg>
                        }
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                        <ul className="list">
                            <h3>Shop by Category</h3>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Earrings</a>
                            </li>
                            <li>
                                <a className="hoverEffect" href="#">Explore All Categories <i className="fa-solid fa-chevron-right"></i></a>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
