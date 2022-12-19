import React, {useState} from "react";

const Contapp =()=>{
    let [contador, setContador] =useState(0);
const Incrementarapp=()=>{
    setContador(contador+1);
}

const Decrementarapp=()=>{
    setContador(contador-1);
}
    return(
        <div className="marco_bot">
            <button onClick={Incrementarapp}>
            Sumar clicks
            </button>
            <button onClick={Decrementarapp}>
            restar clicks
            </button>
            <h1>Clicks:{contador}</h1>
        </div>
    );
}

export default Contapp;

// objeto.addEventListener('click', ()=>{

// })