const form = document.getElementById('form'); /*Pegou o formulario para iniciar */

form.addEventListener('submit', function(event){ //envia os dados
    event.preventDefault() //impede o carregamento da pagina ao enviar valores

    const weight = document.getElementById('weight').value //pegou o valor do peso
    const height = document.getElementById('height').value //pegou o valor da altura

    const imc = (weight / (height*height)).toFixed(2) // formula do imc com 2 casas decimais

    const value = document.getElementById('value')
    let description = '' //descriçao

    value.classList.add('attention') //Coloca o resultado em vermelho

    document.getElementById('infos').classList.remove('hidden'); // tira todo o conteudo da classe hidden


    if(imc < 18.5){
        description = 'Cuidado, você está abaixo do peso'
    } else if (imc >=18 && imc <=25){
        description = 'Você está no peso ideal'
    value.classList.remove('attention')     //remove o vermelho
    value.classList.add('normal')           //adiciona o verde

    } else if (imc >=25 && imc <=30){
        description = 'Cuidado, você está com sobrepeso'
    } else if (imc >30 && imc <=35){
        description = 'Cuidado, você está com obesidade moderada'
    } else if (imc >35 && imc <=40){
        description = 'Cuidado, você está com obesidade severa'
    } else{
        description = 'Cuidado, você está com obesidade mórbida'

    }


    value.textContent = imc.replace('.', ",")
    document.getElementById('description').textContent = description // Para aplicar na descrição  e mostrar no resultado




});