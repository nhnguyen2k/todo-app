import React from 'react'
import { useDispatch } from "react-redux"

import { FormControl, Typography, Button, ButtonGroup } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { styled } from '@mui/system';
import moment from 'moment'

import { checkTodo, deleteTodo } from "../../store/actions/todoActions.js"


const TodoForm = styled(FormControl)({
    margin: "20px",
    padding: "20px",
    border: "2px solid #bdbdbd",
    borderRadius: "9px",
    display: 'flex',
    flexDirection: 'row',
    p: 1,
    m: 1,
    justifyContent: "space-between"
});

const StyledTypography = styled(Typography)({
    color:"#8f8f8f"
})

const Todo = ({todo, setTodo}) => {

    const dispatch = useDispatch()

    const handleUpdateClick = () => {
        setTodo(todo)

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    const handleCheck = (id) => {
        dispatch(checkTodo(id))
    }

    const handleDelete = (id) => {
        dispatch(deleteTodo(id))
    }

    return(
        <>
            <TodoForm>
                <div>
                {todo.isComplete ? 
                    (<Typography variant="subtitle1" sx ={{ textDecoration: "line-through" }}>
                        {todo.name}
                    </Typography>
                    ) : (
                    <Typography variant="subtitle1">
                        {todo.name}
                    </Typography>
                    )
                }
                
                    <StyledTypography variant="body2">
                        Author: ABCD
                    </StyledTypography>

                    <StyledTypography variant="body2">
                        Added: {moment(todo.date).fromNow()}
                    </StyledTypography>
                </div>

                <div>
                    <ButtonGroup size="small" aria-label="outlined primary button group">
                        <Button onClick = {() => handleCheck(todo._id)} sx = {{ color: 'green' }}>
                            {todo.isComplete ? (
                                <CheckCircleIcon color="success"/>
                            ) : (
                                <CheckCircleOutlineIcon/>
                            )
                            }
                        </Button>
                    
                        <Button onClick={ () => handleUpdateClick() }>
                            <EditIcon color="primary"/>
                        </Button>
                        <Button onClick = {() => handleDelete(todo._id)}>
                            <DeleteIcon color="secondary"/>
                        </Button>
                    </ButtonGroup>
                </div>
            </TodoForm>
        </>
    );

}

export default Todo;