let i = 0;
let intervalo = setInterval(() => {
    console.log('Hola');
    if( i === 3) {
        clearInterval( intervalo );
    }
    i++;
}, 1000);

setImmediate(() => {
    console.log('-> Hola.');
}, 1000);