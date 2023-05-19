import {useState, useEffect} from "react";
import  {Button, Table, TableHead, TableBody, TableRow, TableCell, TextField} from "@mui/material";
import axios from "axios";

const url = "http://20.231.202.18:8000/api/form"

export default function ProductsTable({posts, onUpdate, onModalClose, onHTTPError})
{
    return(
        <Table>
            <TableHead>
                <TableCell>
                    Code
                </TableCell>
                <TableCell>
                    Name
                </TableCell>
                <TableCell>
                    Description
                </TableCell>
                <TableCell>
                    Update
                </TableCell>
                <TableCell>
                    Delete
                </TableCell>
            </TableHead>
            <TableBody>
                {posts.map((post)=> <TableRowElement post={post} onUpdate={onUpdate} onModalClose={onModalClose} onHTTPError={onHTTPError}></TableRowElement>)}
            </TableBody>
        </Table>

    )

}
function TableRowElement({post, onUpdate, onHTTPError, onModalClose})
{
    const handleDelete = () =>
    {
        axios.delete(url+"/"+post.id).then(()=>{}).catch((err)=>{onHTTPError("No se ha podido eliminar.")});
    }

    return(
        <TableRow key={post.id}>
            <TableCell>
                {post.code}
            </TableCell>
            <TableCell>
                {post.name}
            </TableCell>
            <TableCell>
                {post.description}
            </TableCell>
            <TableCell onClick={()=>onUpdate(post)}>
                <Button>{'\u270e'}</Button>
            </TableCell>
            <TableCell onClick={handleDelete}>
                <Button>{'\u2716'}</Button>
            </TableCell>
        </TableRow>
    )
}