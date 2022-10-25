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
import { completeTodo } from "../../store/todo";
import Link from "next/link";

// comment test
const Item: NextPage = () => {
    const dispatch: AppDispatch = useDispatch();
    const todosItem = useSelector((state:Appstate)=> state.todos)



    return (
      
        <Container maxWidth="xs" sx={{
            marginTop: 10
        }}>
                 <Grid item xs={12} md={10} rowSpacing={2}>
                <Link href="http://localhost:3000/add-item">
                <Button variant="contained" fullWidth sx={{
                    height: 56,
                    mb: 5
                }} disableElevation  color="success">
                   Add new task
                </Button>
                </Link>
            </Grid>

            <Grid container rowSpacing={2}>
            {todosItem.map((todo) => (<>
                    <Grid item xs={10} md={10}>
                        <Typography fontSize="2rem" ><span className={todo.completed==true ? "done" : ""}>{todo.mesage}</span></Typography>

                    </Grid>
                    <Grid item xs={2} md={2}>
                        <Button variant="contained" color="success" fullWidth sx={{
                            height: 56
                        }} disableElevation
                        onClick={()=>dispatch(completeTodo(todo.id))}
                        >
                            <CheckIcon fontSize="large" />
                        </Button>
                    </Grid>
                    </>))}
                </Grid>
        </Container>
        
    )

}


export default Item

