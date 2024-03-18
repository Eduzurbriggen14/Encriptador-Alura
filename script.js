const textAreaEntrada = document.querySelector('.textarea');
const textAreaSalida = document.querySelector('.mensaje');



function encriptar(texto){
    const reglasEncriptacion = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

    let textoEncriptado = "";

    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i].toLowerCase();

        if (letra in reglasEncriptacion){
            textoEncriptado += reglasEncriptacion[letra];
        }
        else{
            textoEncriptado += letra
        }
    }
    return textoEncriptado;
}

function encriptarTexto() {
    const texto = textAreaEntrada.value.toLowerCase();
    const textoEncriptado = encriptar(texto);
    textAreaSalida.value = textoEncriptado
    textAreaEntrada.value = '';
}

