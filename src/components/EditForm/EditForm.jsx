import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { db } from '../../firestore';
import { doc, getDoc, collection, updateDoc } from "firebase/firestore";
import { async } from '@firebase/util';
import { useState } from 'react';
import { useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';



export const FormEdit = () => {
    const [ sauce, setSauce ] = useState({})

    const [sauceNewName, setSauceNewName] = useState("")
    const [sauceNewPrice, setSauceNewPrice] = useState("")
    const [sauceNewImage, setSauceNewImage] = useState("")

    
    


    const updateSauce = async () => {
        await updateDoc(doc(db, "hotsauce", documentId), 
        {
            name: sauceNewName || sauce.name, 
            price: sauceNewPrice || sauce.price, 
            image_path: sauceNewImage || sauce.image_path,
        })

        // redirect to edit page 
        // const history = useHistory()
        // return history.push("/edit")
        
}
    

    const { documentId } = useParams()
    console.log(documentId)

   async function getSauceByDocumentId() {
        const docRef = doc(db, "hotsauce", documentId);
        const docSnap = await getDoc(docRef);
    
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setSauce(docSnap.data())

        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    
    // const handleOnChange = () => {
    //     // setHeadphoneNewName(headphone.name)
    //     // setHeadphoneNewPrice(headphone.price)
    //     // setHeadphoneNewImage(headphone.headphoneimage)
    //     console.log("handleOnChange")
    // }
    useEffect (() => {
        getSauceByDocumentId()
    }, [])
    // getHeadphonesByDocumentId() ;


    // const docRef = doc(db, "headphones", "documentId");
    // const docSnap =  getDoc(docRef);

    // if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    // } else {
    // // doc.data() will be undefined in this case
    // console.log("No such document!");
    // }

    if (!sauce) {
        return <h1>Loading...</h1>
    }


    
  return (
    <>
    <Form>
        <h1 className='text-center'>FormEdit</h1>
        <div className="d-flex justify-content-center">
        <div className="d-flex flex-column" style={{ gap: "1rem"}}>

        {/* <div className="block">
            <label for="">Recipe Title</label>
            <input type="text" name=""
            value=>
        </div> */}

        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Hot Sauce Name</Form.Label>
            <Form.Control type="text" placeholder="Title" value={sauceNewName || sauce.name}  onChange={(e) => setSauceNewName(e.target.value)} />
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
    </>
  )
}