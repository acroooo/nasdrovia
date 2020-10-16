import React from "react";
import {
    Button,
    Form,
    FormControl,
} from "react-bootstrap";
import "./SearchBar.css";


export default function SearchBar({handleClick, handleChange}) {

    return (
    <Form inline>
    <FormControl
    type="search"
    placeholder="Buscar..."
    onChange={handleChange}
    className="mr-sm-2"
    />
    <FormControl.Feedback />
    <Button onClick={handleClick} variant="outline-info">
    <i class="fas fa-search"></i>
    </Button>
    </Form>
    );
}






























/*import React, { useState } from "react";
import { Link } from "react-router-dom";
import { searchButton } from "../../Multimedia/Svgs";
import {
    Button,
    Form,
    FormControl
} from "react-bootstrap";

export default function Search() {
    //Hooks

    const [search, setSearch] = useState({ query: "" });
    const [redirect, setRedirect] = useState(false);

    // ----- Funcionalidad ----

    const handleChange = (event) => {
        event.preventDefault();
        setSearch({ ...search, [event.target.nombre]: event.target.value });
    };
    return (
        <Form inline>
            <FormControl
                type="search"
                placeholder="Buscar..."
                onChange={handleChange}
                className="mr-sm-2"
            />
            <FormControl.Feedback />
            <Link to={`/search?query=${search.query}`}>
                <Button onClick={handleChange} variant="outline-info">
                    {searchButton}
                </Button>
            </Link>
        </Form>
    )
}*/