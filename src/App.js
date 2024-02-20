import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import Home from "./components/Home";
import sfondo from "./foto/sfondo.avif";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Fumetti from "./components/Fumetti";
import Promozioni from "./components/Promozioni";

function App() {
  return (
    <>
      <img src={sfondo} alt="sfondo" className="sfondo" />
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/promozioni" element={<Promozioni />} />
          <Route path="/fumetti" element={<Fumetti />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
