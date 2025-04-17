import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Ebooks from './pages/Ebooks';
import EbookDetail from './pages/EbookDetail';
import Mentoring from './pages/Mentoring';
import Workshops from './pages/Workshop';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<Home />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/asesorias" element={<Mentoring />} />
        <Route path="/ebooks/:id" element={<EbookDetail />} />
        <Route path="/talleres" element={<Workshops />} />
        
      </Routes>
    </Router>
  );
}

export default App;