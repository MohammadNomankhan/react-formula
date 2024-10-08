import clsx from "clsx";

const StockCard = ({ stock }) => {
    const percentChange = (((stock.current_price - stock.previous_price) / stock.previous_price) * 100).toFixed(2);

    return (
        <div className="p-4 flex justify-between border border-slate-300 shadow-md">
            <div>
                <p className="text-sm text-slate-600">{stock.name}</p>
                <p className="text-2xl text-blue-500 font-medium">{stock.symbol}</p>
            </div>
            <div className="flex flex-col items-end">
                <p className={clsx("rounded-full text-center text-sm px-2 py-1", percentChange < 0 ? "bg-red-200 text-red-600" : "bg-green-200 text-green-600")}>
                    {percentChange}%
                </p>
                <p className="text-xl text-slate-700">${(stock.current_price / 100).toFixed(2)}</p>
            </div>
        </div>
    );
};

export default StockCard;
