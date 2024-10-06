import { LoaderPinwheel } from "lucide-react";
import { useState } from "react";

const Bounce = () => {
    
    const [isBounce, setIsBounce] = useState(false);
    const handleChange = (e) =>  {
        setIsBounce(e.target.checked)
    };

    return <div className="flex justify-center items-center h-screen flex flex-col">
        <div>
            <LoaderPinwheel size={40} className={isBounce && "animate-bounce"}/>
        </div>
        <form className={"flex gap-2 mt-2"}>
            <input id="bounce" type="checkbox" onChange={handleChange} className="accent-orange-400"/>
            <label htmlFor="bounce">Bounce</label>
        </form>
    </div>
}

export default Bounce;