import axios from 'axios';
import {useState, useEffect} from "react";
import {Button, Box, Alert, AlertTitle, TextField, Modal} from "@mui/material";
import ProductsTable from "./table";
import EditModal from "./editModal";

const marginProp = {margin:'10px'}
const url = "http://20.231.202.18:8000/api/form"
export default function Page()
{
    const [modal, setModal] = useState(false);
    const [posts, setPostList] = useState([]);
    const [errorMessage, setError] = useState("");

    const [modalPost, setModalPost] = useState({});

    const [searchTerm, setSearchTerm] = useState("");
    function search()
    {
        if (searchTerm === "")
        {return}
        setPostList(posts.filter((post)=>{
            if(post.code === searchTerm)
                return true;
            else if(post.name === searchTerm)
                return true;
            else if(post.description === searchTerm)
                return true;
            else return false;
        }))

    }

    function handlePostAdd(){}

    function handlePostUpdate()
    {

    }

    function updateList(post)
    {
        if(posts.find((value)=>value.id == post.id))
        {
            const postIndex = posts.indexOf(post);
            const newList = [...posts];
            newList[postIndex] = {...posts};
            setPostList(newList)
        }

        else{
            setPostList([...posts,{...post}]);
        }
    }


    useEffect(() => {
        axios.get(url)
            .then((response) => setPostList(response.data))
            .catch((err)=> setError(err))}
    ,[])

    return(
        <>
            {errorMessage !== "" && (
                <Alert sx={marginProp} severity="error">
                    <AlertTitle>Error</AlertTitle>
                    {errorMessage}
                </Alert>
            )}
            {modal && <EditModal originalPost={modalPost} onClose={()=> setModal(false)} onUpdate={updateList}></EditModal>}
        <Box sx={marginProp}>
            <Box sx={marginProp}>
                <TextField label="Buscar"
                onChange={(e)=>setSearchTerm(e.target.value)}>
                </TextField>
                <Button onClick={search}>
                    {'\u{1F50D}'}
                </Button>
                <Button sx={{marginX: '100px'}} onClick={() => {setModalPost({id:"nan"}); setModal(true);}}>
                    +
                </Button>
            </Box>
        </Box>
        <ProductsTable posts={posts} onModalClose={()=>{}} onUpdate={(post) => {setModalPost(post);setModal(true);}}
            onHTTPError={setError}></ProductsTable>
        </>
    )
}
