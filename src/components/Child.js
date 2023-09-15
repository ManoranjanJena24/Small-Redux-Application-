import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByValue } from '../features/showSlice'

export default function Child() {

    const dispatch = useDispatch();

    const data = useSelector((c) => {
        console.log(c.showwww.value)
        return c.showwww.value
    });

    return (
        <div>
            <h2>Child - {data}</h2>
            <button onClick={() => dispatch(increment())}>click me</button>
            <button onClick={() => dispatch(incrementByValue(10))}>click me incrementByValue 10</button>
        </div>
    )
}
