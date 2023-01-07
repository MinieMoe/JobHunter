import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';   //used to route to different link/pages from root page
import { DashBoard, Landing, Register, Error } from './pages'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DashBoard/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/landing' element={<Landing/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
