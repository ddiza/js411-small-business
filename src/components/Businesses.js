import React from 'react'
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import cookie from "cookie";

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const Businesses = (props) => {
    return (
        <TableContainer style={{width: "95%", margin: "auto"}} component={Paper} elevation={8} >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><h3>Business Name</h3></TableCell>
                        <TableCell><h3>Address</h3></TableCell>
                        <TableCell><h3>Hours of Operations</h3></TableCell>
                        <TableCell><h3>Business Information</h3></TableCell>
                        <TableCell><h3>Remove from Listing</h3></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.businesses.map((business, index)=> {
                        return (
                            <TableRow>
                                <TableCell><h4>{business.name}</h4></TableCell>
                                <TableCell>{business.address}</TableCell>
                                <TableCell>{business.hours.reduce((prev, cur) => [ ...prev, cur, <br /> ], [])}</TableCell>
                                <TableCell>
                                <h4><Link to={`/business/${index}`} className="underline">Description & Map Location</Link></h4>
                                </TableCell>
                                <TableCell>
                                    {checkAuth() === true
                                    ? <DeleteIcon onClick={() => {props.removeIndex(index)}} />
                                    : "Please login to delete"}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Businesses