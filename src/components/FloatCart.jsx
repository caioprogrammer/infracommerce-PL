import { useEffect } from "react";
import { useState } from "react";

function FloatCart() {
    const [hasProduct, setHasProduct] = useState(true);
    const inCartProducts = JSON.parse(localStorage.getItem('products'));
    const createElement = function (){
        if(inCartProducts) {
            inCartProducts.map((item) => {
                var temp = document.createElement('div');
                temp.innerHTML = item;
                updateCart(temp);
            })
        }
    }
    const updateCart = function (arr) {
        document.querySelector(".aside__content ul").appendChild(arr);
    }
    useEffect(() => {
        createElement();
    })
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
                    <ul></ul>
                </div>
                
            </aside>
            <div className="backdrop"></div>
        </>
    )
}
export default FloatCart;