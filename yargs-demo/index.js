const _ = require('lodash');
const argv = require('yargs').argv;
const util = require('util');
const exec = util.promisify(require('child_process').exec);

let x = { nombre : "Jaime" }
let y = { apodo : "Jaimito" }
let z = [ 
    { nombre : "Jaime", apellido: 'Herrera' , edad: 26},
    { nombre : "Sergio", apellido: 'Mata' , edad: 32},
]

// fusiona 2 objectos
// let mix = _.assign(x,y)
// console.log({mix})

// ejecuta la funcion varias veces
// _.times(3,()=>{console.log("Hola")})

//busqueda de objetos dentro de un arreglo de objetos
// let res =_.find(z,{nombre:'Jaime'})
// console.log({res})
// let res2 =_.find(z,{apellido:'Herrera'})
// console.log({res2})

//metodo de entrada de nodejs 

// let command = process.argv;
// console.log(command)

//enviar valores a nodey aumentar su coleccion
// node index.js value
// los valores se ven desde la posicion 2 

// let command = process.argv[2];

// if (command ==='lodash'){

// let x = { nombre : "Jaime" }
// let y = { apodo : "Jaimito" }
// let z = [ 
//     { nombre : "Jaime", apellido: 'Herrera' , edad: 26},
//     { nombre : "Sergio", apellido: 'Mata' , edad: 32},
// ]

// }else{
//     console.log("invalid command")
// }



const runCommands = async (command) =>{

    switch (command){
    case 'ls':
        const { stdout, stderr } = await exec('ls');
        console.log('stdout:', stdout);
        console.log('stderr:', stderr);
        break;
    default:
        console.log("command not allowed")
    }
}

const main = ()=>{
    //console.log(argv)

    if (argv.command === 'ls'){
        runCommands('ls').then().catch();
    }else {
        console.log("command permited are ls")
    }
}

main();