import { NextPage } from "next"
import ToDoContainer from "../Components/to-do-container/to-do-container";
import Item from "../Components/list-todo/list-todo";
import { Provider } from "react-redux";
import  {persistor} from "../store/store";
import store from "../store/store";
import todos from "../store/todo";
import { useEffect } from "react";
import { PersistGate } from 'redux-persist/integration/react'
const ToDoList: NextPage = () => {

return(
  
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <ToDoContainer/>
    <Item/>
  </PersistGate>
  </Provider>
  
)

}
export default ToDoList;