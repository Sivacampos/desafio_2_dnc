/*function getAddressByCep() {
   const cep = document.getElementById('cep').value;
   fetch(`https://viacep.com.br/ws/${cep}/json/`)
   .then(response => {
    return response.json();
    })
    .then(response => {
        console.log(response)
    })
    .catch((error) => {
        console.log(erro);
    });
}*/

async function getAddressByCep() {
    const cep = document.getElementById('cep').value;
    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        console.log(data);
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('uf').value = data.uf;
        }
        catch (error) {
            alert(error.menssage);
        }
}

async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const log = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        /*document.getElementById('resposta').value = ${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]};*/

        }
        catch (error) {
            alert(error.menssage);
        }
}