import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import sfondo from "./foto/sfondo.avif";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <img src={sfondo} alt="sfondo" className="sfondo" />
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promozioni" element={<Home />} />
          <Route path="/fumetti" element={<Home />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
