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
    
    return (
        <div className={styles.container}>
            <h1>Weather in picked location</h1>
            <p>Latitude {data.lat}</p>
            <p>Longitude {data.lng}</p>
            <p>Temperature {data.temperature}</p>
            <p>Wind speed {data.wind}</p>
            <button onClick={closeHandler}>Close and pick new location</button>
        </div>
    )
}
export default DataToDisplay