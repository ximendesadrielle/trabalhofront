import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#556b2f', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Página Inicial Desafios da ODS</h1>
      <p>Com o foco em melhorar um dos pontos da ODS.</p>
      <img src="https://www.bioseta.com.br/wp-content/uploads/2023/06/ewe.png" alt="Descrição da imagem" />
      <p>O foco em específico é o ponto 3, Saúde de qualidade.</p>

      <Link to="/descricao" style={{ color: 'white' }}>Ir para Descrição do nosso objetivo</Link>
      <br />
      <Link to="/sobre" style={{ color: 'white' }}>Ir para Sobre Mim</Link>
    </div>
  );
}

export default HomePage;

