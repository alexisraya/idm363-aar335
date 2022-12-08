import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import HotSauce from "./pages/HotSauce/HotSauce.jsx";

function App() {
  return (
    <div className="App">
      <Header />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/hotsauce/:id" element={<HotSauce />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </div>
  );
}

export default App;
