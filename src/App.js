import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import ViewAll from './components/ViewAll';
import ViewMyPost from './components/ViewMyPost';
import Login from './components/Login';
import Reg from './components/Reg';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='add' element={<AddPost/>}/>
        <Route path='view' element={<ViewAll/>}/>
        <Route path='viewmypost' element ={<ViewMyPost/>}/>
        <Route path='' element={<Login/>}/>
        <Route path='reg' element={<Reg/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
