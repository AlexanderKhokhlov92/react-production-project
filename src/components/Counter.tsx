import { useState } from 'react'
import * as classes from './Counter.module.scss'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <>
      <h1>{count}</h1>
      <button className={classes.btn} onClick={increment}>
        Increment
      </button>
    </>
  )
}

export default Counter
