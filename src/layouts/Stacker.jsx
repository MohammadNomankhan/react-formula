import { useState } from "react";

const Stacker = () => {

    const [blocks, setBlocks] = useState(2);

    const handleBlockChange = (action) => {
        if (action == "REMOVE") {
            setBlocks(prevState => prevState == 2 ? 2 : prevState - 1)
        } else {
            setBlocks(prevState => prevState == 12 ? 12 : prevState + 1)
        }
    }

    return <div className="h-screen flex gap-4 flex-col justify-end items-center pb-8">
        <div className="border-b-4 border-slate-900 p-2 flex flex-col gap-2 items-center">
            {
                Array(blocks).fill('*').map((block, index) =>  <div key={index} className="bg-green-300 p-1 w-28 text-center">{block}</div>)
            }
      
        </div>
        <div className="flex gap-8">
            <button className="bg-red-600 text-red-100 text-md py-2 px-3 w-40" onClick={() => handleBlockChange("REMOVE")}>Remove block</button>
            <button className="bg-green-600 text-green-100 text-md py-2 px-3 w-40" onClick={() => handleBlockChange("ADD")}>Add block</button>
        </div>
    </div>
}

export default Stacker;