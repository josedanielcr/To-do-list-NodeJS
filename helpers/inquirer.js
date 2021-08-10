const inquirer = require('inquirer');
require('colors');

const menuOpt = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?'.cyan,
        choices: [
            {
                value: '1',
                name: `${'1.'.cyan} Crear tarea`
            },
            {
                value: '2',
                name: `${'2.'.cyan} Listar tareas`
            },
            {
                value: '3',
                name: `${'3.'.cyan} Listar tareas completadas`
            },
            {
                value: '4',
                name: `${'4.'.cyan} Listar tareas pendientes`
            },
            {
                value: '5',
                name: `${'5.'.cyan} Completar tarea(s)`
            },
            {
                value: '6',
                name: `${'6.'.cyan} Borrar tarea(s)`
            },
            {
                value: '0',
                name: `${'7.'.cyan} Salir`
            },
        ]
    }
];


const inquirerMenu = async() => {

    console.clear();
    console.log('========================='.cyan);
    console.log('  Seleccione una opcion  ');
    console.log('=========================\n'.cyan);

    const { opcion } = await inquirer.prompt( menuOpt );
    return opcion;
}



const pausa = async() => {

    const pauseOption = [
        {
            name: 'pausa',
            type: 'input',
            message: `Presione ${ 'ENTER'.cyan } para continuar`
        }
    ]

    console.log('\n');
    await inquirer.prompt( pauseOption );
}


const leerInput = async( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if ( value.length === 0 ){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt( question );
    return desc;
}

const listadoTareasBorrar = async( tareas = [])  => {

    const choices = tareas.map( ( tarea ,i ) => {
        return {
            value: tarea.id,
            name: `${ i+1 }. ${ tarea.desc }`
        }
    })

    choices.unshift({
        value: 0,
        name: '0. Cancelar'
    })
    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const { id } = await inquirer.prompt( preguntas );
    return id;
}

const confirmar = async( message ) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]
    const { ok } = await inquirer.prompt( question );
    return ok;
}




const mostrarListadoChecklist = async( tareas = [])  => {

    const choices = tareas.map( ( tarea ,i ) => {
        return {
            value: tarea.id,
            name: `${ i+1 }. ${ tarea.desc }`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    })

    const pregunta = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'selecciones',
            choices
        }
    ]
    const { ids } = await inquirer.prompt( pregunta );
    return ids;
}


module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar,
    mostrarListadoChecklist
}