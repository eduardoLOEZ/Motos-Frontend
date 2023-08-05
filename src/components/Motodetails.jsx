import React from 'react'
import { useParams } from 'react-router-dom';

function Motodetails({motos}) {
    const {id} = useParams()

    const moto = motos.find((moto) => moto._id === id);

    if (!moto) {
        return <p>No se encontró la moto</p>;
    }


  return (
    <div>
        <img src={moto.imgurl} 
        style={{ width: '400px', height: '300px', objectFit: 'cover' }}/>
        <h1>{moto.nombre}</h1>
        <h2>Modelo: {moto.modelo}</h2>
        <p>Descripción: {moto.descripcion}</p>
        <p>Precio: ${moto.precio}</p>
        
  </div>
  )
}

export default Motodetails
