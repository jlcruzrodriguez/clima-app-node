const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7ed4eecc19b9f1d5be9712290a4c4911&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}