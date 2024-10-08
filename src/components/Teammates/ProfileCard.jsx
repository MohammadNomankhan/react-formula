const ProfileCard = ({user}) => {
    return <div className="flex flex-col sm:flex-row shadow-md">
        <div className="sm:basis-1/4 p-4 bg-teal-700 rounded-t-lg  sm:rounded-l-lg flex sm:block justify-center h-40 sm:h-full">
            <img src={`https://robohash.org/${user.firstName}?set=set5`} alt={user.firstName} className="rounded-full border-2 border-teal-500 h-full" />
        </div>
        <div className="sm:basis-3/4 p-4 bg-white flex flex-col justify-center rounded-b-lg sm:rounded-r-lg">
            <h3 className="text-neutral-600 text-xl">{`${user.firstName} ${user.lastName}`}</h3>
            <p className="text-teal-600 text-lg">{user.company.title}</p>
            <p className="text-neutral-600">{user.email}</p>
        </div>
    </div>
}

export default ProfileCard;