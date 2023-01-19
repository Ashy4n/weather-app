import styles from './TableItem.module.css'

const TableItem = (props) => {
    const lat = props.lat + "°"
    const lon = props.lon + "°" 
    
    return (
        <tr className={styles.rowContainer}>
            <td>{props.city}</td>
            <td>{lat}</td>
            <td>{lon}</td>
            <td>{props.description}</td>
            <td>{props.temperature}</td>
            <td>{props.wind}</td>
            <td className={styles.imgTd}><img alt="weather pic" src={props.img}></img></td>
        </tr>
    )
}
export default TableItem