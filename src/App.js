import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Navbar/Header";
import AuthenticationPage from "./Pages/AuthenticationPage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/HomePage";
import Footer from "./Components/Footer/Footer";
import Mathematics from "./Pages/Mathematics/Mathematics";
import GuptaClass from "./Pages/GuptaClass/GuptaClass";
import Yoga from "./Pages/Yoga/Yoga";
import Events from "./Pages/Events/Events";
import Blogs from "./Pages/Blogs/Blogs";

function App() {
  return (
    <div className="App">
      {/* <AuthenticationPage /> */}
        <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/mathematics" element={<Mathematics />} />
        <Route path="/21DaysGuptaClasses" element={<GuptaClass />} />
        <Route path="/Yoga" element={<Yoga />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<ContactUs />} />
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
