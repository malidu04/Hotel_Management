import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import Login from './pages/Login';
import Signup from './pages/Signup';
import AdminComapnyDashboard from './pages/AdminCompanyDashboard';
import ForgotPassword from './pages/ForgotPassword';

import AdminHome from './pages/home/index.jsx';
import AdminDashboard from './pages/admin-dashboard';
import AdminLogin from './pages/admin-login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="pages">
        <Routes>
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />

        <Route path='/admin/company' element={<AdminComapnyDashboard />} />

        <Route path='/adminhome' element={<AdminHome />} />
        <Route path='/admin' element={<AdminDashboard />} />
        <Route path='/adminlogin' element={<AdminLogin />} />

        </Routes>
      </div>
      </BrowserRouter>
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </div>
  );
}

export default App;
 