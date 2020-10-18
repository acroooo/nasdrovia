import React from 'react'
import "./ListaOrdenes.css";
import anime from "animejs";

export default function Order({orden, keys}){
    function handleMouseEnter(){
        anime({
        targets:`.lista-individual${orden.id}`,
        backgroundColor: '#d6d6ff',
        })
        
    }
    function handleMouseLeave(){
        anime.remove(`.lista-individual${orden.id}`)
        anime({
        targets:`.lista-individual${orden.id}`,
        backgroundColor: '#fff',
        })
    }
    return(
        <div className="contenedor-lista-ordenes-admin">
        {keys.map((key,i)=>{
            return <div key={i} className={`lista-orden-indiviual ${key}-individual lista-individual${orden.id} estado-${orden[key]}`} id={key} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{orden[key]}</div>
        })}
        </div>
    )
}