import React, {useState, useEffect} from 'react';
import Axios from "axios";
import "./ListaOrdenes.css";
import Orden from "./Orden";
import ListaKey from "./ListaKey";
import Loader from "../Loader/Loader";



export default function ListaOrdenes(){
    const [ordenes, setOrdenes] = useState({res:null, onLoad:false});
    const [keys, setKeys]= useState({res:null, onLoad:false});
    const [sticky, setSticky] = useState('contenedor-keys-lista-ordenes')
    const [selection, setSelection]= useState('En proceso');

    useEffect(async() => {
        const response = await Axios.get('http://localhost:3001/ordenes')
        setOrdenes({res:response.data, onLoad:true});
        const k = Object.keys(response.data[0])
        setKeys({res:k, onLoad:true});
        const handleScroll =()=>{
            const show = window.scrollY > 120;
            if(show){
                setSticky({data:'contenedor-keys-lista-ordenes-sticky', sticky:true})
            } else {
                setSticky({data:'contenedor-keys-lista-ordenes', sticky:false})
            }
        }
        document.addEventListener('scroll', handleScroll)
        return()=>{
            document.removeEventListener('scroll', handleScroll)
        }
    }, []);
    function handleChange(e){
        setSelection(e.target.value)
    }
    function  handleSelect(e){
        Axios.get(`http://localhost:3001/ordenes?estado=${selection}`).then(r=>{
            setOrdenes({res:r.data, onLoad:true})
        })
        e.preventDefault()
    }
    return (
        <div className="contenedor-lista-ordenes" >
        <div>
            <form onSubmit={handleSelect}>
            <label htmlFor="filtrar">Selección por Estado:</label>
            <select onChange={handleChange}>
            <option value="En proceso">En proceso</option>
            <option value="Rechazada">Rechazada</option>
            <option value="Completada">Completada</option>
            </select>
            <input type="submit" value="Filtrar" />
            </form>
        </div>
        <div  className={sticky.data}style={{display:'flex'}}>
        {keys.onLoad?
        keys.res.map((key, i)=>{
            return <ListaKey key={i} id={key}/>
        }):<Loader/>}
        </div>
        <div  className={sticky.sticky?"lista-ordenes-contenedor-s":"lista-ordenes-contenedor"}>
        {ordenes.onLoad && keys.onLoad?
        ordenes.res.map((orden, i)=>{
            return (  
            <Orden 
            orden={orden}
            key={i}
            keys={keys.res}
            />
        )}):<Loader/>}
        </div>
        </div>
    )
}