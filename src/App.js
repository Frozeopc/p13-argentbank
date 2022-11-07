import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import NotFound from './Pages/404';
import './app.css';

function App() {
  return (
    <div className='App'>
     <Routes>
        <Route path='/'         element={<Home />} />
        <Route path='/login'    element={<Login />} />
        <Route path='/profile'  element={<Profile />} />
        <Route path='*'         element={<NotFound />} />
     </Routes>
    </div>
  );
}

export default App;