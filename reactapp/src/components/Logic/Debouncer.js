import {useEffect, useState} from "react";

export function Debounce(searchVal) {
    const [val, setVal] = useState(searchVal)
    // console.log(searchVal, val);
    useEffect(() => {
        const time = setTimeout(() => {
            setVal(searchVal)
        }, 700)
        return (() => {
            clearTimeout(time)
        })
    }, [searchVal])
    return val
}