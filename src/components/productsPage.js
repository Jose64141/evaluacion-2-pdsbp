import {useState, useEffect} from "react";
import {Button, Box, Alert, AlertTitle, TextField, Modal} from "@mui/material";
import ProductsTable from "./table";
import EditModal from "./editModal";

const marginProp = {margin:'10px'}

export default function Page()
{
    const [modal, setModal] = useState(false);
    return(
        <>
        <Alert sx={marginProp} severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
        </Alert>
            {modal && <EditModal product={{}} onClose={()=>{}}></EditModal>}
        <Box sx={marginProp}>
            <Box sx={marginProp}>
                <TextField label="Buscar">

                </TextField>
                <Button>
                    {'\u{1F50D}'}
                </Button>
                <Button sx={{marginX: '100px'}} onClick={() => setModal(true)}>
                    +
                </Button>
            </Box>
        </Box>
        <ProductsTable onModalClose={()=>{}} onUpdate={setModal}></ProductsTable>
        </>
    )
}
