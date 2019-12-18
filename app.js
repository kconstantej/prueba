const {getCIudadLatLon} = require('./controlador/ubicacion');
const clima = require('./controlador/clima');

const express = require('express');

const app = express();

const hbs = require('hbs');

const port =process.env.PORT || 3000;

var ciudades = [];

const getInfo= async(ciudad) =>{
    try{
        const vec=await getCIudadLatLon(ciudad);
        const vec2=await clima.getClima(vec);
        ciudades.append(vec2);
        return vec2;
    }catch(error){
        return 'Error'
    }
    
};

getInfo('Quito')
.then(console.log);

getInfo('Guayaquil')
.then(console.log);

getInfo('Madrid')
.then(console.log);

getInfo('Paris')
.then(console.log);

console.log(ciudades,'----------')





//helpers
require('./hbs/helpers');

//el dirname me dice donde esta corriendo el server.js 
app.use(express.static(__dirname + '/public'));

//Express HBS engine

//registro de parciales
hbs.registerPartials(__dirname + '/views/parciales');



app.set('view engine','hbs');





app.get('/', function (req, res) {
//     let salida = {
//         nombre : 'Ken',
//         edad: 21,
//         url : req.url
//     }
//   res.send(salida);
    res.render('home',{
        nombre: 'kEn cOnStante',
        anio: new Date().getFullYear()
    });
});

app.get('/home', function (req, res) {
    //     let salida = {
    //         nombre : 'Ken',
    //         edad: 21,
    //         url : req.url
    //     }
    //   res.send(salida);
        res.render('home',{
            nombre: 'kEn cOnStante',
            anio: new Date().getFullYear(),
            quito: getInfo('Quito'),
            guayaquil: getInfo('Guayaquil'),

        });
    });
    
 
app.get('/about',(req, res)=>{
    res.render('about');
});



app.listen(port,()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});


