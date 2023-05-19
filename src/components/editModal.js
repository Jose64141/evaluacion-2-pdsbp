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
    DialogActions, DialogContentText
} from "@mui/material";

const marginProp = {margin:'10px'}
export default function EditModal({product, onClose})
{
    const [open, setOpen] = useState(false)
    function handleClose () {
        //setOpen(false);
        onClose();
    }

    return(
        <Dialog open={true} onClose={onClose}>
            <div>
                <DialogTitle>Function</DialogTitle>
                <DialogContent>
                    <Stack sx={marginProp}>
                        <TextField sx={marginProp} label="Code" error helperText="An Error"></TextField>
                        <TextField sx={marginProp} label="Name" error={false}></TextField>
                        <TextField sx={marginProp} label="Description" ></TextField>
                    </Stack>
                    <DialogActions>
                        <Button>Cancelar</Button>
                        <Button>Aceptar</Button>
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
