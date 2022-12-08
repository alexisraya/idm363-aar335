import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const HotSauce = () => {
    const state = useContext(StateContext);
    const { id } = useParams();
    const [product, setProductData] = useState(null);
    const [addText, setAddText] = useState("Add to Cart");

    useEffect(() => {
        setProductData(state.itemData.find((product) => product.url === id));
    }, [state]);

    if (!product) {
        return "not found";
    }
    return(
        <h1>Hot Sauce</h1>
    );
};

export default HotSauce;