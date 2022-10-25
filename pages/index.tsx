import { NextPage } from "next"
import Item from "../Components/list-todo/list-todo";
import { Provider } from "react-redux";
import store from "../store/store";
import { persistor }from '../store/store'
import { PersistGate } from 'redux-persist/integration/react';
const ToDoList: NextPage = () => {

return(
  
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
    <Item/>
    </PersistGate>
  </Provider>
  
)

}
export default ToDoList;