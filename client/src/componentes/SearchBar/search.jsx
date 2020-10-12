import React, { useState } from "react";
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
}