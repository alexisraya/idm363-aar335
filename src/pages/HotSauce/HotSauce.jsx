import React from 'react'
import './HotSauce.css';
import { useParams } from 'react-router-dom'
import { db } from '../../firestore';
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import  {Card}  from 'react-bootstrap';
import { format_price } from '../../components/tools/Currency.jsx';


const HotSauce = (products) => {
    const { documentId } = useParams();
    const [hotsauce, setHotSauce] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHotSauce = async () => {
            try {
                const docRef = doc(db, "HotSauce", documentId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setHotSauce(docSnap.data());
                } else {
                    setError("No such document!");
                }
            } catch (error) {
                setError(error.message);
            }
            setLoading(false);
        };
        getHotSauce();
    }, [documentId]);

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
    return (
        <div className="pageBody">
            <div className="allsauce">
                {loading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                {hotsauce && (
                    <Card>
                        <Card.Img variant="top" className="sauceImage" src={hotsauce.image_path} />
                        <Card.Body>
                            <Card.Title className="sauceName">{hotsauce.name}</Card.Title>
                            <Card.Text className="saucePrice">
                                {format_price(hotsauce.price)}
                            </Card.Text>
                            {/* <Link to={`/`}>
                                <Button className="backButton" variant="primary">Go Back</Button>
                            </Link> */}
                            <Button className="center cart-button" onClick={() => handleAddToCart(hotsauce)} variant="primary">Add to Cart</Button>
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default HotSauce;