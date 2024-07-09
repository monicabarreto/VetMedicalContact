import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeInicial from './Components/HomeInicial/HomeInicial';
import HomeLogado from './Components/HomeLogado/HomeLogado';
import CardProf from './Components/HomeLogado/CardProf';

function App() {

 

  return (

 
    <HomeInicial/>,  
    <HomeLogado/>,
    

    
    <Router>
      <Routes>
        <Route path="/" element={<HomeInicial />} />        
        <Route path="/HomeLogado" element={<HomeLogado />} />
        <Route path="/HomeLogado" element={<CardProf />} />     
      </Routes>
      
    </Router>
   
    
  )
}

export default App;
