const argv = require('./config/yargs').argv;
// const axios = require('axios');
const info = require('./info/info');

// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);

info.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);