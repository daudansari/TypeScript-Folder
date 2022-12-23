import {useState, useEffect} from 'react';
import { Message } from "../../components/shared/Message";

const Counter = ()=> {
    const [inputVal, setInputVal] = useState<string>('')
    const [count, setCount] = useState<number>(0)

    const handleClick = ()=> {
        setCount(count+1)
    }
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>)=> {
        setInputVal(event.target.value)
    }
    useEffect(()=> {
        setCount(+inputVal)
    }, [inputVal])
    return (
        <div>
            <Message data={count}/>
            <input type="number" value={inputVal} onChange={changeHandler}/>
            <div>
                <button onClick={handleClick}>Counter</button>
            </div>
        </div>
    )
}
export default Counter;