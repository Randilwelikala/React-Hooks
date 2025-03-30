import logo from './logo.svg';
import './App.css';

function App() {

  var x = 0;

  const counter = () =>{
    // console.log('button Click');
    x=x+1;
    console.log(`new value of x- ${x}`);
  }; 
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {x}
        </p>
        <button onClick = {counter}>Click Me</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
