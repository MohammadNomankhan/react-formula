import clsx from "clsx";
import { Plus, Save } from "lucide-react";

const TodoForm = ({ handleSaveTodo, newTodo, setNewTodo, isEditing, handleAddTodo, isSaving }) => {
    return <>
        {isEditing && (
            <form onSubmit={(e) => {
                e.preventDefault();
                handleSaveTodo();
            }}>
                <input
                    type="text"
                    autoFocus
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                    className="p-3 mb-8 mt-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all mb-2"
                />
            </form>
        )}
        <button disabled={isSaving} onClick={isEditing ? handleSaveTodo : handleAddTodo} className={clsx("flex gap-2 items-center justify-center p-3 rounded-md transition-all shadow-sm", isEditing ? "bg-sky-500 text-sky-100 hover:brightness-105 active:brightness-110" : "text-sky-700 hover:bg-sky-200 active:bg-sky-300")}>
            {isEditing
                ? <><Save size={18} className="text-sky-100" />
                    <span className="font-medium">Add Todo</span></>
                : <><Plus size={18} className="text-sky-600" />
                    <span className="font-medium">Add Todo</span></>}
        </button>
    </>
}

export default TodoForm;