import './AdminProduct.css';
import { Link } from 'react-router-dom';
import { format_price } from '../tools/Currency';
//import StateContext from "../../store";

const AdminProduct = ({item}) => {
    return(
            // <LinkContainer to={`/hotsauce/${item.id}`}>
                <div className="productContainer">
                            <div className="productImage">
                                <img className="productImage" src={item.image_path} alt="hot sauce"/>
                            </div>
                    <div className="productText">
                        <h3 className="productTitle">{item.name}</h3>
                        <h3 className="productPrice">{format_price(item.price)}</h3>
                    </div>
                    <Link className="center edit-link" to={`/edit/${item.id}`}>Edit</Link>
                </div>
            //</LinkContainer>
    )
}

export default AdminProduct;