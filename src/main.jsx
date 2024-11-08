import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure this import points to App.jsx
//import './index.css'; // Optional: Import global styles
import './styles.css'; // Adjust the path if your CSS file is elsewhere

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
