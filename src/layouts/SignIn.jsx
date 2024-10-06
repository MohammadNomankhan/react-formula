import { useState } from "react";

const SignIn = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return <div className="flex justify-center mt-12">
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(username, password);
        }} className="border border-slate-300 rounded-lg overflow-clip">
            <div className="flex flex-col gap-4 p-6">
                <h2 className="text-xl text-slate-900 text-center">Sign-In</h2>
                <input type="text" placeholder="enter username" value={username} onChange={(e) => setUsername(e.target.value)} className="shadow-inner p-2 rounded-md mb-4 border border-neutral-300 text-neutral-600" />
                <input type="password" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)} className="shadow-inner p-2 rounded-md mb-4 border border-neutral-300 text-neutral-600" />
            </div>
            <button className="w-full bg-sky-400 p-2 text-white">submit</button>
        </form>
    </div>
}

export default SignIn;