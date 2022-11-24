import { Route, Routes } from 'react-router-dom';
import PageHome from './components/PageHome';
import PageLogin from './components/PageLogin';
import PageNotFound from './components/PageNotFound';
import PageSignUp from './components/PageSignUp';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<PageHome />} /> 
          <Route path="/signup" element={<PageSignUp />} /> 
          <Route path="/login" element={<PageLogin />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
