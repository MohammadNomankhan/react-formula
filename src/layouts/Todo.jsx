import TodoShimmer from "../components/Todo/TodoShimmer";
import TodoItem from "../components/Todo/TodoItem";
import TodoForm from "../components/Todo/TodoForm";
import { useTodo } from "../components/Todo/useTodo";

const Todo = () => {

    const {
        todos,
        isLoading,
        isEditing,
        newTodo,
        handleAddTodo,
        handleSaveTodo,
        setNewTodo,
        isSaving,
        handleDeleteTodo,
        handleTodoCompleted,
        handleEditTodo
    } = useTodo();

    

    return (
        <div className="min-h-screen flex justify-center items-center py-8 px-4 sm:px-0 bg-gradient-to-r from-cyan-400 to-blue-600">
            {isLoading || !todos ? (
                <TodoShimmer />
            ) : (
                <div className="w-full max-w-sm p-4 bg-white flex flex-col gap-3 rounded-md shadow-lg">
                    {todos.map((todo) => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} handleTodoCompleted={handleTodoCompleted} handleEditTodo={handleEditTodo}/>)}
                    <TodoForm handleSaveTodo={handleSaveTodo} newTodo={newTodo} setNewTodo={setNewTodo} isEditing={isEditing} handleAddTodo={handleAddTodo} isSaving={isSaving}/>
                </div>
            )}
        </div>
    );
};

export default Todo;
