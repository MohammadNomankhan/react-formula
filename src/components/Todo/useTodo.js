import { useEffect, useState } from "react";
import * as todoServices from "./todoServices";

export const useTodo = () => {
    const [todos, setTodos] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [newTodo, setNewTodo] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    const handleAddTodo = () => setIsEditing(true);

    const handleDeleteTodo = async (inputTodoId) => {
        const prevTodos = [...todos];
        setTodos(prevTodos => prevTodos.filter(todo => todo.id != inputTodoId));
        if (inputTodoId === 255) return;
        console.log(inputTodoId);
        console.log(todos);

        try {
            await todoServices.deleteTodo(inputTodoId);
        } catch (error) {
            setError(error.message);
            setTodos(prevTodos);
        }
    }

    const handleTodoCompleted = async (inputTodo) => {
        // Optimistic UI update: Toggling the completed state immediately
        const previousTodos = [...todos];
        setTodos(prevTodos =>
            prevTodos.map(todo =>
                todo.id === inputTodo.id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    
        try {
            const updatedTodo = await todoServices.todoCompleted(inputTodo);
            // Update the specific todo with the server response (if any new data comes back)
            setTodos(prevTodos =>
                prevTodos.map(todo =>
                    todo.id === inputTodo.id ? updatedTodo : todo
                )
            );
        } catch (error) {
            setError(error.message);
            // Rollback to the previous state on failure
            setTodos(previousTodos);
        }
    };
    
    const handleEditTodo = async (inputTodo) => {
        const prevTodos = [...todos];
        setTodos(prevTodos => prevTodos.map(todo => todo.id == inputTodo.id ? inputTodo : todo));

        try {
            const updatedTodo = await todoServices.editTodo(inputTodo);
            console.log(updatedTodo);
            setTodos(prevTodos => prevTodos.map(todo => todo.id == inputTodo.id ? updatedTodo : todo));
        } catch (error) {
            setError(error.message);
            setTodos(prevTodos);
        }
    }

    const handleSaveTodo = async () => {
        if (newTodo.trim() === "") return;

        const newlyCreatedTodo = { todo: newTodo, completed: false, userId: 4 };
        setTodos(prevTodos => [...prevTodos, newlyCreatedTodo]);
        setIsEditing(false);
        setNewTodo("");

        try {
            setIsSaving(true);
            setError(null);
            const addedTodo = await todoServices.saveTodo(newlyCreatedTodo);
            setTodos(prevTodos => prevTodos.map(todo => (todo.id === newlyCreatedTodo.id ? addedTodo : todo)));
        } catch (error) {
            setError(error.message);
            setTodos(prevTodos => prevTodos.filter(todo => todo.id !== newlyCreatedTodo.id));
        } finally {
            setIsSaving(false);
        }
    };

    const fetchTodos = async () => {
        try {
            setIsLoading(true);
            setTodos(null);
            setError(null);
            const todos = await todoServices.fetchTodos();
            setTodos(todos);
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return {
        todos,
        isLoading,
        error,
        newTodo,
        isEditing,
        handleAddTodo,
        handleSaveTodo,
        setNewTodo,
        handleDeleteTodo,
        handleTodoCompleted,
        handleEditTodo
    };
};
