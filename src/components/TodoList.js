import React, {useEffect, useState} from 'react';
import List from "./List";
import Form from "./Form";
import {useDispatch, useSelector} from "react-redux";
import {load, add, del, toggle} from "../store/actions/tudu";

function TodoList(props) {

    const {todos} = useSelector(state => ({
        todos: state.todos
    }));

    const saveToLocalStorage = function ( todo) {
            const newTodos = [...todos, todo];
            localStorage.setItem('todos', JSON.stringify(newTodos));
    }

    const dispatch = useDispatch();
    const handleDel = (id) => {
        dispatch(del(id));
    }
    const handleAdd = (todo) => {
        todo = {...todo, id: Date.now(), isDone: false}
        dispatch(add(todo));
        saveToLocalStorage(todo);
    }

    const handleToggle = (id) => {
        dispatch(toggle(id));
    }

    return (
        <>
            <List todos={todos} onDeleteItem={handleDel} onToggleItem={handleToggle}/>
            <Form onSubmitForm={handleAdd}/>
        </>
    );
}

export default TodoList;
