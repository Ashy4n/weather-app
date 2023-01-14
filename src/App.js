import DataToDisplay from './components/DataToDisplay';
import Map from './components/Map'
import Modal from './components/UI/Modal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { modalsActions } from './store';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Layout/Nav';

function App() {
  const dispatch = useDispatch();
  const isDataDiplay = useSelector(state => state.modals.dataDisplay)

  const closeHandler = () => {
    dispatch(modalsActions.toggle())
  }

  const mapContent = <>
    {isDataDiplay ?
      <Modal onClick={closeHandler}>
        <DataToDisplay />
      </Modal> : <></>}
    <Map />
  </>

  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={mapContent} />
        <Route path='/history' element={<>HISTORY</>} />
      </Routes>
    </>
  );
}

export default App;
