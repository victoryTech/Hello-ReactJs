import logo from './logo.svg';
import './App.css';
import React, { Fragment } from 'react';

function App() {
  const name = 'Vicky';
  // conditional rendering
  // const loading = false;
  // if(loading){
  //   return <h1>Loading!</h1>
  // }

  const isLoggedIn = true;

  return (
    // react Fragment wraaped all the component into coz we can return only one comp div, h1 or anything
    // <React.Fragment>
    //   <h1>
    //     Hey there...
    //   </h1>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           {/* inside { } we can write javascript code */}
          Hello {isLoggedIn ? name : 'World!'}
        </p>
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
    // </React.Fragment>
  );
}

export default App;
