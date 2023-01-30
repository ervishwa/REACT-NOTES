import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Newton} from '../src/newton';
import {Panel} from "./component/panel/panel"

// there are two library in focus React , ReactDOM.

// dom chije leka aoo jnha react load karna ha.
const element  = document.querySelector("#root");

// make connection that element to react .(via library called react dom.)

const root = ReactDOM.createRoot(element);

//jo jo add karna ha root ma.
root.render(<App/>);

//what kind component we should pass inside render method?
// basically hamesha app he pass karta hn.jo humko changes karna hota ha hum app.js ma jka dal deta hn.
//App sbsa bda component ha.sb chij eska ander ata ha.(sbka parents ha ya).

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App/>
    
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
