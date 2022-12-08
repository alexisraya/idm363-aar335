import './Product.css';
import LinkContainer from "react-router-bootstrap/LinkContainer";

const Product = ({item, source, url}) => {
    return(
        <LinkContainer to={`/hotsauce/${url}`}>
            <div className="productContainer">
                        <div className="productImage">
                            <img className="productImage" src={item.image_path} alt="hot sauce"/>
                        </div>
                <div className="productText">
                    <h3 className="productTitle">{item.name}</h3>
                    <h3 className="productPrice">{item.price}</h3>
                </div>
            </div>
        </LinkContainer>
    )
}

export default Product;