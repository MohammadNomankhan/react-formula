import { Heart } from "lucide-react";
import { useState } from "react";


const kittens = Array.from({length: 25}, (_, idx) => `${idx}*`);
const PAGE_SIZE = 9;

const pages = Math.ceil(kittens.length/PAGE_SIZE);
const buttons = [];
for (let index = 1; index <= pages; index++) {
    buttons.push(index);
}
console.log(buttons)

const Pagination = () => {
    const [paginate, setPaginate] = useState(0);
    const handlePagination = (page) => {
        if (page == '1') {
            setPaginate(0);
        } else if(page == '2') {
            setPaginate(1);
        } else if(page == '3') {
            setPaginate(2);
        } else {
            setPaginate(0);
        }
    }
    
    console.log(kittens.slice(9 * paginate, 9 * (1 + paginate)));
    return <div className="flex flex-col items-center bg-[#d8eefe] min-h-screen p-12">
        <div className="w-full max-w-3xl flex flex-wrap gap-8 justify-center items-center">
            {kittens.slice(PAGE_SIZE * paginate, PAGE_SIZE * (1 + paginate)).map((ele, idx) => (<div key={idx} className="w-56 p-8 bg-[#fffffe] rounded-lg relative"><img src={`https://robohash.org/${ele+idx}?set=set4`} className="w-full"/><div className="text-[#094067] px-3 py-1 absolute top-2 right-0 flex items-center gap-1"><Heart color="#ef4565" size={15} />{Math.floor(Math.random() * 20) + 1 }</div></div>))}
        </div>
        <div className="flex justify-center gap-4 mt-4">
            {buttons.map((button,idx) => <button key={idx} className="bg-[#094067] text-[#fffffe] p-2" onClick={() => handlePagination(button)}>{button}</button>)}
        </div>
    </div>
} 

export default Pagination;