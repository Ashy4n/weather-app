import { useEffect, useState } from "react"
import Loader from "../UI/Loader";
import styles from './Stats.module.css'
import { useSelector } from "react-redux";

const Stats = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const allQueries = useSelector(state => state.history.allQueries)
    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch(`http://159.89.29.102:8000/weathers/statistics`);
            const responseData = await res.json();
            setData(responseData) 
            setIsLoading(false)
        }
        fetchdata();
    }, [])

    if(isLoading) return (<div className={styles.container}><Loader/></div>)
    

    return(
        <div className={styles.container}>
            <div className={styles.table}>
                <h3>Temperature</h3>
                <table>
                    <tbody>
                    <tr>
                        <th>MAX</th>
                        <th>MIN</th>
                        <th>AVG</th>
                    </tr>
                    <tr>
                        <td>{data.temperature.max}</td>
                        <td>{data.temperature.min}</td>
                        <td>{Math.round((data.temperature.avg + Number.EPSILON) * 100) / 100}</td>
                    </tr>
                    </tbody>
                
                </table>
            </div>
            <div className={styles.table}>
            <h3>Queries</h3>
                <table>
                    <tbody>
                        <tr>
                            <th>Most Queried</th>
                            <th>All queries</th>
                        </tr>
                        <tr>
                            <td>{ data.top_queried}</td>
                            <td>{ allQueries}</td>
                        </tr>
                    </tbody>
                </table>
            </div>            
        </div>
    )
}
export default Stats