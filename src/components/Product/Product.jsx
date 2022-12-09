import './Product.css';
import LinkContainer from "react-router-bootstrap/LinkContainer";
import {Link} from "react-router-dom";
import { format_price } from '../tools/Currency';
import { Button } from 'react-bootstrap';

const Product = ({item}) => {
    const handleAddToCart = (product) => {
        addItemToCart(product)
      
      }
      const addItemToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || {}
        cart.cartItems = cart.cartItems || []
        const itemInCart = cart.cartItems.find((cartItem) => cartItem.id === product.id)
        if (itemInCart) {
          itemInCart.quantity += 1
        } else {
          
          cart.cartItems.push({ id:product.id, name:product.name, price : product.price, image:product.image_path, quantity: 1 })
        }
        cart["totalValue"] = cart.cartItems.reduce((acc, product) => acc + product.price * product.quantity, 0)
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log("updatedCart", cart, format_price(cart.totalValue))
      }
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
                    <Button className="center" onClick={() => handleAddToCart(item)} variant="primary">Add to Cart</Button>
                </div>
            //</LinkContainer>
    )
}

export default Product;