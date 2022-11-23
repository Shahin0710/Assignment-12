import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PageLogin from './components/PageLogin';
import PageNotFound from './components/PageNotFound';
import PageSignUp from './components/PageSignUp';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/signup" element={<PageSignUp />} /> 
          <Route path="/login" element={<PageLogin />} /> 
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
  );
}

export default App;
