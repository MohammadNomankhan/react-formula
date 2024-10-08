import { TriangleAlert } from "lucide-react"

const StateError = ({errorMsg}) => {
    return <div className="basis-full flex gap-4 items-center">
        <TriangleAlert size={40} className="text-yellow-400" />
        <div>{errorMsg}</div>
    </div>
}

export default StateError;