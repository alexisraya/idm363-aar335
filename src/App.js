import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Product from "./components/Product/Product.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <Product />
      </header>
      <Footer />
    </div>
  );
}

export default App;
