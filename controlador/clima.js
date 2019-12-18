const axios = require('axios');

const getClima = async(vec) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${vec.lat}&lon=${vec.lon}&appid=58a2e1bcf018f5460690f89caa650b9b&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}