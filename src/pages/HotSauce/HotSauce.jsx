import React from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firestore';
import { doc, getDoc } from "firebase/firestore";
import { useState } from 'react';
import { useEffect } from 'react';


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
        <div className='pageBody'>
        <h1 className="text-center pageTitle">{hotsauce.name}</h1>
        <div className="allsauce">
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {console.log(hotsauce.name)}
            {hotsauce && (
                <div className="productContainer--individual">
                    <div className="productImageContainer">
                        <img className="productImage" src={hotsauce.image_path} alt={hotsauce.name}/>
                    </div>
                </div>
            )}
        </div>
        
        </div>
    )
}

export default HotSauce;