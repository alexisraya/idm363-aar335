import './AdminProduct.css';

const AdminProduct = ({item}) => {
    return(
        <div className="adminproductContainer">
            {/* <div className="productImage">
                
            </div> */}
            <div className="adminproductText">
                <h3 className="adminproductTitle">Name: {item.name}</h3>
                <h3 className="adminproductPrice">Price: {item.price}</h3>
            </div>
        </div>
    )
}

export default AdminProduct;