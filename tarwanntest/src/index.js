import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import {Router,Route,Link,browserHistory} from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component="{App}" />
  </Router>,document.getElementById('tarwannfansite')
);
registerServiceWorker();
