// import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';
import PortfolioApp from './components/PortfolioApp';
import * as serviceWorker from './serviceWorker';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<PortfolioApp />, document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
