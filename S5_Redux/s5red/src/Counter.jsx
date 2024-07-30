import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, multiply, divide } from "./counterSlice.js";

function Counter() {
    const counter = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <p>Counter: {counter}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(multiply(2))}>Multiply by 2</button>
            <button onClick={() => dispatch(divide(2))}>Divide by 2</button>
        </div>
    );
}

export default Counter;