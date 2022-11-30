import './Product.css';

const Product = ({item}) => {
    return(
        <div className="productContainer">
            <div className="productImage">
                
            </div>
            <div className="productText">
                <h3 className="productTitle">{item.name}</h3>
                <h3 className="productPrice">{item.price}</h3>
            </div>
        </div>
    )
}

export default Product;