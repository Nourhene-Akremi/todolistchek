import {ADD,DELETE,ADDINPUT} from "./action-type"
const start={todos:[]}

  export  const Reducer=(state=start,action)=>{
    switch (action.type) {
        case ADD:return{
            ...state,
            todos:[...state.todos,action]
        }
        
        case ADDINPUT:return{
            ...state,
            todos:[...state.todos,action.payload]
        }

        case DELETE:return{
            ...state,
            todos:state.todos.filter(todo=>todo.id!==action.payload)
        }
    
        default:return state

    }
    
} 
