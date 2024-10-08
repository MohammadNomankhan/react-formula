const StateCard = ({ state }) => {
    return <div className="basis-full">
        <div className="flex gap-4 mb-8">
            <div className="h-40 basis-1/3">
                <img src={state.image} className="rounded-md w-full h-full border border-neutral-400" />
            </div>
            <div>
                <h3 className="text-3xl mb-4">{state.name}</h3>
                <div>
                    <p className="flex items-center"><span className="font-medium w-24">Nickname</span><span>{state.nickname}</span></p>
                    <p className="flex items-center"><span className="font-medium w-24">Capital</span><span>{state.capital}</span></p>
                    <p className="flex items-center"><span className="font-medium w-24">Population</span><span>{(state.population).toLocaleString()}</span></p>
                </div>
            </div>
        </div>
        <p className="leading-relaxed">{state.description}</p>
    </div>
}

export default StateCard;