function ProductCard({product}) {
    return (
        <li className="product" id={product.id}>
          <img  loading='lazy' style={{pointerEvents: 'none'}}
            src={product.src}
            alt={product.title}
          />
          <div className="product__infos">
            <div className="name">{product.title}</div>
            <div className="price">$ {product.price}</div>
          </div>
          {/* <button id="remove">Remove</button> */}
        </li>
    )
}

export default ProductCard;