import { useState } from "react";

const ALL_CHIPS = [ "Apple", "Paris", "Lion", "Nike", "Banana", "Tokyo", "Elephant", "Adidas", "Mango", "New York", "Penguin", "Coca-Cola", "Giraffe", "Dubai", "BMW", "Lemon", "Kangaroo", "Tesla", "Microsoft", "Grapes", "Sydney", "Amazon", "Peacock", "Puma", "Google", "Strawberry", "London", "Tiger", "Samsung", "Dell", "Orange", "Rome", "Fox", "Sony", "Bear", "Cherry", "San Francisco", "Pepsi", "Whale", "Zebra", "HP", "Guava", "Nairobi", "Huawei", "Chevrolet", "Panther", "Facebook", "Plum", "Toronto", "Jaguar", "Tata", "Dolphin", "Kuala Lumpur", "LG", "Lenovo", "Peach", "Berlin", "Rabbit", "Mercedes", "Honda", "Wolf", "Bangalore", "Intel", "Apple Inc.", "Pineapple", "Mumbai", "Hyena", "Acer", "Shark", "Hyderabad", "Toyota", "Asus", "Deer", "Chennai", "HTC", "Oppo", "Snake", "Kolkata", "Lamborghini", "Xiaomi", "Cheetah", "Singapore", "Ford", "Walrus", "Shenzhen", "Vivo", "Jaguar (car)", "Carrot", "Melbourne", "Goat", "Bugatti", "Rabbit", "Dell", "Eagle", "Panda", "Lisbon", "Penguin", "Moscow", "Koala", "Raspberry", "Venice", "Pigeon", "Dove", "Suzuki" ];
  
const WordFilter = () => {
    
    const [chips, setChips] = useState(ALL_CHIPS);
    const [search, setSearch] = useState("");
    function handleSearchSubmit(e){
        e.preventDefault();
        const updatedChips = [...ALL_CHIPS].filter(chip => chip.toLowerCase().includes(search));
        setChips(updatedChips);
    }
    
    return <div className="flex justify-center py-12 px-4">
        <div className="w-full max-w-2xl">
            <form onSubmit={handleSearchSubmit} className="flex justify-center">
            <input type="text" placeholder="enter a string" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-gray-200 rounded-l-lg w-56 p-2"/>
            <button className="bg-green-400 hover:brightness-110 rounded-r-lg p-2">search</button>
            </form>
            <div className="flex flex-wrap gap-2 justify-center mt-8">
                {/* changing chips on search change */}
                {/* {ALL_CHIPS.filter(item => item.toLowerCase().includes(search)).map(chip => <p className="bg-yellow-300 border border-yellow-600 rounded-md px-1">{chip}</p>)} */}

                {chips.map(chip => <p className="bg-yellow-300 border border-yellow-600 rounded-md px-1">{chip}</p>)}
            </div>
        </div>
    </div>
}

export default WordFilter;