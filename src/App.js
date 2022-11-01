import { Routes,Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
function App() {
  return (
    <div className="App">
      <Header />
      { /* <Routes>
          <Route path="/" element={<Home />} />
      </Routes> */ }
      <Home />
      <Footer />
    </div>
  );
}

export default App;
