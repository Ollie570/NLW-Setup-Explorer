const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
//Salvando os dados:
form.addEventListener("change", save)

function add() {
    //Deixando a mudança de dias dinamica: 
    const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
    const dayExists = nlwSetup.dayExists(today)

    if(dayExists) {
        alert("Dia já foi adicionado 🔴")
        return
    }

    alert('Adicionado com sucesso ✔')
    nlwSetup.addDay(today)
}

//Função de salvar os dados:
function save() {
    localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
