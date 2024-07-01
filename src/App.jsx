import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './components/Contact/ContactUs'



function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactUs/>} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
