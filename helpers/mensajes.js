require('colors');

const mostrarMenu = () => {


    return new Promise( ( resolve ) => {

        console.clear();
        console.log('========================='.cyan);
        console.log('  Seleccione una opcion'.cyan);
        console.log('=========================\n'.cyan);
    
        console.log(`${ '1.'.cyan } Crear tareas`);
        console.log(`${ '2.'.cyan } Litar tareas`);
        console.log(`${ '3.'.cyan } Listar tareas completadas`);
        console.log(`${ '4.'.cyan } Listar tareas pendientes`);
        console.log(`${ '5.'.cyan } Completar tarea(s)`);
        console.log(`${ '6.'.cyan } Borrar tarea(s)`);
        console.log(`${ '0.'.cyan } Salir\n`);
    
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
    
        readLine.question( 'Seleccione una opción: ', ( opt) => {
            readLine.close();
            resolve( opt );
        });

    })
  
}





const pausa = () => {

    return new Promise( ( resolve ) => {
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
    
        readLine.question( `Presione ${'ENTER'.cyan} para continuar: \n`, ( opt) => {
            resolve();
            readLine.close();
        });
    })
  
}


module.exports= {
    mostrarMenu,
    pausa
}