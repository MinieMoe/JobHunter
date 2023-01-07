import Landing from './pages/Landing'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Dash</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
