const fs = require('fs');

/**
 * Tambien puedo exportar la funcion de esta forma
 * modeule.exports.crearTablaMultiplicar() ...
 * 
 */
let crearTablaMultiplicar = (base, limite) => {

    return new Promise((resolve, reject) => {
        tablaMultiplicar(base, limite)
            .then( tabla => {
                    const data = new Uint8Array(Buffer.from(tabla));
                    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
                        if (err) 
                            reject(err);
                        else
                            resolve(`tablas/tabla-${base}.txt`);
                    });
                    
                })
            .catch(e => console.log(e))
    });
        
}

let listarTabla = (base, limite) => {
    tablaMultiplicar(base, limite)
        .then( tabla => console.log(tabla))
        .catch(e => console.log(e))
}

let tablaMultiplicar = (base, limite) => {
    
    return new Promise((resolve, reject) => {
        let tabla = '';

        if (!Number(base)) {
            reject(`El valor ingresado ${ base } no es un numero`)
            return
        }
        for (let i = 0; i <= limite; i++) {
            
            tabla += `${base} * ${i} = ${base*i}\n`;
            
        }
    
        resolve(tabla);
    });
    
}


module.exports = {
    crearTablaMultiplicar,
    listarTabla
}
