import { DistanceMatrixService, GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import styles from './Map.module.css'
import useWheaterAPI from "../../hooks/useWheaterAPI";
import { useDispatch, useSelector } from 'react-redux';
import { modalsActions, dataActions, markerActions } from "../../store";
import useDB from "../../hooks/useDB";
import Loader from "../UI/Loader";


const Map = () => {
    const dispatch = useDispatch();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })
    const [marker, setMarker] = useState({ lat: 52.04, lng: 19.28 })

    const onMarkerSet = (event) => { 
        const newMarkerLocation = {
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        }
        setMarker(newMarkerLocation);
        ResponseHandler(newMarkerLocation);
    }

    const ResponseHandler = async (marker) => {
        dispatch(modalsActions.toggleLoading())
        const res = await useWheaterAPI(marker);
        const dbres = await useDB(marker);
        console.log(dbres);
        dispatch(modalsActions.toggle())
        dispatch(dataActions.saveData(res))
    }

    if (!isLoaded) {
        return <Loader/>
    }

    return (
        <GoogleMap zoom={6} center={marker} mapContainerClassName={styles.mapContainer} onClick={onMarkerSet}>
            <Marker position={marker} />
        </GoogleMap>
    )
}
export default Map