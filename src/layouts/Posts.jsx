import { useEffect, useState } from "react";
import PostCard from "../components/MessagesPro/PostCard";
import { Bird } from "lucide-react";

const MessagesPro = () => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const [title, setTitle] = useState("");
    const [text, setText] = useState("");

    const fetchMessages = async () => {
        try {
            setError(null);
            setPosts(null);
            setIsLoading(true);

            const response = await fetch('https://dummyjson.com/posts');
            if (!response.ok) {
                const error = await response.json();
                setError(error);
            } else {
                const data = await response.json();
                setPosts(data.posts);
            }
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        const likes = Math.floor(Math.random() * 1000) + 1;
        const dislikes = Math.floor(Math.random() * 500) + 1;
        const views = Math.floor(Math.random() * 2500) + 1;
        const tags = ['history', 'geography', 'civics'];
        const userId = Math.floor(Math.random() * 230) + 1;
        console.log(views);

        e.preventDefault();
        fetch('https://dummyjson.com/posts/add', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title,
                userId,
                body: text,
                tags,
                reactions: {likes, dislikes},
                views,
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setPosts(prevState => [{...data, views}, ...prevState]);
            setTitle("");
            setText("");
        });
        
    }

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center px-4 py-8 bg-neutral-100 min-h-screen">
            <div className="flex items-center space-x-2 mb-10">
                <Bird className="text-rose-500" />
                <h1 className="text-3xl font-medium text-rose-600">Twizzer</h1>
            </div>
            <div className="w-full max-w-xl flex flex-col gap-4">
                <form className="flex flex-col gap-2 mb-8" onSubmit={handleSubmit}>
                    <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="The rain and wind abruptly stopped." className="border border-gray-300 rounded-md p-1" />
                    <textarea rows={4} value={text} onChange={(e) => setText(e.target.value)} placeholder="The rain and wind abruptly stopped, but the sky still had the gray swirls of storms in the distance. Dave knew this feeling all too well." className="border border-gray-300 rounded-md p-1" />
                    <button className="bg-green-400 px-2 py-1 mt-1 rounded-md w-40 self-center">POST</button>
                </form>
                {/* {error && <div>Error: {error}</div>} */}
                {isLoading && <div>Loading...</div>}
                {posts && posts.map(post => <PostCard key={post.id} post={post} />)}
            </div>
        </div>
    );
};

export default MessagesPro;


