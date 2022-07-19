
import { Routes,Route } from 'react-router-dom';
import MainPage from './Componenet/MainPage/MainPage'
import './App.css';
import Navbar from './Componenet/Navbar/Navbar';
import Dashboard from './Componenet/Dashboard/Dashboard';
import ManageUser from './Componenet/Dashboard/ManageUser/ManageUser'; 
import ManageProducts from './Componenet/Dashboard/ManageProducts/ManageProducts'; 

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<MainPage></MainPage>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}>
             <Route index path='ManageUser' element={<ManageUser></ManageUser>}></Route>
              <Route path='ManageProducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>
        


      </Routes>

    </div>
  );
}

export default App;
