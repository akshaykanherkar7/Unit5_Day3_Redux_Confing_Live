import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decCounter, incCounter } from '../Store/Counter/Counter.action';

const Counter = () => {
    const dispatch = useDispatch();
    const {counter} = useSelector((state)=> state)
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={()=> dispatch(incCounter())}>Increment</button>
        <button onClick={()=> dispatch(decCounter())}>Decrement</button>
    </div>
  )
}

export default Counter