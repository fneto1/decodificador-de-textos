function descriptografar(){

    let entrada = document.getElementById("input-texto").value

    let ai = entrada.replace(/ai/g, "a")

    let enter = ai.replace(/enter/g, "e")

    let imes = enter.replace(/imes/g, "i")

    let ober = imes.replace(/ober/g, "o")

    let ufat = ober.replace(/ufat/g, "u")

    let descriptografado = ufat

    document.getElementById('texto-criptografado').value = descriptografado;

    document.getElementById("espaco-aviso").style.display = "none";
    document.getElementById("espaco-resultado").style.display = "block";

}

function copiar(){
    let copiar = document.getElementById("texto-criptografado")

    //copiar.select()

    navigator.clipboard.writeText(copiar.value)

}