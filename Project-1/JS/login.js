console.log('conectado')
const usuarios = [{ id: 1, usuario: 'usuario1', clave: '1234', intentos: 0 },
{ id: 2, usuario: 'usuario2', clave: '5678', intentos: 0 },
{ id: 3, usuario: 'usuario3', clave: '9101', intentos: 0 },
{ id: 4, usuario: 'usuario4', clave: '1121', intentos: 0 },
{ id: 5, usuario: 'usuario5', clave: '3141', intentos: 0 }];

function setUsuarios() {
    localStorage.setItem("usuariosLogin", JSON.stringify(usuarios));
}


function getUsuarios() {
    return JSON.parse(localStorage.getItem("usuariosLogin")) || [];
}


// function intentoFallido(usuario) {
//     const intentosFallidos = JSON.parse(localStorage.getItem('intentosFallidos'))||0;
//     console.log(intentosFallidos)
//     //usuariosStorage= JSON.parse(localStorage.getItem('usuariosS'))
//     intentosFallidos[usuario] = (intentosFallidos[usuario] || 0) + 1
//     localStorage.setItem('intentosFallidos', JSON.stringify(intentosFallidos))
// }

function ingresar() {
    const ingresoUsuarios = document.getElementById('usuario').value.toLocaleUpperCase()
    const contraseñas = document.getElementById('clave').value
    const usuarioLogueado = usuarios.find(usuario => usuario.usuario.toLocaleUpperCase() == ingresoUsuarios && usuario.clave == contraseñas)
    if (usuarioLogueado) {
        setUsuarios()
        window.open('views/ingresook.html')
    } else {
        const usuarioError = usuarios.find(usuario => usuario.usuario.toLocaleUpperCase() == ingresoUsuarios)
        if (usuarioError.intentos < 3) {
            usuarioError.intentos += 1
            setUsuarios()
            //intentoFallido()
            bloquearCuenta()
        } else {
            alert('CUENTA BLOQUEADA')
        }
    }
}




function bloquearCuenta() {
    const ingresoUsuarios = document.getElementById('usuario').value.toLocaleUpperCase()
    const erroresAcumuladosXUsuario = usuarios.find(usuario => usuario.usuario.toLocaleUpperCase() == ingresoUsuarios)

    if (erroresAcumuladosXUsuario.intentos == 3) {
        alert('CUENTA BLOQUEADA')
        console.log('cuenta bloqueada');
    } else {
        alert('Error de credenciales')
    }
}

//Contar intentos

// let contador=0
// function setContador(contador) {
//     localStorage.setItem('contador', contador)
// }

// function getStorage() {
//     return localStorage.getItem('contador') || 0
//  }


// function contarIntentos() {
//     let contadorStorage =getStorage()
//     contadorStorage++
//     setContador(contadorStorage)
//     console.log(`${contadorStorage}`)
// }

//bloquear el acceso
// function bloquearCuenta(){
//     let contadorStorage =getStorage()
//     console.log(`valor inicial storage ${contadorStorage}`);
//     if(contadorStorage==3){
//         console.log('cuenta bloqueada');
//     }else{
//         contarIntentos()
//     }

// }