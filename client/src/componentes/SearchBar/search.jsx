import React from "react";
import {
    Button,
    Form,
    FormControl,
} from "react-bootstrap";
import "./SearchBar.css";
import {Link} from "react-router-dom";


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
    <Link to="/search">
    <Button onClick={handleClick} variant="outline-info">
    <i className="fas fa-search"></i>
    </Button>
    </Link>
    </Form>
    );
}