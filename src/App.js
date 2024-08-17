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
      <body className='App-body'>
        <ClassicPage />
      </body>
      <footer className="App-footer">
        <p>Apexdle - Made by Valber</p>
      </footer>
    </div>
  );
}

export default App;
