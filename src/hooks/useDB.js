const useDB = async(latLng) => {
    const start = new Date();
    const res = await fetch(`http://159.89.29.102:8000/weathers/search-by-coordinates?lat=${latLng.lat}&lon=${latLng.lng}`)
    const resData = await res.json();
    const end = new Date();
    const responseTime = end - start;

    return {
      resData,
      responseTime
    };
  }

export default useDB;