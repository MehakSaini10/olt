import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import store from './store.js';
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <ToastContainer/>
    <App />
    </Provider>
  </BrowserRouter>
  </React.StrictMode>
)
