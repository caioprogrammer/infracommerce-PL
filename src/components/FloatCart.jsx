import { useEffect } from "react";
import { useState } from "react";
import { products } from "../constants/data";

function ProductCard({product}) {
        return (
            <li className="product">
            <img 
            src={product.src}
            alt={product.title}
            />
            <button id={product.id} >
                <span style={{pointerEvents: 'none'}}>
                    COMPRAR
                </span> 
            </button>
        </li>
        )
}

function FloatCart() {
    const [hasProduct, setHasProduct] = useState(true);
    const inCartProducts = JSON.parse(localStorage.getItem('products'))
    return (
        <>
            <aside className="aside">
                {!hasProduct && 
                    <div className="aside__empty">
                        <div class="heading">Your Shopping Bag</div>
                        <div class="description">
                            <p>Your shopping bag is empty.</p>
                        </div>
                        <div className="account">
                            <span>For faster checkout, sign in your account</span>
                            <a href="#" className="hoverEffect">Sign In</a>
                        </div>
                    </div>
                }
                
                <div className="aside__content">
                    <ul>
                        {/* {products.map((product, index) => (
                            <ProductCard 
                                key={index} 
                                product={product} 
                            />
                        ))}    */}
                    </ul>
                </div>
                
            </aside>
            <div className="backdrop"></div>
        </>
    )
}
export default FloatCart;