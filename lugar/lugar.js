const axios = require('axios');
const getLugar = async (dir) => {
    const encodedurl = encodeURI(dir);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedurl}`,
        timeout: 1000,
        headers: {'x-rapidapi-key': '9761cd787amsh932e519aa69a5eep1e2653jsn7ee44f3e8447'}
    });
    
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error('No hay resultados');
    }

    const data = resp.data.Results[0]
    const direccion = data.name
    const lat = data.lat
    const lng = data.lon
    
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {getLugar}