import { Route, Routes } from 'react-router-dom';
import Category from './components/category/Category';
import PageAddProduct from './components/dashboard/PageAddProduct';
import PageAdminDashboard from './components/dashboard/PageAdminDashboard';
import PageMyOrder from './components/dashboard/PageMyOrder';
import PageMyProduct from './components/dashboard/PageMyProduct';
import PageBlog from './components/PageBlog';
import PageHome from './components/pageHome/PageHome';
import PageLogin from './components/PageLogin';
import PageNotFound from './components/PageNotFound';
import PageReport from './components/PageReport';
import PageSignUp from './components/PageSignUp';
import Payment from './components/payment/Payment';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<PageHome />} /> 
          <Route path="/signup" element={<PageSignUp />} /> 
          <Route path="/login" element={<PageLogin />} /> 
          <Route path="/blog" element={<PageBlog />} /> 
          <Route path="/report" element={<PageReport />} /> 
          {/* PrivateRoute */}
            <Route path="/category/:id" element={<PrivateRoute><Category /></PrivateRoute>} /> 
            <Route path="/admin_dashboard" element={<PrivateRoute><PageAdminDashboard /></PrivateRoute>} /> 
            <Route path="/my_product" element={<PrivateRoute><PageMyProduct /></PrivateRoute>} /> 
            <Route path="/add_product" element={<PrivateRoute><PageAddProduct /></PrivateRoute>} /> 
            <Route path="/my_order" element={<PrivateRoute><PageMyOrder /></PrivateRoute>} /> 
            <Route path="/payment/:id" element={<PrivateRoute><Payment /></PrivateRoute>} /> 
          {/* PrivateRoute */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
