import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Ebooks from './pages/Ebooks';
import EbookDetail from './pages/EbookDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="nicole-etologa-web/" element={<Home />} />
        <Route path="nicole-etologa-web/ebooks" element={<Ebooks />} />
        <Route path="nicole-etologa-web/ebooks/:id" element={<EbookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;