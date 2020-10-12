import React from "react"
import Search from "./search"
import Icons from "./icons"
import SearchBar from "./SearchBar"
import Categorias from "../Categoria/Categoria"

export default function Menu() {
    return (
        <div>
            <SearchBar />
            <Search />
            <Icons />
            <Categorias />
        </div>
    )
}

