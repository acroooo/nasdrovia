import React from 'react'

export default function ListaKey({id}){
    return (
    <div 
    className={`lista-orden-indiviual ${id}-individual key-individual`}>
    {id}
    </div>
    )}