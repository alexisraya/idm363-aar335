import './Product.css';

const Product = (item) => {
    return(
        <div className="productContainer">
            <div className="productImage">
                
            </div>
            <div className="productText">
                <h3 clasName="productTitle">{item.product.name}</h3>
                <h3 clasName="productPrice">{item.product.price}</h3>
            </div>
        </div>
    )
}

export default Product;