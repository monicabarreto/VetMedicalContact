import React from 'react'
import './HomeLogado.css'
import Cardprof from './CardProf'


const HomeLogado = () => {

  return (
    <div>
   
    <div>
      <nav>
        <h1>Page2</h1>        
        <ul>          
          <li> <a href="">Meus Exames</a></li>
          <li onChange="{HomeInicial}">Minhas Consultas</li>
          <li>Home</li>            
        </ul>             
      </nav> 
      <div className='Search'>
          <select class="custom-select">
            <label htmlFor="">Selecione a especialidade: </label>
          <option value="0">Selecione</option>
            <option value="1">Clínico Geral</option>
            <option value="2">Cardiologista</option>
            <option value="3">Oncologista</option>
            
          </select>        
          <button>Buscar</button>
          </div>  
         
          <div className= "especialidade">
          <Cardprof/>  
          </div>
   

    </div>
    
    </div>
  )
}

export default HomeLogado