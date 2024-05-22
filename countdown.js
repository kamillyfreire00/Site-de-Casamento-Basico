// Função para calcular e exibir a contagem regressiva
function atualizarContagemRegressiva() {
    // Pegue a data e hora atual
    var dataAtual = new Date().getTime();
    
    // Calcule a diferença entre a data final e a data atual
    var diferenca = dataFinal - dataAtual;
    
    // Calcule os dias, horas, minutos e segundos restantes
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    
    // Exiba a contagem regressiva no elemento com o id "countdown"
    var countdownElement = document.getElementById("countdown");
    countdownElement.innerHTML = dias + "d " + horas + "h " + minutos + "m " + segundos + "s ";
    
    // Se a contagem regressiva terminar, exiba uma mensagem
    if (diferenca < 0) {
      clearInterval(x);
      countdownElement.innerHTML = "EXPIRADO";
    }
  }
  
  // Defina a data final da contagem regressiva
  var dataFinal = new Date('2024-07-20T23:59:59').getTime();
  
  // Atualize a contagem regressiva a cada segundo
  var x = setInterval(atualizarContagemRegressiva, 1000);
  