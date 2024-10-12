import clsx from "clsx";
import { CircleCheckBig, Pencil, Save, Trash } from "lucide-react";
import { useState } from "react";

const TodoItem = ({ todo, handleDeleteTodo, handleTodoCompleted, handleEditTodo }) => {

    const [isEditingTodo, setIsEditingTodo] = useState(false);
    const [editedTodo, setEditedTodo] = useState(todo.todo);

    return (
        <div
            className={clsx(
                "p-3 flex gap-4 rounded-md items-center justify-between transition-all duration-300",
                todo.completed ? "bg-green-100" : "bg-gray-100"
            )}
        >
            <div className="flex gap-2 items-center">
                {isEditingTodo ? <input
                    type="text"
                    autoFocus
                    value={editedTodo}
                    onChange={(e) => setEditedTodo(e.target.value)}
                    placeholder="Enter new todo"
                    className="p-2 m-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                /> : <>
                <CircleCheckBig
                    onClick={() => handleTodoCompleted(todo)}
                    className={clsx(
                        "transition-colors duration-300 flex-shrink-0 cursor-pointer",
                        todo.completed ? "text-green-600" : "text-gray-400"
                    )}
                />
                <div
                    className={clsx(
                        "text-gray-800 transition-all duration-300",
                        todo.completed && "line-through"
                    )}
                >
                    {todo.todo}
                </div>
                </>}
            </div>
            <div className="flex gap-4 items-center">
                {isEditingTodo ? <button className="flex gap-1 items-center justify-center p-1 rounded-md transition-all shadow-sm bg-sky-500 text-sky-100 hover:brightness-105 active:brightness-110" onClick={() => {
                        handleEditTodo({...todo, todo: editedTodo});
                        setIsEditingTodo(false);
                    }}><Save size={15} className="text-sky-100" />
                    <span>Save</span></button> : 
                    <>
                <button
                    className="p-1 rounded-full hover:bg-sky-100 text-sky-500 transition-all duration-300"
                    aria-label="Edit Todo"
                    >
                    <Pencil size={16} onClick={() => setIsEditingTodo(true)}/>
                </button>
                <button
                    className="p-1 rounded-full hover:bg-red-100 text-red-500 transition-all duration-300"
                    aria-label="Delete Todo"
                    >
                    <Trash size={16} onClick={() => handleDeleteTodo(todo.id)}/>
                </button>
                </>
                }
            </div>
        </div>
    );
};

export default TodoItem;
