import { NextPage } from "next";
import { Grid, TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { AppDispatch } from "../../store/store";
import { addTodo } from "../../store/todo";
import type { FormEvent } from "react"
import SendIcon from '@mui/icons-material/Send';
import Link from "next/link";
import { VariantType, useSnackbar } from 'notistack';

const ToDoContainer: NextPage = () => {

    const test = useSnackbar();
   
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant: VariantType) => () => {
        enqueueSnackbar('This is a success message!', { variant });
    };

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault()
        disptch(addTodo(input))
        setInput('')
    }

    const disptch: AppDispatch = useDispatch()
    const [input, setInput] = useState<string>("")
    return (
      
        <Container maxWidth="sm" sx={{
            marginTop: 3
        }}>
            <Grid item xs={12} md={10} rowSpacing={2}>
                <Link href="http://localhost:3000/">
                    <Button variant="contained" fullWidth sx={{
                        height: 56,
                        mb: 5
                    }} disableElevation color="success">
                        back to task list
                    </Button>
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
                        }} disableElevation endIcon={<SendIcon />} onClick={handleClickVariant("success")}>
                            Send
                        </Button>
                    </Grid>
                </Grid>
            </form>


        </Container>
            
    )
}
export default ToDoContainer