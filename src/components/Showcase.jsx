import { Navigation } from 'swiper';
import { Swiper, SwiperSlide} from 'swiper/react';
import ProductCard from './ProductCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { products } from "../constants/data"
import { useEffect } from 'react';

function Showcase() {
    useEffect(() => {
        var stor = [];
        const products = document.querySelectorAll(".product");
        products.forEach((product) => {
            product.addEventListener("click", (e) => {
                var id = e.target.id;
                var item = e.target;
                addRemoveProduct(id, item)
            })
        })
        
        function addRemoveProduct(id, item) {
            id = id.toString();
            if ( stor.indexOf(id) === -1 ) {
                stor.push(id);
                item.classList.add('inCart');
            } else {
                var arrWithRemoveId = stor.filter(function(j){return j !== id;});
                item.classList.remove('inCart');
                stor = arrWithRemoveId;
            }
        console.log(stor);
        JSON.stringify(localStorage.setItem('products', JSON.stringify(stor)))
        }
    })


    return (
        <section className="showcase">
            <div className="slider">
            <Swiper modules={[Navigation]} spaceBetween={8}
            navigation 
            breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                400:{
                  slidesPerView:2.225,
                },
                768: {
                  slidesPerView: 4,
                }
              }}
            
            onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
                {products.map((product, index) => (
                    <SwiperSlide key={`product-${index}`}>
                        <ProductCard  product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>

            </div>
            {/* <a href="#" className='hoverEffect outline-full' >
                <span >
                    Shop Now
                </span>
            </a> */}
        </section>
    )
}

export default Showcase