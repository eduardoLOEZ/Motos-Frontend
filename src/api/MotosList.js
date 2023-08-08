import axios from "axios";

const URL_MOTOS = "https://backend-motos.onrender.com/api/motos";

export const fetchMotos = async()=>{
    try {
        const response = await axios.get(URL_MOTOS);
        console.log(response.data.motos)
        return response.data.motos;
        
    } catch (error) {
        console.log("Error al obtener las motos", error)
        return [];
        
    }
}