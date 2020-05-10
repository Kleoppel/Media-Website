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
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import React from 'react';
// import ReactDOM from 'react-dom';
// import Upload from './components/Upload';
// import Display from './components/Display';
// import Callback from './components/Callback';
// import registerServiceWorker from './registerServiceWorker';
// import { Router, Route, browserHistory } from 'react-router';
// import { requireAuth } from './utils/AuthService';

// const Root = () => {
//   return (
//     <div className="container">
//       <Router history={browserHistory}>
//         <Route path="/" component={Display}/>
//         <Route path="/upload" component={Upload} onEnter={requireAuth} />
//         <Route path="/callback" component={Callback} />
//       </Router>
//     </div>
//   )
// }

// ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
