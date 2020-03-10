const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completado = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const argv = require('yargs')
        .command('crear', 'Hace una descripcion de la tarea por hacer', {
            descripcion
        })
        .command('actualizar', 'Actualiza la tarea por hacer', {
            actualizar: {
                descripcion,
                completado
            }
        })
        .command('borrar', 'Borra una tarea por hacer', {
            borrar: {
                descripcion
            }
        })
        .help()
        .argv

module.exports = {
    argv
}