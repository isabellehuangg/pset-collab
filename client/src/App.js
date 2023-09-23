import './App.css';
import Home from './Components/Home';
import ClassSearch from './Components/ClassSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<ClassSearch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

