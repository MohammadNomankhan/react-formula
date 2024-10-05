import Card from "../components/PlayingCards/Card";

const CARDS = ['https://robohash.org/noman', 'https://robohash.org/madani', 'https://robohash.org/jami','https://robohash.org/afzal','https://robohash.org/saeed','https://robohash.org/faiz','https://robohash.org/raees', 'https://robohash.org/junaid', 'https://robohash.org/aamir'];


const PlayingCards = () => {
    return <div className="h-screen flex justify-center items-center bg-slate-900">
        <div className="w-[600px] flex justify-between flex-wrap gap-4">
            {CARDS.map((card, index) => <Card card={card} key={index} />)}
        </div>
    </div>
}

export default PlayingCards;