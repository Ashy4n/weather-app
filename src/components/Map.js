import { DistanceMatrixService, GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";
import styles from './map.module.css'
import useWheaterAPI from "../hooks/useWheaterAPI";
import { useDispatch } from 'react-redux';
import { modalsActions, dataActions } from "../store";

const Map = () => {
    const dispatch = useDispatch();
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
    })
    const [marker, setMarker] = useState({ lat: 52.04, lng: 19.28 })

    const OnMarkerSet = async (event) => {

        setMarker({
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
        })
        const res = await useWheaterAPI(marker);
        dispatch(modalsActions.toggle())
        dispatch(dataActions.saveData(res))
    }

    if (!isLoaded) {
        return <div>Loading ...</div>
    }

    return (
        <GoogleMap zoom={6} center={marker} mapContainerClassName={styles.mapContainer} onClick={OnMarkerSet}>
            <Marker position={marker} />
        </GoogleMap>
    )
}
export default Map