import useRandom from "./Random";
import './App.css'

function App() {
    const {number, min, max, reset} = useRandom()
     return <div className="button-group">
        <h1>{JSON.stringify(number)}</h1>
        <button onClick={min}>Min</button>
        <button onClick={max}>Max</button>
        <button onClick={reset}>Reset</button>
     </div>
}

export default App;