import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Display from './components/Display';
import Callback from './components/Callback';
import { Router, Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const Root = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Route path="/" component={Display}/>
        <Route path="/callback" component={Callback} />
      </BrowserRouter>
    </div>
  )
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
