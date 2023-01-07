import Landing from './pages/Landing'
//used to route to different link/pages
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={'/'}>DashBoard</Link>
      </nav>
      <Routes>
        <Route path='/' element={<div>DashBoard</div>}/>
        <Route path='/register' element={<div>Register</div>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='*' element={<div>Error</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;