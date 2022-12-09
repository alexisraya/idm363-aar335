import './CartItem.css';
import LinkContainer from "react-router-bootstrap/LinkContainer";
import {Link} from "react-router-dom";
import { format_price } from '../tools/Currency';

const CartItem = ({item}) => {
    return(
                <div className="productContainer cartContainer">
                    <div className="productText cartTop">
                        <h3 className="productTitle">{item.name}</h3>
                        <h3 className="productPrice">{format_price(item.price)}</h3>
                    </div>
                    <span className="fs-3 cartAmount">Amount: {item.quantity}</span>
                </div>
    )
}

export default CartItem;