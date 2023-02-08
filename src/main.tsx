import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';


// app styles
import './index.css';
import "./assets/plugins/bootstrap/css/bootstrap.min.css";
import "./assets/plugins/bootstrap/css/bootstrap-select.min.css"
import "./assets/plugins/icons/css/icons.css";
import "./assets/plugins/animate/animate.css";
import "./assets/plugins/bootstrap/css/bootsnav.css";
import "./assets/plugins/nice-select/css/nice-select.css";
// import "./assets/plugins/aos-master/aos.css";
import "./assets/plugins/slick-slider/slick.css";
import "./assets/css/style.css";
import "./assets/css/responsiveness.css";
import "./assets/css/skin/default.css";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
