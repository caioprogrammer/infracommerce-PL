import { useEffect } from "react";
import { useState } from "react";

import { products } from "../constants/data"
import ProductCard from './ProductCard';

function FloatCart() {
    const [hasProduct, setHasProduct] = useState(true);
    const inCartProducts = JSON.parse(localStorage.getItem('products'));
    
    

    useEffect(() => {
        var cart = [];
        cart.totalcart = 0;
        document.querySelectorAll(".aside__content input[type=hidden]").forEach(function(item,i){
            if(i===0) cart.totalcart = 0;
            cart.totalcart += item.value++;
        });
        document.querySelector(".total-amount").append(cart.totalcart)
        console.log(cart.totalcart)

    })
    return (
        <>
            <aside className="aside">
                <div class="aside__header"></div>
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
                        {/* {products.map((product, index) => ( */}
                            <ProductCard product={products[0]} />
                            <ProductCard product={products[2]} />
                            <ProductCard product={products[4]} />
                        {/* ))} */}
                    </ul>
                </div>
                <div className="aside__total">
                    <button type="button" class="checkout-button">
                        <div class="content">
                            <span class="total-text">
                                Estimated Total: <span class="total-amount">$</span>
                            </span>
                            <span class="cta-text-2">Checkout</span>
                        </div>
                    </button>
                </div>
            </aside>
        </>
    )
}
export default FloatCart;