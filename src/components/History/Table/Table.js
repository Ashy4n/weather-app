import { useEffect, useState } from "react"
import Loader from "../../UI/Loader";
import TableItem from "./TableItem";
import styles from './Table.module.css'
import { useDispatch, useSelector } from "react-redux";
import { historyActions } from "../../../store";

const Table = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const pageNum = useSelector(state => state.history.pageNum)
    
  useEffect(() => {
      const fetchdata = async (pageNum) => {
        const res = await fetch(`http://159.89.29.102:8000/weathers/history?limit=10&page=${pageNum}`);
        const responseData = await res.json();
        const loadedData = []
        dispatch(historyActions.setAllQueries(responseData.total))
        for (const data of responseData.records) {
              loadedData.push({
                id:data.id,
                city:data.city,
                lat:data.lat,
                lon:data.lon,
                description:data.weather.description,
                temperature: data.weather.temperature_value + data.weather.temperature_unit,
                imgUrl: data.weather.image_url,
                wind: data.weather.wind.speed.value + data.weather.wind.speed.unit
              })
          }
        setData(loadedData);
        setIsLoading(false);
      }
      fetchdata(pageNum);
  }, [pageNum])

  if (isLoading) return (<Loader />)
  
  const itemsList = data.map((item => {
      return (
      <TableItem 
        key={item.id} 
        city={item.city} 
        lat={item.lat} 
        lon={item.lon}
        description={item.description} 
        temperature={item.temperature} 
        wind={item.wind}
        img={item.imgUrl}
          
        />
        )
  }))
  
  const tableToDisplay = (
    <table className={ styles.container}>
      <thead>
        <tr className={styles.headerContainer}>
          <th>City</th>
          <th>latitude</th>
          <th>longitude</th>
          <th>Weather</th>
          <th>temperature</th>
          <th>Wind</th>
          <th>Icon</th>
        </tr>
      </thead>
      <tbody className={ styles.bodyContainer}>
          {itemsList}
      </tbody>  
    </table>
  )

  return (tableToDisplay)
}
export default Table