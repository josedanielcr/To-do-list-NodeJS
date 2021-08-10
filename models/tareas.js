const Tarea = require('./tarea');
require('colors');

class Tareas {

    _listado = {};

    constructor(){
        this._listado = {};
    }


    get listadoArr(){
        
        const listado = [];
        Object.keys( this._listado ).forEach( key => {
            const tarea = this._listado[ key ];
            listado.push( tarea );
        })
        return listado;
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea( desc );
        this._listado[ tarea.id ] = tarea;
    }

    cargarTareasFromArray( tareas = [] ) {

        tareas.forEach( tarea => {
            this._listado[tarea.id] = tarea;
        })
    }

    listadoTareas() {

        console.log();
        this.listadoArr.forEach( (tarea, i) => {
            const completado = ( tarea.completadoEn )
                               ? 'Completado'.green
                               : 'Pendiente'.red;
            console.log(`${ i+1 }. `.cyan + `${ tarea.desc } :: ${ completado }`);
        })   
    }

    borrarTarea( id = ''){
        if( this._listado[id] ){
            delete this._listado[id];
        }
    }

    listarPendientesCompletadas( completadas = true ){
        console.log();
        let cont = 0;
        this.listadoArr.forEach( ( tarea) => {

            const completado = ( tarea.completadoEn )
                                ? 'Completado'.green
                                : 'Pendiente'.red;
            if( completadas ){
                if( tarea.completadoEn ){
                    cont++;
                    console.log(`${ cont }. `.cyan + `${ tarea.desc } :: ${ tarea.completadoEn.cyan }`);
                }
            } else{
                if( !tarea.completadoEn ){
                    cont++;
                    console.log(`${ cont }. `.cyan + `${ tarea.desc } :: ${ completado }`);
                }
            }
        })
    }

    toggleCompletadas( ids = [] ){

        ids.forEach( id => {
            
            const tarea = this._listado[ id ];
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString();
            }
        });


        this.listadoArr.forEach( tarea => {

            if( !ids.includes( tarea.id ) ){
                this._listado[ tarea.id ].completadoEn = null;;
            }
        })
    }

}

module.exports = Tareas;