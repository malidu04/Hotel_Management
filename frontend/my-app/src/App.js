import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// pages & components
import Login from './pages/Login.js';
import Signup from './pages/Signup.js';
import Profile from './pages/Profile.js';
import Navbar from './components/Navbar.js';
import AddCompany from './pages/AddCompany/index.jsx';
import AdminCompanyDashboard from './pages/AdminCompanyDashboard/index.jsx';
import ForgotPassword from './pages/ForgotPassword/index.jsx';
import Footer from './components/Footer.js';

//Appointments
import AddAppointment from './pages/AddAppointment/index.jsx';
import AppointmentList from './pages/AppointmentList/index.jsx';
import AppointmentListReport from './pages/AppointmentListReport/index.jsx';
import Services from './pages/Services/index.jsx';

//Notices
import AdminDailyNotices from './pages/AdminDailyNotices/index.jsx';
import AdminFAQ from './pages/AdminFAQ/index.jsx';
import AdminJobNotices from './pages/AdminJobNotices/index.jsx';
import AdminNotices from './pages/AdminNotices/index.jsx';
import AdminTestimonials from './pages/AdminTestimonials/index.jsx';
import DailyNotices from './pages/DailyNotices/index.jsx';
import FAQ from './pages/FAQ/index.jsx';
import JobNotices from './pages/JobNotices/index.jsx';
import Notices from './pages/Notices/index.jsx';
import TestimonialAddForm from './pages/TestimonialAddForm/index.jsx';
import Testimonials from './pages/Testimonials/index.jsx';

//Stocks
import StockList from './pages/StockList.js';
import UpdateStock from './pages/UpdateComponent.js';
import StockForm from './pages/StockForm.js';
import GrnForm from './pages/GrnForm.js';
import GrnList from './pages/GrnList.js';
import UpdateGrn from './pages/UpdateGrn.js';
import StockDownload from './pages/StockDownload.js';

//Admin
import AdminHome from './pages/home/index.jsx';
import AdminDashboard from './pages/admin-dashboard/index.jsx';
import StaffDashboard from './pages/staff-dashboard/index.jsx';
import AdminLogin from './pages/admin-login/index.jsx';
import StaffLogin from './pages/staff-login/index.jsx';

//Supplier
import SupplierHome from './pages/SupplierHome.js';
import RequestSupplierForm from './pages/RequestSupplierForm.js';
import SupplierLogin from "./pages/Supplier/Login.js"

//Expense Tracker
import ExpenseTracker from './pages/ExpenseTracker.js';
import SupplierNewHome from './pages/Supplier/SupplierNewHome.js';
import RequestForm from './pages/Supplier/RequestForm.js';
import CompanyForm from './pages/Supplier/CompanyForm.js';
import SupplierSignup from './pages/Supplier/SupplierSignup.js';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Services />} />

            {/* User Routes */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Profile' element={<Profile />} />
            <Route path='/forgotpassword' element={<ForgotPassword />} />

            {/* Company Routes */}
            <Route path='/registercompany' element={<AddCompany />} />
            <Route path='/admin/company' element={<AdminCompanyDashboard />} />

            {/* Appointments Routes */}
            <Route path='/services' element={<Services />} />
            <Route path='/appointments' element={<AppointmentList />} />
            <Route path='/booknow' element={<AddAppointment />} />
            <Route
              path='/appointmentreport'
              element={<AppointmentListReport />}
            />
            {/* Notices Routes */}
            <Route path='/notices' element={<Notices />} />
            <Route path='/adminnotices' element={<AdminNotices />} />
            <Route path='/dailynotices' element={<DailyNotices />} />
            <Route path='/admindailynotices' element={<AdminDailyNotices />} />
            <Route path='/jobs' element={<JobNotices />} />
            <Route path='/adminjobs' element={<AdminJobNotices />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/addtestimonial' element={<TestimonialAddForm />} />
            <Route path='/admintestimonials' element={<AdminTestimonials />} />
            <Route path='/faq' element={<FAQ />} />
            <Route path='/adminfaq' element={<AdminFAQ />} />

            {/* Stock Routes */}
            <Route path='/StockList' element={<StockList />} />
            <Route path='/GrnList' element={<GrnList />} />
            <Route path='/Update/:id' element={<UpdateStock />} />
            <Route path='/UpdateGrn/:id' element={<UpdateGrn />} />
            <Route path='/StockForm' element={<StockForm />} />
            <Route path='/GrnForm' element={<GrnForm />} />
            <Route path='/StockDownload' element={<StockDownload />} />

            {/* Admin Routes */}
            <Route path='/adminhome' element={<AdminHome />} />
            <Route path='/admin' element={<AdminDashboard />} />
            <Route path='/adminlogin' element={<AdminLogin />} />

            {/* Staff Routes */}
            <Route path='/staff' element={<StaffDashboard />} />
            <Route path='/stafflogin' element={<StaffLogin />} />

            {/* Supplier Routes */}
            <Route path='/suppliers' element={<SupplierHome />} />
            <Route path='/requestsuppliers' element={<RequestSupplierForm />} />
            <Route path='/supplierLogin' element={<SupplierLogin />} />
            <Route path='/supplierSignup' element={<SupplierSignup />} />
            <Route path='/supplier/home' element={<SupplierNewHome />} />
            <Route path='/supplier/companyForm' element={<CompanyForm />} />
            <Route path='/supplier/requestForm' element={<RequestForm />} />

            {/* Expense tracker Routes */}
            <Route path='/finance' element={<ExpenseTracker />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      <ToastContainer
        position='top-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;
