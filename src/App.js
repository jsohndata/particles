import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import Fireworks from './pages/Fireworks';
import ClickParticles from './pages/ClickParticles';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/click-particles" element={<ClickParticles />} />
        <Route path="/particles" element={<Fireworks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
