import { Route, Routes } from 'react-router-dom';
import Category from './components/category/Category';
import PageBlog from './components/PageBlog';
import PageHome from './components/pageHome/PageHome';
import PageLogin from './components/PageLogin';
import PageNotFound from './components/PageNotFound';
import PageReport from './components/PageReport';
import PageSignUp from './components/PageSignUp';
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
          {/* PrivateRoute */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
