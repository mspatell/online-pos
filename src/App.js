// src/App.js

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import POS from './pages/POS';
import OrderQueue from './pages/OrderQueue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pos" element={<POS/>}/>
        <Route path="/order-queue" element={<OrderQueue/>}/>
      </Routes>
    </Router>
  );
}

export default App;
