export const fetchTodos = async () => {
    const response = await fetch('https://dummyjson.com/todos?limit=10');
    if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg);
    }
    const data = await response.json();
    return data.todos;
};

export const saveTodo = async (inputTodo) => {
    const response = await fetch('https://dummyjson.com/todos/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inputTodo),
    });
    if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg);
    } else {
        const addedTodo = await response.json();
        return addedTodo;
    }

}

export const deleteTodo = async (todoId) => {
    const response = await fetch(`https://dummyjson.com/todos/${todoId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg);
    } else {
        const data = await response.json();
        return data;
    }
}

export const todoCompleted = async (inputTodo) => {
    const response = await fetch(`https://dummyjson.com/todos/${inputTodo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            completed: !inputTodo.completed, // Toggle based on current state
        }),
    });

    if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg);
    } else {
        const updatedTodo = await response.json();
        return updatedTodo;
    }

};

export const editTodo = async (inputTodo) => {
    const response = await fetch(`https://dummyjson.com/todos/${inputTodo.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            todo: inputTodo.todo,
        }),
    });


    if (!response.ok) {
        const errorMsg = await response.json();
        throw new Error(errorMsg);
    } else {
        const updatedTodo = await response.json();
        console.log(updatedTodo);
        console.log(response);
        return updatedTodo;
    }
} 