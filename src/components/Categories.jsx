import { categories } from '../constants/data';

function Categories() {
    return (
        <section className='categories'>
            <div className='categories__information'>
                <div>
                    <h3>Shop by Category</h3>
                    <h4>Brilliant design and unparalleled craftsmanship.</h4>
                </div>
            </div>
            <div className='categories__content'>
            {categories.map((category) => {
                return (
                    <div className='item' key={category.id}>
                        <img className='item-image' src={category.image} alt={category.title} />
                        <a className='hoverEffect item-link' href={category.link}>
                            {category.title}
                        </a>
                    </div>
                )
            })}
            </div>
        </section>
    )
}

export default Categories;