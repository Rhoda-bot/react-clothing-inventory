import './App.css';
import { Routes, Route, } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

const HatPage = () => {
  return (
    <h3>Hats Page</h3>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route  path='/hats' element={<HatPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
