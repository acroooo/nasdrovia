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
    )};