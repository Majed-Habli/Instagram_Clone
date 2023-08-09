import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/siginin/signin';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Signin />} />
          {/* <Route path="/Home" element={<Home />} /> */}
        </Routes>
    </Router>
  );
}

export default App;
