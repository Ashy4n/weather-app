import styles from './DataToDisplay.module.css'
import { modalsActions } from '../../store'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

const DataToDisplay = () => {
    const data = useSelector(state => state.dataToDisplay.displayData)
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(modalsActions.toggle())
        dispatch(modalsActions.toggleLoading())
    }
    const temperature = Math.round((data.temperature-272.15) * 100)/100

    return (
        <div className={styles.container}>
            <h1>Weather in picked location</h1>
            <div><p>City :</p><p>{data.city}</p></div>
            <div><p>Latitude :</p><p>{data.lat}°</p> </div>
            <div><p>Longitude :</p><p>{data.lng}°</p></div>
            <div><p>Temperature :</p><p>{temperature}°C</p></div>
            <div><p>Wind speed :</p><p>{data.wind}m/s</p> </div>
            <div><p>Response time :</p><p>{data.responseTime}ms</p></div>
            <button onClick={closeHandler}>Close and pick new location</button>
        </div>
    )
}
export default DataToDisplay