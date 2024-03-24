import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Descricao from './Descricao';
import SobreMim from './SobreMim';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/descricao" element={<Descricao />} />
        <Route path="/sobre" element={<SobreMim />} />
      </Routes>
    </Router>
  );
}

export default App;
