import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';   //used to route to different link/pages from root page
import { DashBoard, Landing, Register, Error } from './pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/register' element={<div>Register</div>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='*' element={<div>Error</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
