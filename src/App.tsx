import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Ebooks from './pages/Ebooks';
import EbookDetail from './pages/EbookDetail';
import Mentoring from './pages/Mentoring';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/nicole-etologa-web" element={<Home />} />
        <Route path="nicole-etologa-web/ebooks" element={<Ebooks />} />
        <Route path="nicole-etologa-web/asesorias" element={<Mentoring />} />
        <Route path="nicole-etologa-web/ebooks/:id" element={<EbookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;