import { useSelector } from "react-redux"
import Map from "./Map/Map"
import Modal from "./UI/Modal";
import React from "react";
import DataToDisplay from "./DataToDiplay/DataToDisplay";
import Loader from "./UI/Loader"

const Main = () => {
    const dataDisplay = useSelector(state=> state.modals.dataDisplay);
    const isLoading = useSelector(state=> state.modals.isLoading);

    const isLoadingJSX = (
    <>
    <Modal>
       <Loader/> 
    </Modal>
    </>
    )
    const dataReadyToDisplayJSX = (
        <>
        <Modal>
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