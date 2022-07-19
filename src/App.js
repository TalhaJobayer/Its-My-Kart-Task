
import { Routes,Route } from 'react-router-dom';
import MainPage from './Componenet/MainPage/MainPage'
import './App.css';
import Navbar from './Componenet/Navbar/Navbar';
import Dashboard from './Componenet/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='Dashbord' element={<Dashboard></Dashboard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
