import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/NavBar"
import Home from "./Pages/Home"
import SkinTest from "./Pages/SkinTest"
import Contact from "./Pages/Contact"
import Products from "./Pages/Products"
import WhatsappBut from './Components/WhatsappBut';
import Footer from './Components/Footer'
function App() {

  return (
    // En este componente utilizaremos React Router Dom

    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skintest" element={<SkinTest />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/productos" element={<Products />} />
      </Routes>
      <WhatsappBut />
      <Footer></Footer>
    </Router>
  );
}

export default App
