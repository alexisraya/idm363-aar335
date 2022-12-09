import './Cart.css';
import CartItem from '../../components/CartItem/CartItem.jsx';
import { format_price } from '../../components/tools/Currency';

const Cart = () =>{
    const getCart = () => {
        const cart = localStorage.getItem('cart')
        const defaultCart = {cartItems: [], totalValue: 0}
        return cart ? JSON.parse(cart) : defaultCart
    
      }
    const cart = getCart()
    const cartItems = cart.cartItems
    const totalValue = cart.totalValue
    return (
        <div className="pageBody">
            {/* <h1>Cart</h1>
            <div className="cart-container">
                <div className="cart-items">
                    <div className="cart-item">
                        <h3>Name</h3>
                        <h3>Price</h3>
                    </div>
                </div>
                <h2>Total</h2>
            </div> */}
            {/* <h1 className="text-center pageTitle">Cart Items</h1> */}
            <div>
                {cartItems.length === 0 && <h4>Cart is empty</h4>}
            </div>
            <div>
                {cartItems.map((product) => {
                    return <CartItem key={product.id} item={product} />                
                })}
            </div>
            <div className='mt-5 mb-5'>
                <h4 className='text-center'>Total Value: {format_price(totalValue)}</h4>
            </div>
        </div>
        
    )
}

export default Cart;