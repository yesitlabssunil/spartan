// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import './assets/css/global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-right" containerStyle={{ zIndex: 999999 }} />
  </Provider>
)
