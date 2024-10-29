// fantasia, aventura, drama

// Harry Potter e o Prisioneiro de Azkaban, 12, fantasia, aventura
// Moana, 10, fantasia, aventura
// O Rei Leao(2019), 10, fantasia, aventura
// Velozes e Furiosos 7, 12, aventura
// Jumanji, 12, aventura
// Homem Aranha: No Aranha Verso, 12, fantasia
// Ladroes de Bicicleta, 14, fantasia


function setup() {
  createCanvas (400, 400);
campoIdade = createInput("15");
}

function draw() {
  background(220);
  let idade = 10;
  let recomendacao = geraRecomendacao(idade);
  text(recomendacao, width / 2, height / 2);
} 

function geraRecomendacao(idade) {
  if(idade>=10) {
    return 'O Rei Leao(2019)';
  } else {
    return 'Harry Potter e o Prizioneiro de Azkaban';
  }
}
    
function draw() {
    background(220);
    let idade = 15;
    let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade) {
  if (idade >= 10) {
    if (idade >= 14) {Jumanji
      return "Moana";
    } else {
      return "O Rei Leao(2019)";
    }
  } else {
    return "Harry Potter e o Prizioneiro de Azkaban";
  }
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if(idade >= 10) {
        if(idade >= 14) {
            return "Moana";
        } else {
            if(gostaDeFantasia){
                return "Harry Potter e o Prizioneiro de Azkaban";
            } else {
                return "Velozes e Furiosos 7";
            }
        }
    } else {
        if(gostaDeFantasia) {
            return "Rei Leao(2019)";
        } else {
            return "Jumanji";
        }
    }
}

function setup() {
    createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
    createSpan("Sua idade:");
    campoIdade = createInput("5");
    campoFantasia = createCheckbox(" Gosta de fantasia?");
}

function draw() {
    background("white");
    let idade = campoIdade.value();
    let gostaDeFantasia = campoFantasia.checked();
    let recomendacao = geraRecomendacao(idade, gostaDeFantasia);

    fill(color(76, 0, 115));
    textAlign(CENTER, CENTER);
    textSize(38);
    text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia) {
    if (idade >= 10) {
        if (idade >= 14) {
            return "Moana";
        } else {
            if (gostaDeFantasia) {
                return "Harry Potter e o Prizioneiro de Azkaban";
            } else {
                return "Velozes e Furiosos 7";
            }
        }
    } else {
        if (gostaDeFantasia) {
            return "Rei Leao(2019)";
        } else {
            return "Jumanji";
        }
    }
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "Moana";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Homem aranha: no aranhaverso";          
        } else{
         return "Ladrões de bicicleta";
        }
      } else {
        if (gostaDeFantasia) {
          return "Harry Potter e o Prisioneiro de Azkaban";
        } else {
          return "Depois da chuva";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "A viagem de chihiro";
    } else {
      return "O feitiço do tempo";
    }
  }
}
