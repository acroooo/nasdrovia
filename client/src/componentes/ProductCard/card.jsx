import React from "react";
import "./card.css"
import { cartButton } from "../../Multimedia/Svgs";
import { motion, AnimatePresence } from "framer-motion";

const card = ({producto}) => {
    const animation ={
        initial:{
        opacity:0,
        x:-135
        },
        animate:{
        opacity:1,
        x:0,
        }, 
        exit:{
        opacity:0,
        x:135,
        }}
    const {initial,animate,exit}= animation;
    const {nombre, precio, imagen, stock}=producto;
    return (
        <AnimatePresence>
        <div class="card2">
            <a class="botoncontainer2">
                <button class="carro">{cartButton}</button>
            </a>
            <div>
            <motion.img className="img2"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{delay:0.8}}
            src="https://distribuidorahideal.com.br/509-tm_thickbox_default/cerv-stella-artois-275ml-c-24.jpg"
            alt="First slide"
            />
                
            </div>
            <motion.div className="decorativa"
            initial={initial}
            animate={animate}
            exit={exit}
            transition={{delay:0.25}}
            ></motion.div>
            <div className="card-body2">
                <div class="boton2">
                    <div class="titulo">
                        <motion.h2
                        initial={initial}
                        animate={animate}
                        exit={exit}
                        transition={{delay:0.6}}
                        >{nombre}</motion.h2>
                    </div>
                </div>
                <h4 className="precio">precio:</h4>
                <h3>${precio}</h3>
                <h5>Stock:{stock}</h5>
            </div>
        </div>
        </AnimatePresence>
    )
}

export default card