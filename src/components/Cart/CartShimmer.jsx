const CartShimmer = () => {
    return (
        <div className='w-full max-w-md flex flex-col gap-4'>
            {Array.from({ length: 10 }).map((_, idx) => (
                <div key={idx} className="bg-white shadow-lg rounded-lg p-4 animate-pulse">
                    <div className="flex items-center space-x-4">
                        {/* Shimmer for Image */}
                        <div className="w-24 h-24 bg-gray-300 rounded-lg"></div>

                        {/* Shimmer for Text */}
                        <div className="flex flex-col flex-grow">
                            <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                            </div>
                            <div className="flex justify-between items-center mt-2">
                                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                                <div className="h-6 bg-gray-300 rounded w-1/4"></div>
                            </div>
                        </div>
                    </div>
                    {/* Shimmer for Delete Button */}
                    <div className="flex justify-end gap-2 items-center mt-4">
                        <div className="h-8 bg-gray-300 rounded w-20"></div>
                        <div className="h-8 bg-gray-300 rounded w-20"></div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CartShimmer;
