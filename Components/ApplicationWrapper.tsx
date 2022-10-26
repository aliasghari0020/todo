import type { FunctionComponent, ReactElement } from "react";
import axios from "axios";
import { useEffect } from "react"
import { addBatchTodos, Todo } from '../store/todo';
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { useSnackbar } from 'notistack'

const ApplicationWrapper: FunctionComponent<{ children: ReactElement }> = (props) => {
    const { enqueueSnackbar } = useSnackbar();

    const dispatch: AppDispatch = useDispatch()
    useEffect(() => {
        console.log("HEEY")
        axios.get<Todo[]>('http://192.168.1.100:8000/get.php').then((response) => {
            dispatch(addBatchTodos(response.data))
        }).catch(err => {
            enqueueSnackbar(err.message, { variant: "error" });
        })
    }, []);

    return props.children;
}

export default ApplicationWrapper;