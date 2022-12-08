import './AdminProduct.css';
//import StateContext from "../../store";

const AdminProduct = ({item}) => {
    // const state = useContext(StateContext);
    // const {
    //     name,
    //     price,
    //     keyName,
    // } = item;

    // const [show, setShow] = useState(false);
    // const [title, setTitle] = useState(name);
    // const [itemPrice, setPrice] = useState(price);
    // const handleClose = () => setShow(false);
    // const saveInfo = () => {
    //     let updatedItem = { ...item };
    //     updatedItem.name = title;
    //     updatedItem.price = itemPrice;
    //     state.sendChanges(updatedItem);
    //     handleClose();
    // };
    //return(
        // <div className="adminproductContainer">
        //     {/* <div className="productImage">
                
        //     </div> */}
        //     <div className="adminproductText">
        //         <h3 className="adminproductTitle">Name: {item.name}</h3>
        //         <h3 className="adminproductPrice">Price: {item.price}</h3>
        //     </div>
        //     <Button
        //     type="button"
        //     variant="danger"
        //     className="btn text-white background-red"
        //     onClick={handleShow}
        //   >
        //     Edit
        //   </Button>
        // </div>
    //);
}

export default AdminProduct;