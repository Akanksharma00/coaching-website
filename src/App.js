import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Navbar/Header";
import AuthenticationPage from "./Pages/AuthenticationPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/HomePage";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <AuthenticationPage /> */}
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
