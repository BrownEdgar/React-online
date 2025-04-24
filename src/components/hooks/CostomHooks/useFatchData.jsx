import React, { useEffect, useState } from 'react';

function useFetchData({url}) {
    const [data, setData] = useState();
    const [isloading, setIsloading]= useState();

    useEffect(() => {
        setIsloading(true)
        const fetcData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setData(data)
            setIsloading(false)
        }
        fetcData()
    }, [url])

  return [data, isloading];
}

export default useFetchData;
