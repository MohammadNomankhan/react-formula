import { useState } from "react";

const Card = ({ card }) => {

    const [isFlipped, setIsFlipped] = useState(false);

    return <div className="w-[184px] h-[184px] p-4 bg-sky-200 flex justify-center items-center cursor-pointer hover:brightness-90 rounded-md" onClick={() => setIsFlipped(prevState => !prevState)}>
        {
            isFlipped ? <img src={`${card}?set=set5`} className="w-full"/> : <img src={`${card}`} className="w-1/4" />
        }
        
    </div>
}

export default Card;