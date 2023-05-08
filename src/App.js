import Home from './pages/Home';
import ComputerScience from './pages/ComputerScience';
import Biology from './pages/Biology';

import Header from './components/Header';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

function App() {
  return (
   <div>
    <Router> 
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ComputerScience" element={<ComputerScience />} />
      <Route path="/Biology" element={<Biology />} />
      </Routes>
    
    </Router>
   
   </div>
  );
}

export default App;
