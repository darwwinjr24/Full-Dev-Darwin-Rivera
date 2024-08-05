console.log('conectado')
const usuarios = [{ id: 1, usuario: 'usuario1', clave: '1234' },
{ id: 2, usuario: 'usuario2', clave: '5678' },
{ id: 3, usuario: 'usuario3', clave: '9101' },
{ id: 4, usuario: 'usuario4', clave: '1121' },
{ id: 5, usuario: 'usuario5', clave: '3141' }];


const usuariosSeparados = usuarios.map(usuario => ({
    id: usuario.id,
    usuario: usuario.usuario,
    clave: usuario.clave
}));
setUsuarios()
console.log(usuariosSeparados);


function setUsuarios() {
    localStorage.setItem("usuariosS", JSON.stringify(usuariosSeparados));
}


function getusuarios() {
    return localStorage.getItem('usuariosS') || {};
}


const intentosFallidos = JSON.parse(localStorage.getItem('intentosFallidos'))||0;
function intentoFallido(usuario) {
    //usuariosStorage= JSON.parse(localStorage.getItem('usuariosS'))
    intentosFallidos[usuario] = (intentosFallidos[usuario] || 0) + 1
    localStorage.setItem('intentosFallidos', JSON.stringify(intentosFallidos))
}


function ingresar() {
    const ingresoUsuarios = document.getElementById('usuario').value.toLocaleUpperCase()
    const contraseñas = document.getElementById('clave').value
    let usuarioLogueado = usuariosSeparados.some(usuario => usuario.usuario.toLocaleUpperCase() == ingresoUsuarios && usuario.clave == contraseñas)
    if (usuarioLogueado) {
        setUsuarios()
        window.open('views/ingresook.html')
    } else {
    intentoFallido()
        bloquearCuenta()
    }
}


//Contar intentos
function getStorage() {
    return localStorage.getItem('contador') || 0
}


function bloquearCuenta() {
    let contadorEnMemoria = getStorage()
    if (contadorEnMemoria == 3) {
        alert('CUENTA BLOQUEADA')
        console.log('cuenta bloqueada');
    } else {
        alert('Error de credenciales')
        contarIntentos()
    }
}


let contador = 0
function contarIntentos() {
    //let contadorStorage =getStorage()
    contador++
    setContador(contador)
    console.log(`${contador}`)
}


function setContador(contador) {
    localStorage.setItem('contador', contador)
}
