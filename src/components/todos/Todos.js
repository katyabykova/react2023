import React, {useEffect, useState} from 'react';
import {todosApiService} from "../../services/todos.api.service";
import {Todo} from "./Todo";

const Todos = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        todosApiService.getAll().then(({data}) => setTodos(data))
    }, [])
    return (
        <div>
            {
                todos.map(todo => <Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export {Todos};