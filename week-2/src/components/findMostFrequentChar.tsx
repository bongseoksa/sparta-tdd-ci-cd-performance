import { useEffect, useState } from "react";
import { findMostFrequentChar } from "../utils/findMostFrequentChar";

export default function FindMostFrequentChar() {
    const [value, setValue] = useState('');
    const [mostFrequentChar, setMostFrequentChar] = useState('');
    
    useEffect(()=>{
        setMostFrequentChar(findMostFrequentChar(value));
    }, [value])

    return <>
    <input data-testid="input" type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
    <div data-testid="most-frequent-char">{mostFrequentChar}</div>
     </>;
}