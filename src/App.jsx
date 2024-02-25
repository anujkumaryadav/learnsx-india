import './App.css'
import {BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/core/Home'
import Learn from './components/core/Learn'
import Contact from './components/core/Contactus'
import Aboutus from './components/core/Aboutus'

function App() {
  
  return (
    <>
      <div>
      

      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/learn" exact element={<Learn/>} />
          <Route path="/contact" exact element={<Contact/>} />
          <Route path="/about" element={<Aboutus/>} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
