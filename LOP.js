function verificar() {
    

    var ano = 2024
    var txt0 = window.document.getElementById("res")

    var idade = window.document.getElementById("numero")

    var img = window.document.getElementById("img")

    var idade = Number(idade.value)
    var s = ano - idade

    txt0.innerHTML = `Você tem ${s} ano `

    if (s == 0 || s > ano) {

        window.alert("Erro verifique")


    } else {
        var fsex = window.document.getElementsByName("bola")
        var genero = ""

    } if (fsex[0].checked) {
        genero = "Homem"

        if (s > 0 && s <= 3) {
            img.src = "fotos/08.jpg"

        } else if (s > 3 && s < 18) {
            img.src = "fotos/05.jpg"

        } else if (s > 18 && s < 50) {
            img.src = "fotos/03.jpg"

        } else {
            s > 50
            img.src = "fotos/01.jpg"

        }

    } else if (fsex[1].checked) {
        genero = "Mulher"


        if (s > 0 && s <= 3) {
            img.src = "fotos/07.jpg"

        } else if (s > 3 && s < 18) {
            img.src = "fotos/06.jpg"

        } else if (s > 18 && s < 50) {
            img.src = "fotos/04.jpg"

        } else {
            s > 50
            img.src = "fotos/02.jpg"

        }
    }

    txt0.innerHTML += `seu gênero e ${genero}`

}