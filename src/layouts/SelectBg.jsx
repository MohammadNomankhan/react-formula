import clsx from "clsx";
import { useState } from "react";

const SelectBg = () => {
    const [bgColor, setBgColor] = useState("bg-rose-400");

    return <div className={`h-screen flex justify-center items-center ${bgColor}`}>
        <form className="flex gap-4 items-center">
            <label htmlFor="color">Choose a color: </label>
            <select id="color" onChange={(e) => setBgColor(e.target.value)} value={bgColor}>
                <option value="bg-rose-400">Rose</option>
                <option value="bg-purple-400">Purple</option>
                <option value="bg-green-400">Green</option>
                <option value="bg-blue-400">Blue</option>
                <option value="bg-yellow-400">Yellow</option>
            </select>
        </form>
    </div>
}

export default SelectBg;