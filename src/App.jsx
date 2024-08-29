import Footer from "./components/Footer/Footer"
import Home from "./components/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./components/About/About";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Home/>
    <Footer/>

    </BrowserRouter>
    
    </>
  )
}

export default App