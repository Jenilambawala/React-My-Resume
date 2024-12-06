import './App.css';
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { Home } from './Components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AOS from "aos";
import React, {useEffect} from "react";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
