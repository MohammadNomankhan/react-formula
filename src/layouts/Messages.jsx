import { useState } from "react";

const Messages = () => {

    const [messages, setMessages] = useState(["Hey Programmers!", "Noman here..."]);
    const [newMsg, setNewMsg] = useState("");
    const handleMsgSubmit = (e) => {
        e.preventDefault();
        const updatedMessages = [...messages, newMsg];
        setMessages(updatedMessages)
        setNewMsg("");
    }
    const clearMessages = () => setMessages([]);

    return <div className="flex justify-center p-4">
        <div className="w-full max-w-md">
            <form onSubmit={handleMsgSubmit} className="mb-12 flex gap-4 items-center justify-center">
                <input maxLength={63} type="text" placeholder="enter message" value={newMsg} onChange={(e) => setNewMsg(e.target.value)} className="basis-1/2 p-2 border border-gray-400 rounded-md focus:border-purple-600" />
                <button className="bg-purple-200 border border-purple-800 text-purple-800 py-2 px-6 rounded-md">send</button>
            </form>
            <div className="flex flex-col gap-4">
                <button className="bg-gray-200 text-gray-800 px-1 border border-gray-800 rounded self-end" onClick={clearMessages}>clear all</button>
                {messages.length == 0 && <p className="text-xl text-purple-900 text-center">No Message to show, try sending some message(s)</p>}
                {messages.map((message, idx) => <p key={idx} className="rounded-full text-sm px-6 py-3 border border-gray-400">{message}</p>)}
            </div>
        </div>
    </div>
}

export default Messages;