import { useState } from "react"

function useRandom() {
    const [number, setNumber] = useState(() => {
        return Array.from({length: 4}, () => Math.trunc(Math.random() * (100 - 1) + 1)) 
    })

    const min = () => {
        setNumber(Math.min(...number))
    }
    const max = () => {
        setNumber(Math.max(...number))
    }
    const reset = () => {
        setNumber(number.length = [])
    }
  
   
  

    return {number, min, max, reset}
}

export default useRandom;