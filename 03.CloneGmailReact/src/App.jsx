import Home from './componentes/pages/Home';
import SearchPage from './componentes/pages/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/search' element={<SearchPage />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;