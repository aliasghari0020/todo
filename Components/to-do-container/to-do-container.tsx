import { NextPage } from "next";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "../../store/store";
import {addTodo} from "../../store/todo";
import type {FormEvent} from "react"
const ToDoContainer: NextPage = () => {

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        disptch(addTodo(input))
        setInput('')
    }

    const disptch :AppDispatch= useDispatch()
    const [input,setInput] = useState<string>("")
    return (
        <Container maxWidth="sm" sx={{
            marginTop: 3
        }}>
            <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <TextField 
                    label="My task" 
                    fullWidth  
                    value={input}
                     onChange={(event)=> setInput(event.currentTarget.value)}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Button variant="contained" disabled={input === ""} type="submit" fullWidth sx={{
                        height: 56
                    }} disableElevation>
                        <AddCircleIcon fontSize="large" />
                    </Button>
                </Grid>
            </Grid>
            </form>

        </Container>

    )
}
export default ToDoContainer