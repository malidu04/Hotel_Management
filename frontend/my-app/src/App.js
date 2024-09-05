import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import Login from './pages/Login';
//import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <div className="pages">
        <Routes>
        <Route path='login' element={<Login />} />
        
        </Routes>
      </div>
    </div>
  );
}

export default App;
