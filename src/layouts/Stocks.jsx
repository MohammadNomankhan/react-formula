import { useEffect, useState } from "react";
import StockCard from "../components/Stocks/StockCard";

const Shimmer = () => {
    return <div className="flex flex-col gap-4">
        {Array(20).fill('*').map((_, idx) => <div key={idx} className="h-[100px] bg-gray-300 rounded-lg"></div>)}
    </div>
}

const ErrorMessage = () => {
    return <div>Error, try refreshing.</div>
}

const Stocks = () => {

    const [stocks, setStocks] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchStocks = async () => {
        try {
            setError(false);
            const response = await fetch("https://api.react-formula.com/learning-api/demos/stocks-project/stocks");
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            setStocks(data);
        } catch (err) {
            console.log('I am here');
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchStocks();
    }, [])

    return <div className="flex justify-center py-12 px-4 min-h-screen bg-slate-100">
        <div className="w-full max-w-sm flex gap-4 flex-col">
            {error ? <ErrorMessage /> : isLoading ? <Shimmer /> : stocks.map(stock => <StockCard key={stock.symbol} stock={stock} />)}
        </div>
    </div>
}

export default Stocks;