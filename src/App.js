import './App.css';
import {Signin, Signup} from './components/index.js';

import {BrowserRouter, Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Signin />} />
      <Route path='/Signup' element={<Signup />} />
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
