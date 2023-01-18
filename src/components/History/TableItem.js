import styles from './TableItem.module.css'

const TableItem = (props) => {
    return (
     <div className={styles.container}>
        <table >
            <tbody>
                <tr>
                    <th>City</th>
                    <th>latitude</th>
                    <th>longitude</th>
                    <th>Weather</th>
                    <th>temperature</th>
                </tr>
                <tr>
                    <td>{props.city}</td>
                    <td>{props.lat}</td>
                    <td>{props.lon}</td>
                    <td>{props.description}</td>
                    <td>{props.temperature}°C</td>
                </tr>
            </tbody>
        </table>
        <img src={props.img}></img>
     </div>
 )
}
export default TableItem