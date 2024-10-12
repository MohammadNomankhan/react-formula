const TodoShimmer = () => {
    return <div className="w-full max-w-sm p-4 bg-white flex flex-col gap-3 rounded-md shadow-lg">
        {Array.from({length: 4}, (_, idx) => idx+1).map((item, idx) => <div key={idx} className="bg-gray-300 animate-pulse h-16 w-full rounded-md"></div>)}
        <div className="bg-gray-300 animate-pulse h-14 w-32 self-center rounded-md"></div>
    </div>

} 

export default TodoShimmer;