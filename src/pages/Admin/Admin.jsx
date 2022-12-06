import { collection, onSnapshot, query, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../firestore';
import './Admin.css';
import AdminProduct from '../../components/AdminProduct/AdminProduct.jsx';

const Admin = () =>{
    const [products, setProducts] = useState([])
        useEffect(() => {
            const getProducts = () => {
                const productsList = []
                getDocs(collection(db, "HotSauce")).then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        //productsList.push({...doc.data(),id:doc.id})
                        //console.log(doc.id, " => ", doc.data());
                        const productData = {
                            keyName: doc.id,
                            ...doc.data(),
                        }
                        productsList.push(productData);
                    })
                    setProducts(productsList)
                }).catch((error) => {
                    console.log(error.message)
                })
            }
            getProducts()
        }, []
    )
    //testing asynch function
    useEffect(() => {
        console.log(products);
    }, [products])

    return (
        <div className="pageBody">
            <div className="productsContainer">
                {products.map((product) => {
                    console.log(product)
                    return <AdminProduct key={product.id} item={product} />
                })}
            </div>
        </div>
    )
}

export default Admin;