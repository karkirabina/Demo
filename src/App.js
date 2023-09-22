import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Productpage from "./Pages/Productpage/Productpage";
import Navbar from "./Component/Navbar";
import About from "./Component/About";
// import Footer from "./Component/Footer";
//  import Productlist from "./Component/Productlist";
import '../src/Css/App.css';
import Footer from './Component/Footer'
// import ContactForm from "./Component/Contactform";

function App() {
  return (
    <Router>
     {/* <Header /> */}
      <Navbar />
      {/* <ContactForm/> */}
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route exact path='/about' element={<About />} />
        <Route path="/product" exact element={<Productpage />} />
      </Routes>
    <Footer/>
     
       
    </Router>
  );
}

export default App;

