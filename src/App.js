import './App.css'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Layout/Nav';
import Main from './components/Main';
import History from './components/History';


function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/history/' element={<History/>} />
      </Routes>
    </>
  );
}

export default App;
