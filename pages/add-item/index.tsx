import type { NextPage} from "next";
import ToDoContainer from "../../Components/to-do-container/to-do-container";

import { SnackbarProvider } from "notistack";
const AddItem:NextPage = ()=>{

return(
    <>
    <SnackbarProvider maxSnack={3}>
    <ToDoContainer/>
    </SnackbarProvider>
    </>
)


}
export default AddItem