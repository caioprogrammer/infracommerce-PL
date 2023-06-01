function ProductCard({product}) {
    return (
        <li className="product">
          <img 
            src={product.src}
            alt={product.title}
          />
          {/* <button id={product.id} >
            <span style={{pointerEvents: 'none'}}>
                COMPRAR
            </span> 
          </button> */}
        </li>
    )
}

export default ProductCard;