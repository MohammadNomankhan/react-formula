import { useEffect, useState } from "react";
import ProfileCard from "../components/Teammates/ProfileCard";


const Shimmer = () => {
    return <div className="flex flex-col gap-4">
        {Array(20).fill('*').map((item, idx) => <div key={idx} className="h-[100px] bg-gray-300 rounded-lg"></div>)}
    </div>
}

const Teammates = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchUsers = async () => {
        const skip = Math.floor(Math.random() * 188) + 1;
        const response = await fetch(`https://dummyjson.com/users?limit=20&skip=${skip}&select=firstName,lastName,company,email`);
        const data = await response.json();
        setUsers(data.users);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchUsers();
    }, [])

    return <div className="flex justify-center py-12 px-4 bg-neutral-100 m-h-screen">
        <div className="w-full max-w-md flex flex-col gap-4 items-stretch">
            {isLoading ? <Shimmer /> : users.map(user => <ProfileCard user={user} key={user.id} />)}
        </div>
    </div>
}

export default Teammates;