import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Header></Header>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
