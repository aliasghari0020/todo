import type { NextPage } from "next";
import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CheckIcon from '@mui/icons-material/Check';
import { useSelector } from "react-redux";
import type { Appstate } from "../../store/store";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { completeTodo, Todo } from "../../store/todo";
import ClearIcon from '@mui/icons-material/Clear';
import Link from "next/link";
import axios from 'axios'

// comment test
const Item: NextPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const todosItem = useSelector((state: Appstate) => state.todos)

    const handelCompletButton = (id: string) => {
        axios.put("http://192.168.1.100:8000/update-status.php", {
            id
        }).then(() => {
            dispatch(completeTodo(id))
        }).catch(()=>{
            
        })
    }

    return (

        <Container maxWidth="xs" sx={{
            marginTop: 10
        }}>

            <Link href="/add-item">
                <a>
                    <Button variant="contained" fullWidth sx={{
                        height: 56,
                        mb: 5
                    }} disableElevation color="success">
                        Add new task
                    </Button>
                </a>
            </Link>


            <Grid container rowSpacing={2}>
                {todosItem.map((todo) => (<>
                    <Grid item xs={10} md={10} key={todo.id}>
                        <Typography fontSize="2rem" ><span className={todo.completed == true ? "done" : ""}>{todo.message}</span></Typography>

                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Button variant="contained" color={todo.completed == false ? "success" : "error"} fullWidth sx={{
                            height: 56
                        }} disableElevation
                            onClick={() => handelCompletButton(todo.id)}
                        >
                            {todo.completed == false ? <CheckIcon fontSize="large" /> : <ClearIcon fontSize="large" />}
                        </Button>
                    </Grid>
                </>))}
            </Grid>
        </Container>

    )

}


export default Item

