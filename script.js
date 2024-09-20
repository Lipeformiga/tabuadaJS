const number = document.getElementById("number")
const multiplicator = document.getElementById("multiplicator")
const botao = document.getElementById("botao")
const tabela = document.getElementById("multiplication-operations")
const mensagem = document.getElementById("mensagem")



botao.addEventListener("click", (e) => {

    e.preventDefault()
    tabela.innerHTML = ""


    if ( !number.value || !multiplicator.value){
        const teste = document.createElement("p")
        teste.innerText = "Bota um valor ai paizão"
        tabela.appendChild(teste)
    }else{

        
    for(let i = 1; i <= multiplicator.value; i++){
        const result = number.value * i;

        // const div = `<div class="flex justify-center border border-black py-2 mx-24">
        //                 <p>${number.value} x ${i} = </p>
        //                 <p> ${result} </p>
        //             </div>`
                    
        
        const divPai = document.createElement("div")

        divPai.classList.add("flex", "justify-center", "border", "border-black", "py-2", "mx-24")

        const numberzada = document.createElement("p")

        numberzada.innerText = `${number.value} X ${i} = `

        const mulpiplicadorzada = document.createElement("p")

        mulpiplicadorzada.innerText = result

        divPai.appendChild(numberzada)
        divPai.appendChild(mulpiplicadorzada)

        tabela.appendChild(divPai)
    }
    
    }

    
})