import Home from './pages/Home';
import ComputerScience from './pages/ComputerScience';
import Biology from './pages/Biology';
import English from './pages/English';

import Header from './components/Header';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Philosophy from "./pages/Philosophy";

function App() {
  return (
   <div>
    <Router> 
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ComputerScience" element={<ComputerScience />} />
      <Route path="/Biology" element={<Biology />} />
        <Route path="/English" element={<English />} />
        <Route path="/Philosophy" element={<Philosophy />} />
      </Routes>
    
    </Router>
   
   </div>
  );
}

export default App;
