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
                        </Card.Body>
                    </Card>
                )}
            </div>
        </div>
    )
}

export default HotSauce;