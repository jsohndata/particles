import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fireworks from './pages/Fireworks';
import Shadow from './pages/Shadow';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/particles/shadow" element={<Shadow />} />
        <Route path="/particles/fireworks" element={<Fireworks />} />
        <Route path="/particles" element={<Fireworks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
