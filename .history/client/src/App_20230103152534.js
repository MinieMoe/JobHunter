import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'; //used to route to different link/pages


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/'>DashBoard</Link>
        <Link to='/'>DashBoard</Link>
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
