import { toast } from "react-toastify"

const todoReducer = (state = [], action) => {
    switch(action.type){
        case "GET_TODOS":
            return action.todos.data

        case "UPDATE_TODO":
            toast.success("A Todo Was Updated...", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.map((todo) =>
                todo._id === action.todo.data._id ? action.todo.data : todo
            )
            
        case "CHECK_TODO":
            toast.success("A Todo Status Was Updated...", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.map((todo) =>
                todo._id === action.todo.data._id ? action.todo.data : todo
            )

        case "DELETE_TODO":
            toast.success("A Todo Was Deleted...", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
            return state.filter((todo) =>
                todo._id !== action.id 
            )

        case "ADD_TODO":
            toast.success("A Todo Was Added...", {
                position: toast.POSITION.BOTTOM_RIGHT
            })

            return [action.todo.data, ...state]
            default:
                return state
    }
}

export default todoReducer