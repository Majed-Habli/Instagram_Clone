import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/siginin/signin';
import Signup from './pages/signup/signup';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={ <Signin/>} />
          <Route path="/signup" element={ <Signup/> } />
        </Routes>
    </Router>
  );
}

export default App;
