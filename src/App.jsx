import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Suspense, useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { About, Contact, Home, Projects } from "./pages";
import Footer from "./components/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';

 const App = () => {
  return (
    <main className='bg-slate-300/20'>

      <Router>
      <SpeedInsights />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          
        
        </Routes>
        <Footer />
      </Router>
    </main>
    
  )
}

export default App


