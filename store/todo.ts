import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface Todo {
    id: string,
    message: string,
    completed: boolean

}
const todos = createSlice({ 
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.push(action.payload)
            
        },
        completeTodo: (state, action: PayloadAction<string>) => {
           
               state.map((todo)=> {
                if(todo.id=== action.payload){
                    todo.completed =  !todo.completed
                }
                return todo
               })
            
            
        }, 
        addBatchTodos:(state, action: PayloadAction<Todo[]>)=>{
            return action.payload;
        }
    }
})

export const {addTodo , completeTodo, addBatchTodos} = todos.actions
export default todos
