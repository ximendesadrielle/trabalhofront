import React from 'react';
import { Link } from 'react-router-dom';

function Descricao() {
  return (
    <div style={{ textAlign: 'center', backgroundColor: '#8b0000', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <h1>Descrição da ODS - Saúde de Qualidade</h1>
      <img src="https://plataformabioksan.com/wp-content/uploads/2020/06/ods_desafiosods-04-1024x369.png" alt="Imagem da ODS - Saúde de Qualidade" style={{ maxWidth: '100%' }} />
      <p>
        A ODS 3 - Saúde de Qualidade tem como objetivo assegurar uma vida saudável e promover o bem-estar para todas as pessoas, em todas as idades. Isso inclui garantir o acesso universal aos serviços de saúde, a promoção de comportamentos saudáveis e a prevenção de doenças.
      </p>
      <h2>Importância da Doação de Sangue para Melhorar a Qualidade da Saúde</h2>
      <p>
        A doação de sangue desempenha um papel crucial na melhoria da qualidade da saúde em todo o mundo. O sangue é um recurso essencial para tratamento de pacientes com condições médicas graves, como pacientes com câncer, vítimas de acidentes graves, e pacientes que necessitam de cirurgias complexas.
      </p>
      <img src="https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/07/doacao-de-sangue.jpg" alt="Imagem sobre doação de sangue" style={{ maxWidth: '100%' }} />
      <p>
        Quando mais pessoas doam sangue regularmente, mais vidas podem ser salvas. Além disso, a doação de sangue também ajuda a manter os estoques de sangue necessários para emergências e situações de desastre.
      </p>
      <p>
        Portanto, melhorar a conscientização sobre a importância da doação de sangue e incentivar mais pessoas a doar sangue pode contribuir significativamente para alcançar a meta da ODS 3 de promover a saúde de qualidade para todos.
      </p>
      <Link to="/" style={{ color: 'white' }}>Voltar para Página Inicial</Link>
      <br />
      <Link to="/sobre" style={{ color: 'white' }}>Ir para Sobre Mim</Link>
    </div>
  );
}

export default Descricao;
