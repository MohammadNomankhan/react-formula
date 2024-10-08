import { useEffect, useState } from "react";

const RandomJoke = () => {

    const [joke, setJoke] = useState({
        question: "",
        answer: ""
    });

    const [showAnswer, setShowAnswer] = useState(false);

    const getJoke = async () => {
        const response = await fetch("https://api.react-formula.com/learning-api/demos/random-joke/jokes");
        const data = await response.json();
        setShowAnswer(false);
        setJoke(data);
    }

    useEffect(() => {
        getJoke();
    }, []);

    return <div className="h-screen flex flex-col justify-center items-center px-4 py-20">
        <div className="w-full max-w-lg flex flex-col justify-between h-full items-center">
            <div>
                <h2 className="text-3xl text-purple-500 text-center mb-8">{joke?.question}</h2>
                {showAnswer && <h3 className="text-xl text-sky-500 text-center">{joke?.answer}</h3>}
            </div>
            <div className="flex flex-col gap-8 items-center">
                <button className="w-60 rounded-lg p-2 bg-sky-400" onClick={() => setShowAnswer(prevState => !prevState)}>{showAnswer ? "hide answer" : "show answer"}</button>
                <button className="w-40 rounded-lg p-2 bg-purple-400" onClick={getJoke}>new joke</button>
            </div>
        </div>
    </div>
}

export default RandomJoke;