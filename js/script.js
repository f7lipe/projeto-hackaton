API_KEY = "97504608282f2348ec34646b540942c5"

function obterLocalizacao(){
    navigator.geolocation.getCurrentPosition(buscarPrevisao, tratarErro)
}

function buscarPrevisao(localizacao, cidade = ''){
    let api_ref = ''
    if (cidade !== ''){
        api_ref = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}r&appid=97504608282f2348ec34646b540942c5`
    } else {
        const latitude = localizacao.coords.latitude
        const longitude = localizacao.coords.longitude
        api_ref = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`
    }
    const promessa =  axios.get(api_ref)
        promessa.then(mostrarPrevisao)
        promessa.catch(console.log('erro'))

}
 
 function mostrarPrevisao(previsao){
     console.log(previsao.data)
 }
 
 function tratarErro(error){
     switch(error.code) {
         case error.PERMISSION_DENIED:
           // Decidir o que fazer 
           break;
         case error.POSITION_UNAVAILABLE:
 
           break;
         case error.TIMEOUT:
            // Decidir o que fazer 
           break;
         case error.UNKNOWN_ERROR:
            // Decidir o que fazer 
           break;
       }
 }
 
 obterLocalizacao()


function mostraTemperaturasDaSemana(){
    const tempoHoje = document.querySelector("main");

    tempoHoje.innerHTML = "";
    tempoHoje.innerHTML += `
        <div class="tempo-local-hoje">
            <div class="conteudo">
                <div class="localizacao">
                    Stockholm, SE
                </div>

                <div class="temperatura">
                    23º
                </div>

                <div class="icone-clima>
                    ☀️
                </div>

                <div class="clima">
                    Ceu Limpo
                </div>

                <div class="data-hora">
                    Sexta 19:00
                </div>



                <div></div>
            </div>
        </div>
    `;
}

mostraTemperaturasDaSemana();