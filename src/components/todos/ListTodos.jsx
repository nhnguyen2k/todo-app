import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Todo from './Todo'
import { getTodos } from '../../store/actions/todoActions.js'

import { FormControl, Typography } from '@mui/material'
import { styled } from '@mui/system';

const TodosList = styled(FormControl)({
    margin: "20px auto",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: 'flex',
    justifyContent: "space-between"
});


const ListTodos = ({setTodo}) => {
    const dispatch = useDispatch()
    const todos = useSelector((state) => state.todos)

    useEffect(() => {
        dispatch(getTodos())
    }, [dispatch])

    return(
        <>
            <TodosList>
            <Typography variant ="h5">
                { todos.length > 0 ? "Todos" : "No Todo Yet" }
            </Typography>
            { todos && todos.map((todo) => {
                return (
                    <Todo 
                    todo = {todo}
                    key = {todo._id} 
                    setTodo = { setTodo }   
                    />
                )
            }) }
            </TodosList>
        </>
    );

}

export default ListTodos;