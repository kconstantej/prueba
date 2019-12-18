const axios = require('axios');

const getCIudadLatLon = async (nombre) =>{

    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${nombre}`,
        headers:{'X-RapidAPI-Key' : 'b30ec602c4msh6558caa0a65c93dp11ad49jsn073a3495cdfc'}
    });

    const resp = await instance.get();
    
    if(resp.data.Results.length === 0){
        throw new Error(`No existe resultados para ${nombre}`)
    }

    const data=resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {name,lat,lon};
    // intance.get()
    // .then(resp => {
    //     console.log(resp.data.Results[0]);
    // }).catch(err => {
    //     console.log('ERROR: ',err)
    // });
}

module.exports = {
    getCIudadLatLon
};
