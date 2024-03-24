import React from 'react';
import { Link } from 'react-router-dom';

function SobreMim() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#1e2952', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Sobre Mim</h1>
      <p>Olá! Meu nome é Adrielle Ximendes dos Santos e sou estudante de Sistemas para Internet.</p>
      <p>Você pode me encontrar no LinkedIn:</p>
      <a href="https://www.linkedin.com/in/adrielleximendes/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>
        <img src="https://cdn-icons-png.flaticon.com/256/174/174857.png" alt="LinkedIn" style={{ verticalAlign: 'middle', width: '1em', height: '1em', marginRight: '5px' }} /> Meu Perfil do LinkedIn
      </a>
      <br />
      <br />
      <Link to="/" style={{ color: 'white' }}>Voltar para Página Inicial</Link>
      <br />
      <Link to="/descricao" style={{ color: 'white' }}>Ir para Descrição</Link>
    </div>
  );
}

export default SobreMim;
