import { useEffect, useState } from "react"
import Loader from "../UI/Loader";
import TableItem from "./TableItem";

const Table = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
      const fetchdata = async (pageNum) => {
          const res = await fetch(`http://localhost:8000/weathers/history?limit=10&page=${pageNum}`);
          const responseData = await res.json();
          const loadedData = []
          for (const data of responseData.records) {
            console.log(data)
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
      }

      fetchdata()
      setIsLoading(false);
  
  }, [])

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

return(
   <>
    {isLoading ? <Loader/> : itemsList}
   </>
 )
}
export default Table