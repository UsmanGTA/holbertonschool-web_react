import logo from './logo.jpg';
import { getFooterCopy, getFullYear } from './utils'
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <div className="App-header">
        <img src={logo} alt=""/>
        <h1>School dashboard</h1>
      </div>

      {/* Body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>

      {/* footer */}
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>

    </div>
  );
}

export default App;
