import { useState, useEffect } from 'react';


function useFetchData({ url }) {
  const [data, setData] = useState(null);
  const [isloading, setIsloading] = useState(false);


  useEffect(() => {
    setIsloading(true)
    const fetchData = async () => {
      const response = await fetch(url)
      const data = await response.json()
      setData(data)
      setIsloading(false)
    }
    fetchData()
  }, [url]);

  return [data, isloading];
}

export default useFetchData;
