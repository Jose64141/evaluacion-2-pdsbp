import axios from 'axios';
import {useState, useEffect} from "react";
import {
    Button,
    Box,
    Stack,
    Card,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions, DialogContentText, Alert, AlertTitle
} from "@mui/material";

const marginProp = {margin:'10px'}
const url = "http://20.231.202.18:8000/api/form"

export default function EditModal({originalPost, onClose, onUpdate})
{
    const [post, setPost] = useState({...originalPost});

    const [errorMessage, setErrorMessage] = useState("");

    const[error, setError] = useState({
        code: "",
        name: "",
        description:""
    });




    function handleAdd(){
        let postError = {
            code: "",
            name: "",
            description:""};
        let isError = false;
        if(post.code ==""){
            postError.code="Campo requerrido";
            isError = true;
        }
        if(post.name ==""){
            postError.name="Campo requerrido"
            isError = true;
        }
        if(post.description ==""){
            postError.description="Campo requerrido"
            isError = true;
        }
        if(isError === true)
        {
            setError(postError);
            return;
        }

        axios.post(url+"/", {
            code: post.code,
            name: post.name,
            description: post.description
        }).then((response)=>{setErrorMessage("");onUpdate(post); onClose();}).catch((err)=>{
            setErrorMessage("No se pudo mandar la solicitud.")
        });
    }
    function handleUpdate(){
        let postError = {
            code: "",
            name: "",
            description:""}
        let isError = false
        if(post.code ===""){
            postError.code="Campo requerrido";
            isError = true;
        }
        if(post.name ===""){
            postError.name="Campo requerrido"
            isError = true;
        }
        if(post.description ===""){
            postError.description="Campo requerrido"
            isError = true;
        }
        if(isError === true)
        {
            setError(postError);
            return;
        }

        axios.put(url+"/"+post.id,{
            code: post.code,
            name: post.name,
            description: post.description
        }).then((response)=>{setErrorMessage("");onUpdate(post); onClose();}).catch((err)=>{setErrorMessage("No se pudo mandar la solicitud.")});
}

    return(
        <Dialog open={true} onClose={onClose}>
            <div>
                <DialogTitle>Posts</DialogTitle>
                <DialogContent>
                    {errorMessage !== "" && (
                        <Alert sx={marginProp} severity="error">
                            <AlertTitle>Error</AlertTitle>
                            {errorMessage}
                        </Alert>
                    )}
                    <Stack sx={marginProp}>
                        <TextField
                            sx={marginProp}
                            label="Code"
                            error={error.code!==""}
                            helperText={error.code}
                            defaultValue={post.code}
                            onChange={(e)=>{setPost({...post, code: e.target.value})}}></TextField>
                        <TextField sx={marginProp} label="Name"
                                   error={error.name!==""}
                                   helperText={error.name}
                                   defaultValue={post.name}
                                   onChange={(e)=>{setPost({...post, name: e.target.value})}}></TextField>
                        <TextField sx={marginProp} label="Description" multiline
                                   defaultValue={post.description}
                                   onChange={(e)=>{setPost({...post, description: e.target.value})}}></TextField>
                    </Stack>
                    <DialogActions>
                        <Button onClick={onClose}>Cancelar</Button>
                        <Button onClick={()=>{originalPost.id==="nan"? handleAdd() : handleUpdate()}}>Aceptar</Button>
                    </DialogActions>
                </DialogContent>
            </div>
        </Dialog>
    )
}

function ErrorDialog({errorMessage, onClose})
{
    return(
        <Dialog open={true} onClose={onClose}>
            <div>
                <DialogTitle>Error</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Ocurrió un error: {+""}
                    </DialogContentText>
                    <DialogActions>
                        <Button onClose={onClose}>Aceptar</Button>
                    </DialogActions>
                </DialogContent>
            </div>
        </Dialog>
    )
}
