import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./Components/NavBar"
import Home from "./Pages/Home"
import SkinTest from "./Pages/SkinTest"

function App() {

  return (
    // En este componente utilizaremos React Router Dom

    <Router>
      <Navbar></Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skintest" element={<SkinTest />} />
      </Routes>
    </Router>
  )
}

export default App
