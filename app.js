const {getCIudadLatLon} = require('./controlador/ubicacion');
const clima = require('./controlador/clima');

const express = require('express');

const app = express();

const hbs = require('hbs');

const port =process.env.PORT || 3000;



var quito;
var guayaquil;
var madrid;
var paris;


const getInfo= async(ciudad) =>{
    try{
        const vec=await getCIudadLatLon(ciudad);
        const vec2=await clima.getClima(vec);
        return vec2;
    }catch(error){
        return error
    }
    
};

const getQuito= async (ciudad)=>{
    try{
        quito=await getInfo(ciudad);
    }catch{
        console.log('Error');
    }
};
const getGuayaquil= async (ciudad)=>{
    try{
        guayaquil=await getInfo(ciudad);
    }catch{
        console.log('Error');
    }
};

const getMadrid= async (ciudad)=>{
    try{
        madrid=await getInfo(ciudad);
    }catch{
        console.log('Error');
    }
};

const getParis= async (ciudad)=>{
    try{
        paris=await getInfo(ciudad);
    }catch{
        console.log('Error');
    }
};

getInfo('Quito')
.then(console.log);
getQuito('Quito');
getGuayaquil('Guayaquil');
getMadrid('Madrid');
getParis('Paris')
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
        anio: new Date().getFullYear(),
        quito: quito,
        guayaquil: guayaquil,
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
            quito: quito,
            guayaquil: guayaquil,

        });
    });
    
 
app.get('/about',(req, res)=>{
    res.render('about',{
        madrid : madrid,
        paris : paris
    });
});



app.listen(port,()=>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});


