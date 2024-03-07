import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import RecipeSingle from './pages/RecipeSingle';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/RecipeSingle' element={<RecipeSingle/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
