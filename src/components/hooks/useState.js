
import React, { useEffect, useReducer, useState } from 'react'



const reducer = (state, action) => {
  if (action.type === "Incr") {
    state = state + 1
  }
  else if (state > 0 && action.type === "Decr") {
    state = state - 1
  }
  return state;
}

export const UseState = () => {
  const intialData = 10;
  const [myName, setMyName] = useState(0);
  const [state, dispatch] = useReducer(reducer, intialData)

  const incriment = () => {
    setMyName(myName + 1)
  }
  const dcriment = () => {
    setMyName(myName - 1)

    if (myName > 0) {
      setMyName(myName - 1)
    }
    else {
      setMyName(0)
    }
  }

  useEffect(() => {
    document.title = `Chats(${myName})`
  }, [myName])

  return (
    <div>
      {state}
      <br />
      <button onClick={() => dispatch({ type: "Decr" })}>Decr</button>
      <button onClick={() => dispatch({ type: "Incr" })}>Incr</button>
    </div>
  )
}
