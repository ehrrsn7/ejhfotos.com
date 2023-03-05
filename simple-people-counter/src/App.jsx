import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>Party of:</h2>
      <button onClick={() => setCount(count + 1)}>
        1
      </button>&emsp;
      <button onClick={() => setCount(count + 2)}>
        2
      </button>&emsp;
      <button onClick={() => setCount(count + 5)}>
        5
      </button>&emsp;
      <button onClick={() => setCount(count + 10)}>
        10
      </button>&emsp;
      <button onClick={() => setCount(count + 15)}>
        15
      </button>&emsp;
      <button onClick={() => setCount(count + 20)}>
        20
      </button>&emsp;
      <input value={count} type="number" style={{
        display: "flex",
        fontSize: "5em",
        width: "100%",
        textAlign: "center",
        verticalAlign: "center",
      }} />
      <br />
      <br />
      <button onClick={() => setCount(count - 1)}>
        -1
      </button>
      <button onClick={() => setCount(count - 10)}>
        -10
      </button>&emsp;


      <br/>
      <br/>
      <br/>
      <button onClick={() => {
        try {
          setCount(0)
          console.log(`sending ${count} to database`)
          // send to database
        }
        catch (err) {
          // toast error
        }

      }} style={{
        width: "40%"
      }} >
        Submit Total
      </button>
      <button onClick={() => {
        setCount(0)
      }} style={{
        width: "40%"
      }} >
        Clear
      </button>
    </div>
  )
}

export default App



const myArray = [
  1, 2, 3, 4, 5
]

for (let item in myArray) {
  console.log("item:", item)
}
