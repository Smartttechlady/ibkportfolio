import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import Navbar from "./Component/Navbar"
import Footer from "./Component/Footer"








const Home = React.lazy(() => import("./Pages/Home"))
const About = React.lazy(() => import("./Pages/About"))
const Experience = React.lazy(() => import("./Pages/Experience"))
const Projects = React.lazy(() => import("./Pages/Projects"))
const Contact = React.lazy(() => import("./Pages/Contact"))

     
    
  




function App() {
  return (

    <React.Suspense fallback={<div> <img style={{ position: "absolute", top: "50%", left: "50%" }} src={("./..//Images/ibklogo1.svg")} alt="" /></div>}>

      <BrowserRouter>
         <Navbar/> 
       

        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact/>} />
          
         
        </Routes>


        <Footer/>

      </BrowserRouter>

      
    </React.Suspense>

  )
}

export default App