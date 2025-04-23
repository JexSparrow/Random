const botaoSortear = document.getElementById("botao-sortear")
const paragrafo = document.querySelector("#resultado")

function sortear() {

    let min = Math.ceil(document.getElementById("min").value)

    let max = Math.floor(document.getElementById("max").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min)

    const img = document.getElementById("logo")

    console.log(img)



    if (max > min) {

        paragrafo.innerHTML = result

        paragrafo.style.visibility = "visible"

        img.src = "./assets/dadogif-unscreen.gif"
        //  img.src = "./assets/dadogif.webp" dado gif

        img.style.height = "374px"
        img.style.width = "100%"




    }

    else {
        alert("O Valor Mínimo tem que ser \n MENOR \n que o Valor Máximo!")
    }








}

botaoSortear.addEventListener("click", sortear)




