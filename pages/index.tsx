import { NextPage } from "next"
import Item from "../Components/list-todo/list-todo";
import { Provider } from "react-redux";
import store from "../store/store";

const ToDoList: NextPage = () => {

return(
  
  <Provider store={store}>
   
    <Item/>
 
  </Provider>
  
)

}
export default ToDoList;