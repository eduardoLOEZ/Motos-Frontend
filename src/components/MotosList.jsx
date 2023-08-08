import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/motos.css"

function MotosList({motos}) {
  return (
    <div>
       
        {motos.map((moto)=>(
            <Link key={moto._id} to={`/moto/${moto._id}`} className= "moto-link">
            <div className='moto-card'>
                <h2>{moto.nombre}</h2>
                <p>Descripción: {moto.descripcion}</p>
                <p>Precio: ${moto.precio}</p>
            </div>
          </Link>
        ))}
    </div>
  )
}

export default MotosList
