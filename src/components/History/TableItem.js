import styles from './TableItem.module.css'

const TableItem = (props) => {
 return(
    <div className={styles.container}>
        <p>City : {props.city}</p>
        <p>Lat: {props.lat}</p>
        <p>Lon: {props.lon}</p>
        <p>Weather: {props.description}</p>
        <p>temperature: {props.temperature}°C</p>
        <img src={props.img}></img>
    </div>
 )
}
export default TableItem