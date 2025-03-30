import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [setx,xhandler] = useState(0);

  var x = 0;

  const counter = () =>{
    // console.log('button Click');
    x=x+1;
    xhandler(setx +1);
    console.log(`new value of x = ${x}`);
  }; 
  const reduser = () =>{
    xhandler(setx-1);
  };




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Value of X = {x}
        </p>

        <p>
          Value of Count = {setx};
        </p>

        <button onClick = {counter}>Click Me +</button>
        <button onClick={reduser}> Click Me -</button>
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
