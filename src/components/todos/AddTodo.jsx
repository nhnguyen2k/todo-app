import React from 'react'
import { useDispatch } from "react-redux"

import { TextField, Button, FormControl } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/system';

import { addTodo, updateTodo } from "../../store/actions/todoActions.js"

const MyStyledForm = styled(FormControl)({
    margin: "0px auto",
    padding: "30px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: 'flex',
    flexDirection: 'row',
    p: 1,
    m: 1,
    justifyContent: "space-between"
});


const AddTodo = ({todo, setTodo}) => {
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault()

        if(todo._id){
            const id = todo._id
            const updatedTodo = {
                name: todo.name,
                isComplete: todo.isComplete,
                date: todo.date,
                author: "ABC",
            }

            dispatch(updateTodo(updatedTodo, id))
        } else {
            const newTodo = {
                ...todo,
                date: new Date(),
            }
            dispatch(addTodo(newTodo))
        }

        
        setTodo({
            name: "",
            isComplete: false
        })
    }

    return(
        <>
        <MyStyledForm noValidate autoComplete="off" onSubmit = {handleSubmit}>
            <TextField 
                sx = {{ margin: "10px 0px" }}
                id="enter-todo"
                varriant="outlined"
                label="enterTodo"
                autoFocus
                fullWidth
                value = { todo.name }
                onChange = {(e) => setTodo({...todo, name: e.target.value})}
            />
            <Button variant="contained" onClick={handleSubmit} sx={{color: "primary", margin: "10px",padding: "16px"}}>
                <SendIcon />
            </Button>
        </MyStyledForm>
        </>
    );

}

export default AddTodo;