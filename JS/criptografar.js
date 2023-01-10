function criptografar() {

    let x = document.getElementById("input-texto").value

    let texto = String(x)
    
    let newstr = []

    for(let i=0; i<x.length; i++){

        if(texto[i] == 'a'){

            newstr.push("ai")

        }else if (texto[i] == 'e'){

            newstr.push("enter")

        }else if(texto[i] == 'i'){

            newstr.push("imes")

        }else if(texto[i] == 'o'){

            newstr.push("ober")

        }else if(texto[i] == 'u'){

            newstr.push("ufat")

        } else {
            newstr.push(texto[i])
        }
        
    }

    let resultado = String(newstr).replace(/[,]/g, "")

    document.getElementById('texto-criptografado').value = resultado;

    document.getElementById("espaco-aviso").style.display = "none";
    document.getElementById("espaco-resultado").style.display = "block";

}