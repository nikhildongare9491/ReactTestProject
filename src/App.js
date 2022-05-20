import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import React from "react";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Pnf from './components/Pnf'

function App() {
  return (
    <BrowserRouter>
      <Menu/>
      <ToastContainer />
      <Routes>
        <Route path={`/`} element={<Home/>}/>
        <Route path={`/contact`} element={<Contact/>}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
