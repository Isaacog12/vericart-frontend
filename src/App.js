import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="VeriCart Logo" />
        <h1>Welcome to VeriCart</h1>
        <p>Your ultimate e-commerce shopping experience.</p>
        <a
          className="App-link"
          href="https://vericart.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Shopping
        </a>
      </header>
    </div>
  );
}

export default App;
