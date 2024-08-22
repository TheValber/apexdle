import './styles/App.css';
import "./fonts/Apex-Black.ttf";
import "./fonts/Apex-Medium.ttf";
import ClassicPage from './pages/ClassicPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1><Link to="/apexdle" style={{ textDecoration: 'none', color: 'inherit' }}>
              Apexdle
            </Link>
          </h1>
        </header>
        <div className='App-body'>
          <Routes>
            <Route path='/apexdle' element={<HomePage />} />
            <Route path='/apexdle/classic' element={<ClassicPage />} />
          </Routes>
        </div>
        <footer className="App-footer">
          <p className='footer-name'>Apexdle - Made by Valber</p>
          <p className='footer-affiliation'>We are not affiliated with Respawn Entertainment or Electronic Arts</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
