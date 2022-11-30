import React from 'react';
import ReactDOM from 'react-dom';

import { useState, useEffect } from 'react';
import { getDoc, setDoc, doc } from 'firebase/firestore';
import { db } from '../../firestore';
import PropTypes from 'prop-types';

import './Form.css';


function Form({id, name, price}){
    const [inventory, set_inventory] = useState({
        id: 0,
        name: '',
        price: 0
    })
    
    useEffect(() => {
        set_inventory({
            ...inventory,
            id,
            name,
            price
        })
    }, [])

    function handleInputChange(e) {
        set_inventory({
            ...inventory,
            [e.target.name]: e.target.value
        })
    }

    async function updateFirestore(id, name, price){
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        const docData = docSnap.data()

        setDoc(docRef, {
            ...docData,
            name: inventory.name,
            price: inventory.price
        })

    }

    return(
        <div className='form'>
            <form>
                <div className='name'>
                    <input 
                        name='name'
                        onChange={e => handleInputChange(e)}
                        placeholder='Product Name'
                        type='text'
                        value={inventory.name}
                    />
                </div>
                <div className='price'>
                    <input 
                        name='price'
                        onChange={e => handleInputChange(e)}
                        placeholder='9.99'
                        type='number'
                        value={inventory.price}
                    />
                </div>
            </form>
            <button onClick={e => updateFirestore(inventory.id, inventory.name, inventory.price)}>Update Firestore</button>
        </div>
    )
}

Form.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number
}

export default Form;