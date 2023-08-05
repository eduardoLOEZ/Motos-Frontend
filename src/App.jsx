import React, { useState, useEffect } from 'react';
import MotosList from './components/MotosList';
import Motodetails from './components/Motodetails';
import { fetchMotos } from './api/MotosList';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "./styles/motos.css"

const App = () => {
  const [motos, setMotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  useEffect(() => {
    const obtenerMotos = async () => {
      try {
        const motosData = await fetchMotos();
        setMotos(motosData);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener las motos:', error);
        setLoading(false);
      }
    };
    obtenerMotos();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultados = motos.filter((elemento) => {
      return (
        elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        elemento.modelo.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
    });
    setResultadosBusqueda(resultados);
  };

  // When the search input is empty, show all motorcycles
  useEffect(() => {
    if (busqueda === "") {
      setResultadosBusqueda(motos);
    }
  }, [busqueda, motos]);

  return (
    <Router>
      <div>
        <Routes>
          {/* Ruta para la lista de motos */}
          <Route path="/" element={
            <>
              <h1>Lista de motos</h1>
              <input
                className="form-control inputBuscar"
                value={busqueda}
                placeholder="Búsqueda por Nombre o Año"
                onChange={handleChange}
              />
              <button className="btn btn-success">
                <FontAwesomeIcon icon={faSearch} />
              </button>
              {loading ? <p>Cargando motos...</p> : 
              (resultadosBusqueda.length > 0 ? <MotosList motos={resultadosBusqueda} /> : <p>No tenemos esa moto.</p>)}
            </>
          } />
          {/* Ruta para la página de detalles de la moto */}
          <Route path="/moto/:id" element={<Motodetails motos={motos} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
