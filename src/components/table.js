import {useState, useEffect} from "react";
import  {Button, Table, TableHead, TableBody, TableRow, TableCell, TextField} from "@mui/material";
export default function ProductsTable({onUpdate, onModalClose})
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
                <TableRow>
                    <TableCell>
                        Code
                    </TableCell>
                    <TableCell>
                        Name
                    </TableCell>
                    <TableCell>
                        Description
                    </TableCell>
                    <TableCell onClick={onUpdate}>
                        <Button>{'\u270e'}</Button>
                    </TableCell>
                    <TableCell>
                        <Button>{'\u2716'}</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>

    )
}