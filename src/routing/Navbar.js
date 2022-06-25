import React from "react";
import { Button } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom'

export default function Navbar() {

    const navigate = useNavigate()

    return(<>
    
        <Link to={'/'}>
            <Button>Home</Button>
        </Link>
        <Link to={"/categories"}>
            <Button>Categories</Button>
        </Link>
        <Link to={'/search'}>
            <Button>Search</Button>
        </Link>
        <Link to={'/jokes'}>
            <Button>Jokes</Button>
        </Link>
    </>)


}