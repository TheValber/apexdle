import './styles/App.css';
import "./fonts/Apex-Black.ttf";
import "./fonts/Apex-Medium.ttf";
import ClassicPage from './pages/ClassicPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Apexdle</h1>
      </header>
      <div className='App-body'>
        <ClassicPage />
      </div>
      <footer className="App-footer">
        <p>Apexdle - Made by Valber</p>
      </footer>
    </div>
  );
}

export default App;
