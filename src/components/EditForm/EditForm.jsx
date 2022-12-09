import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { db } from '../../firestore';
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

export const EditForm = () => {
    const [ sauce, setSauce ] = useState({})

    const [sauceNewName, setSauceNewName] = useState("")
    const [sauceNewPrice, setSauceNewPrice] = useState("")
    const [sauceNewImage, setSauceNewImage] = useState("")

    async function updateSauce() {
        await updateDoc(doc(db, "HotSauce", documentId), 
        {
            name: sauceNewName || sauce.name, 
            price: sauceNewPrice || sauce.price, 
            image_path: sauceNewImage || sauce.image_path,
        });
}
    

    const { documentId } = useParams()
    console.log(documentId)

   async function getSauceByDocumentId() {
        const docRef = doc(db, "HotSauce", documentId);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setSauce(docSnap.data())

        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    
    useEffect (() => {
        getSauceByDocumentId()
    }, [])

    if (!sauce) {
        return <h1>Loading...</h1>
    }


    
  return (
    <>
    <div className="pageBody">
        <Form>
            <h1 className='text-center'>Edit Form</h1>
            <div className="d-flex justify-content-center">
            <div className="d-flex flex-column" style={{ gap: "1rem"}}>

            {/* <div className="block">
                <label for="">Recipe Title</label>
                <input type="text" name=""
                value=>
            </div> */}

            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Hot Sauce Name</Form.Label>
                <Form.Control type="text" placeholder="Title" value={sauceNewName || sauce.name} onChange={(e) => setSauceNewName(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Hot Sauce Price</Form.Label>
                <Form.Control type="number" placeholder="Price" value={sauceNewPrice || sauce.price} onChange={(e) => setSauceNewPrice(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Sauce Image</Form.Label>
                <Form.Control type="text" placeholder="Image Url" value={sauceNewImage || sauce.image_path} onChange={(e) => setSauceNewImage(e.target.value)} />
            </Form.Group>
            <Button className="center" variant="primary" onClick={updateSauce}>Update</Button>
            </div>
            </div>
        </Form>
    </div>
    </>
  )
}

// export default EditForm;