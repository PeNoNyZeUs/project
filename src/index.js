import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Itemsgrid from './components/itemsgrid';
import Pagination from './components/Pagination';
import Footer from './components/footer';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Itemsgrid/>
    <Pagination/>
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
