import './App.css';
import Home from './Components/Home';
import ClassSearch from './Components/ClassSearch';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/DashBoard';
import DemoClass from './Components/DemoClass';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<ClassSearch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/demo/class" element={<DemoClass />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

