import { useState } from 'react';
import './HomeInicial.css';
import { useNavigate } from 'react-router-dom';



function HomeInicial() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

 


  const logOk = (e) => {
    e.preventDefault();
    if (email && senha) {
    
      navigate('/HomeLogado');
      // Aqui você pode adicionar a lógica de verificação adicional, como regex para email, etc.
    } else {
      console.log("Por favor, preencha todos os campos");
    }
  };

  return (
    <div >

      <div>  
     
   
        <nav className='navBar'> 
        <h1>Pagina1</h1>        
          <ul>        
            <li>About us</li>
            <li>Contact</li>
            <li>Home</li>
          </ul>
          
        </nav>
        

        <div className='form'>
          
          <h2>Login:</h2>
          <form  onSubmit={logOk} >
            <input 
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <button type='submit' className='btn'>Entrar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomeInicial;
