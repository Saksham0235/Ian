import React, { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import HomePage from './components/Home/HomePage'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './components/Contact/ContactUs'
import Plans from './components/Plans/Plans'
import { Alert, Flex, Spin } from 'antd';
const contentStyle = {
  padding: 50,
  background: 'rgba(0, 0, 0, 0.05)',
  borderRadius: 4,
};



function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer);
  }, [])

  



  const content = <div style={contentStyle} />;

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20%' }}>
        <Spin tip="Loading" size="large" />
      </div>
    )
  }

  return (
    <>
      {/* <Spin tip="Loading" size="large">
        {content}
      </Spin> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactUs />} />
      </Routes>
      <Plans />
      {/* <Footer /> */}
    </>
  )
}

export default App
