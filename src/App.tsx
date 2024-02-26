import Header from "./components/Header";
import "./index.css";
import SwiperComponent from "./components/Swiper";
import Footer from "./components/Footer";
import End from "./components/End";
import Burger from "./components/Burger";
import { useState } from "react";



function App() {
  const [burg, setBurg] = useState(false)
  console.log(burg)
  return (
    <>
      {burg ? (
        <Burger onClick={() => setBurg(false)} />
      ) : (
        <>
          <Header onClick={() => setBurg(true)} />
          <SwiperComponent />
          <div className="w-full flex items-center">
            <img src="../public/4.png" className=" w-96 ml-auto mr-auto" />
          </div>
          <Footer />
          <End />
        </>
      )}
    </>
  );
}

export default App;
