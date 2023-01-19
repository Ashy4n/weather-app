import { useSelector } from "react-redux"
import Map from "./Map/Map"
import Modal from "./UI/Modal";
import React from "react";
import DataToDisplay from "./DataToDiplay/DataToDisplay";
import Loader from "./UI/Loader"
import { useDispatch } from 'react-redux'
import { modalsActions } from '../store'

const Main = () => {
    const dataDisplay = useSelector(state=> state.modals.dataDisplay);
    const isLoading = useSelector(state=> state.modals.isLoading);
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(modalsActions.toggle())
        dispatch(modalsActions.toggleLoading())
    }
  
    const isLoadingJSX = (
    <>
    <Modal>
       <Loader/> 
    </Modal>
    </>
    )
    const dataReadyToDisplayJSX = (
        <>
        <Modal onClick={closeHandler}>
          <DataToDisplay/>
        </Modal>
        </>
    )
    const isDisplayingLoading = isLoading && !dataDisplay
    const isReadyToDisplay = isLoading && dataDisplay

    return (
    <>
    {isDisplayingLoading ? isLoadingJSX : (isReadyToDisplay && dataReadyToDisplayJSX) }
    <Map/>
    </>
    )
}

export default Main