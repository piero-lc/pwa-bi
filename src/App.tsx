import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Login from './pages/Login'
import Home from './pages/Home';
import Inventory from './pages/Inventory';
import Wastage from './pages/Wastage';
import Sales from './pages/Sales';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/sales" element={<Sales/>} />
        <Route path="/wastage" element={<Wastage />} />
      </Routes>
    </Router>
  );
}

export default App
