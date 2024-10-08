import { useState } from "react";
import StateCard from "../components/States/StateCard";
import StateShimmer from "../components/States/StateShimmer";
import StateError from "../components/States/StateError";

const API_BASE_URL = "https://api.react-formula.com/learning-api/demos/states-project/states/";
const States = () => {

    const [search, setSearch] = useState("");
    const [state, setState] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchState = async (e) => {
        e.preventDefault();
        if (!search.trim()) {
            setError({error: "Please enter a valid state name."});
            return;
        }        
        try {
            setIsLoading(true);
            setState(null);
            setError(null);
            const response = await fetch(`${API_BASE_URL}${search}`);
            if (!response.ok) {
                const errorMsg = await response.json();
                setError(errorMsg);
            } else {
                const data = await response.json();
                setState(data);
            }
        } catch (error) {
            setError(error.message || "Unknown error occurred");
        } finally {
            setIsLoading(false);
        }

    }

    console.log(error);
 

    return <div className="m-h-screen py-12 px-4 flex justify-center">
        <div className="w-full max-w-lg flex flex-col items-center gap-12">
            <form onSubmit={(e) => fetchState(e)} className="flex gap-4">
                <input type="text" placeholder="enter a USA state" className="p-2 w-60 border border-neutral-400" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button className="bg-teal-200 py-2 px-4" disabled={isLoading}>search</button>
            </form>
            {isLoading && <StateShimmer state={state} />}
            {error && <StateError errorMsg={error.error} />}
            {state && <StateCard state={state} />}
        </div>
    </div>
}

export default States;