import { v4 as uuid } from 'uuid';



import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Todo {
    id: string,
    mesage: string,
    completed: boolean

}
const todos = createSlice({ 
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.push({
                id: uuid(),
                mesage: action.payload,
                completed: false,
            })
            
        },
        completeTodo: (state, action: PayloadAction<string>) => {
           
               state.map((todo)=> {
                if(todo.id=== action.payload){
                    todo.completed =  !todo.completed
                }
                return todo
               })
            
            
        }, 
    }
})

export const {addTodo , completeTodo} = todos.actions;

export default todos;
