import { useEffect, useRef, useState } from "react"
import Loader from "../UI/Loader";
import TableItem from "./TableItem";
import styles from './Table.module.css'
import { useDispatch, useSelector } from "react-redux";
import { historyActions } from "../../store";

const Table = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const pageNum = useSelector(state => state.history.pageNum)
  const allQueries = useSelector(state => state.history.allQueries)
  const maxPage = Math.ceil(allQueries / 10);
  const pageRef = useRef()
  
  useEffect(() => {
      const fetchdata = async (pageNum) => {
        const res = await fetch(`http://159.89.29.102:8000/weathers/history?limit=10&page=${pageNum}`);
        const responseData = await res.json();
        const loadedData = []
        dispatch(historyActions.setAllQueries(responseData.total))
        // setRecordsNum();
          for (const data of responseData.records) {
              loadedData.push({
                id:data.id,
                city:data.city,
                lat:data.lat,
                lon:data.lon,
                description:data.weather.description,
                temperature: data.weather.temperature_value,
                imgUrl: data.weather.image_url,
              })
          }
        setData(loadedData);
        setIsLoading(false);
      }
      fetchdata(pageNum);
  }, [pageNum])

  const pageUp = (event) => { 
    event.preventDefault();
    if (pageRef.current.value >= maxPage) { 
    pageRef.current.value = maxPage;
    return
    } 
    pageRef.current.value = parseInt(pageRef.current.value) + 1
    dispatch(historyActions.setPageNum(pageRef.current.value))
  }

  const pageDown = (event) => {
    event.preventDefault();
    if (pageRef.current.value <= 1) {
      pageRef.current.value = 1;
      return;
    }
    pageRef.current.value = parseInt(pageRef.current.value) - 1
    dispatch(historyActions.setPageNum(pageRef.current.value))
  }

  if (isLoading) return (
    <div className={styles.container}>
      <div className={styles.tableContainer }>
        <Loader/> 
      </div>
      <form className={styles.formContainer}>
        <button  disabled={true}><i className="fa-solid fa-arrow-left"></i></button>
        <input disabled={true}  type="number" ref={pageRef} min={1} max={999}></input>
        <button  disabled={true}><i className="fa-solid fa-arrow-right"></i></button>
      </form>
    </div>
  )
    pageRef.current.value = pageNum
    const itemsList = data.map((item => {
      return (
      <TableItem 
        key={item.id} 
        city={item.city} 
        lat={item.lat} 
        lon={item.lon}
        description={item.description} 
        temperature={item.temperature} 
        img={item.imgUrl}
        />
        )
    }))

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer }>
        {itemsList}
      </div>
      <form className={styles.formContainer}>
        <button onClick={pageDown}><i className="fa-solid fa-arrow-left"></i></button>
        <input type="number" ref={pageRef} min={1} max={maxPage}></input>
        <button onClick={pageUp}><i className="fa-solid fa-arrow-right"></i></button>
      </form>
    </div>

 )
}
export default Table