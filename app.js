
const { argv } = require('./config/yargs.js')
const { crearTablaMultiplicar, listarTabla } = require('./multiplicar/multiplicar.js')

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
        break;
    case 'crear':
        crearTablaMultiplicar(base, limite)
            .then( arc => console.log(`Archivo creado: ${ arc }`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido')
        break;
}

