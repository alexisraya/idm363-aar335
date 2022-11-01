import './Home.css';
import Product from '../../components/Product/Product.jsx'

const Home = () =>{
    return (
        <div className="pageBody">
            <div className = "productsContainer">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
        </div>
    )
}

export default Home;