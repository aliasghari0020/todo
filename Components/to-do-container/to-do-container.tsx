import type { NextPage } from "next";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { useState } from "react";
import type { AppDispatch } from "../../store/store";
import { addTodo } from "../../store/todo";
import type { FormEvent } from "react"
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";
import { useSnackbar } from 'notistack';
import axios from "axios";
import {v4} from "uuid";
import type { Todo } from "../../store/todo";

const ToDoContainer: NextPage = () => {
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        axios.post<Todo>("http://192.168.1.100:8000", {
            message: input,
            completed: false,
            id: v4()
        }).then((response) => {
            disptch(addTodo(response.data))
            setInput('')
            enqueueSnackbar('Added to list successfully!', { variant: "success" });
        }).catch(err => {
            enqueueSnackbar(err.message, { variant: "error" });
        })
    }

    const disptch: AppDispatch = useDispatch()
    const [input, setInput] = useState<string>("")
    return (

        <Container maxWidth="sm" sx={{
            marginTop: 3
        }}>
            <Grid item xs={12} md={10} rowSpacing={2}>
                <Link href="/">
                    <a>
                        <Button variant="contained" fullWidth sx={{
                            height: 56,
                            mb: 5
                        }} disableElevation color="success">
                            back to task list
                        </Button>
                    </a>
                </Link>
            </Grid>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <TextField
                            label="My task"
                            fullWidth
                            value={input}
                            onChange={(event) => setInput(event.currentTarget.value)} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Button variant="contained" disabled={input === ""} type="submit" fullWidth sx={{
                            height: 56
                        }} disableElevation endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>


        </Container>

    )
}
export default ToDoContainer