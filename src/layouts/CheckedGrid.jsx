import clsx from "clsx";
import { useState } from "react";

const CheckedGrid = () => {
    const [squaresArray, setSquaresArray] = useState(Array.from({ length: 100 }, (_, curIndex) => ({index: curIndex + 1, isOn: false})));
    const handleClick = (btnInx) => {
        setSquaresArray(prevState => prevState.map(item => item.index == btnInx ? {...item, isOn: !item.isOn} : item))
    }
    return <div className="h-screen flex justify-center items-center">
        <div className="border-2 border-slate-900 flex flex-wrap w-[604px] h-[604px]">
            {squaresArray.map(ele => <button onClick={() => handleClick(ele.index)} key={ele.index} className={clsx('text-black w-[60px] h-[60px] hover:brightness-95', ele.index % 10 != 0 ? 'border-r border-slate-900' : '', ele.index < 91 ? "border-b border-slate-900" : "", ele.isOn ? "bg-slate-400" : "bg-slate-100")}>{ele.index}</button>)}
        </div>
    </div>
}

export default CheckedGrid;