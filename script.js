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
        alert(error.message);
    }
}

/*async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const log = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=temperature_2m`);
        const data = await response.json();
        var datas = data.hourly.time.join('\r\n');
        console.log(data);
        document.getElementById('resposta').value = datas;

        }
        catch (error) {
            alert(error.message);
        }
}*/

async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const log = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);
        document.getElementById('resposta').innerHTML = '';
        document.getElementById('resposta').innerHTML += `<div> ${data.hourly.temperature_2m[0]}°C - ${data.hourly.time[0]}</div>`;

        /*for (
            let index = 0;
            index < data.hourly.temperature_2m.length;
            index++) {
            document.getElementById('resposta').innerHTML += `<div>${data.hourly.time[index]} - ${data.hourly.temperature_2m[index]}</div>`;

        }*/

    }
    catch (error) {
        alert(error.message);
    }
}

/*async function getPrevisao() {
    const lat = document.getElementById('latitude').value;
    const log = document.getElementById('longitude').value;
    try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${log}&hourly=temperature_2m`);
        const data = await response.json();
        console.log(data);

        // Limpa a resposta anterior
        document.getElementById('resposta').innerHTML = '';

        // Acessa apenas o primeiro elemento do array
        const primeiroResultado = data.hourly.temperature_2m[0];

        // Exibe o primeiro resultado
        document.getElementById('resposta').innerHTML = <div>${data.hourly.time[0]}  ${primeiroResultado}</div>;
    } catch (error) {
        alert(error.message);
    }
} */