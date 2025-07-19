    const confirmBox = document.getElementById('confirmBox');
    let maiorDeIdade = false;

    window.onload = () => {
        confirmBox.style.display = 'block';
    }

    document.getElementById('sim').onclick = () => {
        maiorDeIdade = true;
        confirmBox.style.display = 'none';
        alert("Bem-vindo!");
    }

    document.getElementById('nao').onclick = () => {
        confirmBox.style.display = 'none';
        alert("Bem Vindo.");
    }

function gerarCaminhos(base, quantidade, extensoes = ['.jpg',  '.jpeg']) {
  const imagens = [];
  for (let i = 1; i <= quantidade; i++) {
    const extensao = extensoes[Math.floor(Math.random() * extensoes.length)];
    imagens.push(`${base}img${i}${extensao}`);
  }
  return imagens;
}

// Arrays de imagens por categoria
const foodImgs = gerarCaminhos('imagens/food/', 9, ['.jpeg']);
const makeImgs = gerarCaminhos('imagens/make/', 5, ['.jpeg']); 
const afterImgs = gerarCaminhos('imagens/after/', 5, ['.jpeg']);
const finalimg = gerarCaminhos('imagens/final/', 15, ['.jpg', ]);

// Função utilitária para sortear imagem aleatória
function getRandomImage(images) {
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}

// Funções para mudar as imagens no DOM
function mudarFood() {
  document.getElementById('food-img').src = getRandomImage(foodImgs);
}

function mudarMake() {
  document.getElementById('make-img').src = getRandomImage(makeImgs);
}

function mudarAfter() {
  document.getElementById('after-img').src = getRandomImage(afterImgs);
}
function mudarFinal() {
    if (!maiorDeIdade) return;
    document.getElementById('final-img').src = getRandomImage(finalimg);
}

  
function rodarTudo(){
  document.getElementById('food-img').src = getRandomImage(foodImgs);
  document.getElementById('make-img').src = getRandomImage(makeImgs);
  document.getElementById('after-img').src = getRandomImage(afterImgs);
  if (!maiorDeIdade) return;
    document.getElementById('final-img').src = getRandomImage(finalimg);


}

const filmesT = [ 
  "Click - Netflix",
  "A Proposta - Prime Video",
  "Dark Side of the Porn - Aluguel/Compra",
  "Tren Bala - Prime Video",
  "Pânico - Netflix",
  "Orgulho e Preconceito - Globoplay",
  "007 - Cassino Royale - Prime Video",
  "Calígula - Aluguel/Compra",
  "O Âncora - Netflix",
  "Ted - Prime Video",
  "Cisne Negro - Star+",
  "Um Lugar Chamado Notting Hill - Netflix",
  "Zohan - O Agente Bom de Corte - Prime Video",
  "O Iluminado - HBO Max",
  "Private Gold: Millionaire - Aluguel/Compra",
  "Missão: Impossível – Efeito Fallout - Prime Video",
  "Para Todos os Garotos que Já Amei - Netflix",
  "Raw Talent - Aluguel/Compra",
  "Midsommar - Prime Video",
  "Diário de uma Paixão - Netflix",
  "Hereditário - Prime Video",
  "John Wick - Prime Video",
  "Beleza Americana - Star+",
  "Simplesmente Acontece - Netflix",
  "Pirates II: Stagnetti’s Revenge - Aluguel/Compra",
  "La La Land - Prime Video",
  "Ace Ventura: Um Detetive Diferente - Netflix",
  "Velocidade Máxima - Prime Video",
  "A Entidade - Prime Video",
  "O Virgem de 40 Anos - Netflix",
  "The Opening of Misty Beethoven - Aluguel/Compra",
  "O Livro de Eli - Netflix",
  "Todo Mundo em Pânico - Netflix",
  "Uma Mente Brilhante - Prime Video",
  "Se Beber, Não Case - Prime Video",
  "A Lista de Schindler - Netflix",
  "Menina de Ouro - Star+",
  "O Protetor - Prime Video",
  "Como Eu Era Antes de Você - Netflix",
  "Forrest Gump - Netflix",
  "Atividade Paranormal - Prime Video",
  "Sex & Zen - Aluguel/Compra",
  "As Branquelas - Netflix",
  "After Porn Ends - Aluguel/Compra",
  "The Submission of Emma Marx - Aluguel/Compra",
  "Superbad - É Hoje - Netflix",
  "O Babadook - Prime Video",
  "O Exorcista - Prime Video",
  "O Resgate do Soldado Ryan - Prime Video",
  "A Bruxa - Prime Video",
  "Um Amor para Recordar - Netflix",
  "The New Devil in Miss Jones - Aluguel/Compra",
  "Carga Explosiva - Prime Video",
  "Clube da Luta - Star+",
  "Mad Max: Estrada da Fúria - HBO Max",
  "À Espera de um Milagre - Prime Video",
  "PS: Eu Te Amo - Netflix"
];


function filmes() {
  const indiceAleatorio = Math.floor(Math.random() * filmesT.length);
  const nomeSorteado = filmesT[indiceAleatorio];
  document.getElementById("tes").innerText = nomeSorteado;
}

const filmesDrama = [
  "À Espera de um Milagre",
  "Um Sonho de Liberdade",
  "Clube da Luta",
  "O Pianista",
  "A Lista de Schindler",
  "A Vida é Bela",
  "Os Intocáveis (Intouchables)",
  "Forrest Gump",
  "Beleza Americana",
  "Gênio Indomável",
  "Diário de uma Paixão",
  "O Quarto de Jack",
  "Lion: Uma Jornada para Casa",
  "Histórias Cruzadas",
  "Sociedade dos Poetas Mortos",
  "A Teoria de Tudo",
  "O Jogo da Imitação",
  "Garota, Interrompida",
  "A Cor Púrpura",
  "Um Limite Entre Nós",
  "Sete Vidas",
  "À Procura da Felicidade",
  "A Vida dos Outros",
  "O Leitor",
  "O Segredo de Brokeback Mountain",
  "Menina de Ouro",
  "Entre Irmãos",
  "O Labirinto do Fauno",
  "Os Suspeitos (Prisoners)",
  "Blue Valentine",
  "Requiem para um Sonho",
  "Her",
  "Cisne Negro",
  "Boyhood: Da Infância à Juventude",
  "As Horas",
  "A Troca",
  "Amor (Amour)",
  "O Quarto do Pânico",
  "12 Anos de Escravidão",
  "O Lado Bom da Vida",
  "O Leitor",
  "Antes do Amanhecer",
  "Antes do Pôr-do-Sol",
  "Antes da Meia-Noite",
  "Manchester à Beira-Mar",
  "Room (O Quarto de Jack)",
  "O Óleo de Lorenzo",
  "Filadélfia",
  "Elefante",
  "O Casamento de Muriel",
  "O Escafandro e a Borboleta",
  "A Caça",
  "Amnésia",
  "A Outra História Americana",
  "A Luz Entre Oceanos",
  "O Sol é Para Todos",
  "Minari",
  "O Pai",
  "Estrelas na Terra",
  "Depois do Casamento"
];

const seriest = [
  "Breaking Bad - Netflix",
  "Stranger Things - Netflix",
  "Game of Thrones - HBO Max",
  "The Witcher - Netflix",
  "The Office - Netflix",
  "Friends - HBO Max",
  "Better Call Saul - Netflix",
  "Dark - Netflix",
  "Peaky Blinders - Netflix",
  "The Boys - Prime Video",
  "Black Mirror - Netflix",
  "Narcos - Netflix",
  "Brooklyn Nine-Nine - Netflix",
  "The Mandalorian - Disney+",
  "The Last of Us - HBO Max",
  "Chernobyl - HBO Max",
  "Dexter - Star+",
  "Lost - Disney+",
  "Vikings - Prime Video",
  "House of the Dragon - HBO Max",
  "Prison Break - Prime Video",
  "The Walking Dead - Star+",
  "Suits - Netflix",
  "Lucifer - Netflix",
  "Euphoria - HBO Max",
  "Sherlock - Netflix",
  "Mr. Robot - Prime Video",
  "Rick and Morty - HBO Max",
  "Arcane - Netflix"
];


function Series() {
  const indiceAleatorio = Math.floor(Math.random() * seriest.length);
  const nomeSorteado = seriest[indiceAleatorio];
  document.getElementById("tes").innerText = nomeSorteado;
}


function drama() {
  const indiceAleatorio = Math.floor(Math.random() * filmesDrama.length);
  const nomeSorteado = filmesDrama[indiceAleatorio];
  document.getElementById("tre").innerText = nomeSorteado;
}

const filmesAcao = [
  "Duro de Matar - Prime Video",
  "Duro de Matar 2 - Prime Video",
  "Duro de Matar 3: A Vingança - Prime Video",
  "Velocidade Máxima - Prime Video",
  "John Wick - Prime Video",
  "John Wick: Um Novo Dia para Matar - Prime Video",
  "John Wick 3: Parabellum - Prime Video",
  "Missão: Impossível - Prime Video",
  "Missão: Impossível - Protocolo Fantasma - Prime Video",
  "Missão: Impossível - Nação Secreta - Prime Video",
  "Missão: Impossível - Efeito Fallout - Prime Video",
  "Mad Max: Estrada da Fúria - HBO Max",
  "Mad Max 2: A Caçada Continua - HBO Max",
  "Resgate (Extraction) - Netflix",
  "Resgate 2 - Netflix",
  "Invasão à Casa Branca - Prime Video",
  "Invasão a Londres - Prime Video",
  "Invasão ao Serviço Secreto - Prime Video",
  "O Protetor - Prime Video",
  "O Protetor 2 - Prime Video",
  "O Protetor 3 - Prime Video",
  "Sem Remorso - Prime Video",
  "Jack Reacher: O Último Tiro - Prime Video",
  "Jack Reacher: Sem Retorno - Prime Video",
  "O Atirador - Prime Video",
  "Os Infiltrados - Prime Video",
  "Operação Fronteira - Prime Video",
  "Tenet - HBO Max",
  "O Agente da U.N.C.L.E. - Prime Video",
  "Bastardos Inglórios - Prime Video",
  "Os Oito Odiados - Prime Video",
  "A Origem - Prime Video",
  "Oldboy - Netflix",
  "O Grande Herói - Aluguel/Compra",
  "Até o Último Homem - Prime Video",
  "Zona Verde - Prime Video",
  "Distrito 9 - Prime Video",
  "Planeta dos Macacos: A Origem - Prime Video",
  "Planeta dos Macacos: O Confronto - Prime Video",
  "Planeta dos Macacos: A Guerra - Prime Video",
  "A Identidade Bourne - Prime Video",
  "A Supremacia Bourne - Prime Video",
  "O Ultimato Bourne - Prime Video",
  "Legado Bourne - Prime Video",
  "Jason Bourne - Prime Video",
  "O Passageiro - Prime Video",
  "Sem Escalas - Prime Video",
  "Busca Implacável - Prime Video",
  "Busca Implacável 2 - Prime Video",
  "Busca Implacável 3 - Prime Video",
  "Protegida por um Anjo (Peppermint) - Prime Video",
  "Upgrade: Atualização - Netflix",
  "Drive - Prime Video",
  "Invasão Zumbi - Netflix",
  "A Noite nos Persegue - Netflix",
  "Operação Invasão (The Raid) - Prime Video",
  "Operação Invasão 2 - Prime Video",
  "Alvo Duplo - Prime Video",
  "O Livro de Eli - Netflix",
  "O Protetor do Futuro - Prime Video",
  "Gladiador - Prime Video",
  "O Protetor (The Equalizer) - Prime Video",
  "Atração Explosiva (Safe House) - Prime Video",
  "Carga Explosiva - Prime Video",
  "Carga Explosiva 2 - Prime Video",
  "Carga Explosiva 3 - Prime Video",
  "Velocidade Máxima 2 - Prime Video",
  "Fúria em Alto Mar - Prime Video",
  "No Limite do Amanhã - Prime Video",
  "Os Mercenários - Prime Video",
  "Os Mercenários 2 - Prime Video",
  "Os Mercenários 3 - Prime Video",
  "Looper: Assassinos do Futuro - Prime Video",
  "Inferno na Torre - Prime Video",
  "Velocidade Mortal (Death Race) - Prime Video",
  "Velozes e Furiosos - Prime Video",
  "Velozes e Furiosos 5: Operação Rio - Prime Video",
  "Velozes e Furiosos 7 - Prime Video",
  "Velozes e Furiosos 10 - Prime Video",
  "B13 - 13º Distrito - Aluguel/Compra",
  "O Lutador - Netflix",
  "Falcão Negro em Perigo - Prime Video",
  "Ataque ao Prédio - Prime Video",
  "O Atirador (Shooter) - Prime Video",
  "Red: Aposentados e Perigosos - Prime Video",
  "Red 2: Aposentados e Ainda Mais Perigosos - Prime Video",
  "A Travessia (The Walk) - Prime Video",
  "O Franco-Atirador - Prime Video",
  "Código de Conduta - Prime Video",
  "Assassinos de Aluguel - Prime Video",
  "Herança de Sangue - Prime Video",
  "El Mariachi - Prime Video",
  "A Balada do Pistoleiro - Prime Video",
  "Era uma Vez no México - Prime Video",
  "Kill Bill: Volume 1 - Prime Video",
  "Kill Bill: Volume 2 - Prime Video",
  "Ninja Assassino - Prime Video",
  "A Perseguição (The Grey) - Prime Video",
  "O Passageiro (The Commuter) - Prime Video",
  "O Dublê (The Fall Guy) - Prime Video",
  "The Night Comes for Us - Netflix",
  "À Queima Roupa (Point Blank) - Prime Video",
  "72 Horas - Prime Video",
  "G.I. Joe: A Origem de Cobra - Prime Video",
  "G.I. Joe: Retaliação - Prime Video",
  "S.W.A.T.: Comando Especial - Prime Video",
  "Protegendo o Inimigo - Prime Video",
  "O Alvo - Prime Video",
  "Desconhecido - Prime Video",
  "Tempo de Matar - Prime Video",
  "Colateral - Prime Video",
  "Código de Honra - Prime Video",
  "Adrenalina (Crank) - Prime Video",
  "Adrenalina 2: Alta Voltagem - Prime Video",
  "Fuga Implacável - Prime Video",
  "Operação Skyfall (007) - Prime Video",
  "007 - Cassino Royale - Prime Video",
  "007 - Sem Tempo para Morrer - Prime Video"
];

function açao() {
  const indiceAleatorio = Math.floor(Math.random() * filmesAcao.length);
  const nomeSorteado = filmesAcao[indiceAleatorio];
  document.getElementById("tre").innerText = nomeSorteado;
}

const filmesComedia = [
  "As Branquelas - Prime Video",
  "Se Beber, Não Case - Prime Video",
  "Se Beber, Não Case! Parte II - Prime Video",
  "Se Beber, Não Case! Parte III - Prime Video",
  "Superbad: É Hoje - Netflix",
  "Zumbilândia - Netflix",
  "Zumbilândia: Atire Duas Vezes - Netflix",
  "Penetras Bons de Bico - Netflix",
  "A Morte Lhe Cai Bem - Prime Video",
  "Todo Mundo em Pânico - Prime Video",
  "Todo Mundo em Pânico 2 - Prime Video",
  "Todo Mundo em Pânico 3 - Prime Video",
  "Todo Mundo em Pânico 4 - Prime Video",
  "Ace Ventura: Um Detetive Diferente - Prime Video",
  "Debi & Lóide: Dois Idiotas em Apuros - Prime Video",
  "Escola de Rock - Netflix",
  "O Âncora: A Lenda de Ron Burgundy - Prime Video",
  "O Virgem de 40 Anos - Prime Video",
  "Miss Simpatia - Prime Video",
  "Legalmente Loira - Prime Video",
  "Click - Prime Video",
  "Gente Grande - Netflix",
  "Gente Grande 2 - Netflix",
  "Como Se Fosse a Primeira Vez - Netflix",
  "Tratamento de Choque - Prime Video",
  "Um Faz de Conta que Acontece - Netflix",
  "A Mentira - Netflix",
  "Sim Senhor - Netflix",
  "Entrando Numa Fria - Prime Video",
  "Entrando Numa Fria Maior Ainda - Prime Video",
  "Entrando Numa Fria Maior Ainda com a Família - Prime Video",
  "A Família da Noiva - Netflix",
  "Esposa de Mentirinha - Netflix",
  "De Repente 30 - Netflix",
  "As Férias da Minha Vida - Netflix",
  "Quero Ficar com Polly - Netflix",
  "Vovó... Zona - Netflix",
  "Vovó... Zona 2 - Netflix",
  "Jogo de Amor em Las Vegas - Netflix",
  "Noivas em Guerra - Netflix",
  "Uma Ladra Sem Limites - Netflix",
  "Um Parto de Viagem - Netflix",
  "Minhas Adoráveis Ex-Namoradas - Netflix",
  "Deu a Louca nos Astros - Netflix",
  "Meu Passado Me Condena - Netflix",
  "Tô Ryca! - Netflix",
  "Minha Mãe é uma Peça - Netflix",
  "Minha Mãe é uma Peça 2 - Netflix",
  "Minha Mãe é uma Peça 3 - Netflix",
  "O Auto da Compadecida - Netflix",
  "Loucas pra Casar - Netflix",
  "Muita Calma Nessa Hora - Netflix",
  "Vai que Cola – O Filme - Netflix",
  "Sai de Baixo – O Filme - Netflix",
  "Cine Holliúdy - Netflix",
  "Os Normais – O Filme - Netflix",
  "S.O.S Mulheres ao Mar - Netflix",
  "Até que a Sorte nos Separe - Netflix",
  "O Candidato Honesto - Netflix",
  "O Homem que Copiava - Netflix"
];


function comedia() {
  const indiceAleatorio = Math.floor(Math.random() * filmesComedia.length);
  const nomeSorteado = filmesComedia[indiceAleatorio];
  document.getElementById("tre").innerText = nomeSorteado;
}

const filmesRomance = [
  "Diário de uma Paixão - Netflix",
  "P.S. Eu Te Amo - Netflix",
  "Como Eu Era Antes de Você - Prime Video",
  "A Culpa é das Estrelas - Netflix",
  "Um Amor para Recordar - Netflix",
  "Querido John - Netflix",
  "Para Sempre - Netflix",
  "Um Lugar Chamado Notting Hill - Prime Video",
  "Simplesmente Acontece - Netflix",
  "Antes do Amanhecer - Prime Video",
  "Antes do Pôr-do-Sol - Prime Video",
  "Antes da Meia-Noite - Prime Video",
  "O Lado Bom da Vida - Netflix",
  "Orgulho e Preconceito - Prime Video",
  "Razão e Sensibilidade - Prime Video",
  "Emma - Netflix",
  "Adoráveis Mulheres - Prime Video",
  "A Teoria de Tudo - Netflix",
  "A Cinco Passos de Você - Netflix",
  "A Forma da Água - HBO Max",
  "Titanic - Prime Video",
  "Ghost: Do Outro Lado da Vida - Prime Video",
  "Cidade dos Anjos - Prime Video",
  "O Paciente Inglês - Prime Video",
  "Encontro Marcado - Prime Video",
  "Doce Novembro - Netflix",
  "Kate & Leopold - Prime Video",
  "E Se Fosse Verdade - Netflix",
  "Um Homem de Sorte - Prime Video",
  "Comer Rezar Amar - Netflix",
  "Jane Eyre - Prime Video",
  "Casanova - Netflix",
  "O Segredo de Brokeback Mountain - Prime Video",
  "Closer: Perto Demais - Netflix",
  "Amor e Outras Drogas - Netflix",
  "Ela (Her) - Prime Video",
  "Ruby Sparks: A Namorada Perfeita - Netflix",
  "Amor a Toda Prova - Netflix",
  "Cartas para Julieta - Netflix",
  "No Balanço do Amor - Netflix",
  "Letra e Música - Netflix",
  "A Proposta - Netflix",
  "10 Coisas que Eu Odeio em Você - Netflix",
  "Ela é Demais - Prime Video",
  "De Repente 30 - Netflix",
  "O Diário da Princesa 2 - Prime Video",
  "Tudo Acontece em Elizabethtown - Netflix",
  "O Melhor Amigo da Noiva - Prime Video",
  "Para Todos os Garotos que Já Amei - Netflix",
  "A Barraca do Beijo - Netflix",
  "Com Amor, Simon - Netflix",
  "Um Dia - Netflix",
  "Me Chame Pelo Seu Nome - Netflix",
  "500 Dias com Ela - Prime Video",
  "La La Land - HBO Max",
  "Nasce uma Estrela - Prime Video",
  "Begin Again - Netflix",
  "Mesmo Se Nada Der Certo - Netflix",
  "Questão de Tempo - Netflix"
];

function romance() {
  const indiceAleatorio = Math.floor(Math.random() * filmesRomance.length);
  const nomeSorteado = filmesRomance[indiceAleatorio];
  document.getElementById("tre").innerText = nomeSorteado;
}

const filmesTerror = [
  "Invocação do Mal - HBO Max",
  "Invocação do Mal 2 - HBO Max",
  "Annabelle - HBO Max",
  "Annabelle 2: A Criação do Mal - HBO Max",
  "A Freira - HBO Max",
  "Hereditário - Prime Video",
  "O Exorcista - HBO Max",
  "It: A Coisa - Prime Video",
  "It: Capítulo 2 - Prime Video",
  "Corra! - Prime Video",
  "Midsommar - Prime Video",
  "Atividade Paranormal - HBO Max",
  "Atividade Paranormal 2 - HBO Max",
  "O Massacre da Serra Elétrica - Netflix",
  "Rua do Medo 1994 - Netflix",
  "Rua do Medo 1978 - Netflix",
  "Rua do Medo 1666 - Netflix",
  "A Bruxa - Prime Video",
  "Halloween (2018) - Prime Video",
  "Jogos Mortais - Prime Video"
];


function terror() {
  const indiceAleatorio = Math.floor(Math.random() * filmesTerror.length);
  const nomeSorteado = filmesTerror[indiceAleatorio];
  document.getElementById("tre").innerText = nomeSorteado;
}

const filmesFiccaoCientifica = [
  "Interestelar - Prime Video",
  "Gravidade - Prime Video",
  "Perdido em Marte - Disney+",
  "Blade Runner 2049 - HBO Max",
  "Blade Runner - Prime Video",
  "Ex Machina - Prime Video",
  "Ad Astra - Prime Video",
  "O Predestinado - Prime Video",
  "Minority Report - Prime Video",
  "Lucy - Prime Video",
  "Oblivion - Prime Video",
  "O Enigma de Outro Mundo - Prime Video",
  "A Chegada - Prime Video",
  "Jogador Nº 1 - HBO Max",
  "Chappie - Prime Video",
  "Distrito 9 - Prime Video",
  "O Vingador do Futuro - Prime Video",
  "Elysium - Prime Video",
  "Círculo de Fogo - HBO Max",
  "O Homem do Futuro - Prime Video"
];

function Ficção() {
  const indiceAleatorio = Math.floor(Math.random() * filmesFiccaoCientifica.length);
  const nomeSorteado = filmesFiccaoCientifica[indiceAleatorio];
  document.getElementById("tre").innerText = nomeSorteado;
}
const filmesInfantis = [
  "Toy Story - Disney+",
  "Toy Story 2 - Disney+",
  "Toy Story 3 - Disney+",
  "Toy Story 4 - Disney+",
  "Divertida Mente - Disney+",
  "Procurando Nemo - Disney+",
  "Procurando Dory - Disney+",
  "Os Incríveis - Disney+",
  "Os Incríveis 2 - Disney+",
  "Viva: A Vida é uma Festa - Disney+",
  "Moana - Disney+",
  "Encanto - Disney+",
  "Frozen: Uma Aventura Congelante - Disney+",
  "Frozen 2 - Disney+",
  "Zootopia - Disney+",
  "Shrek - Netflix",
  "Shrek 2 - Netflix",
  "Shrek Terceiro - Netflix",
  "Madagascar - Netflix",
  "Meu Malvado Favorito - Netflix"
];

function infantil() {
  const indiceAleatorio = Math.floor(Math.random() * filmesInfantis.length);
  const nomeSorteado = filmesInfantis[indiceAleatorio];
  document.getElementById("tre").innerText = nomeSorteado;
}

const filmesFantasia = [
  "O Senhor dos Anéis: A Sociedade do Anel - Prime Video",
  "O Senhor dos Anéis: As Duas Torres - Prime Video",
  "O Senhor dos Anéis: O Retorno do Rei - Prime Video",
  "O Hobbit: Uma Jornada Inesperada - Prime Video",
  "O Hobbit: A Desolação de Smaug - Prime Video",
  "O Hobbit: A Batalha dos Cinco Exércitos - Prime Video",
  "Harry Potter e a Pedra Filosofal - Max",
  "Harry Potter e a Câmara Secreta - Max",
  "Harry Potter e o Prisioneiro de Azkaban - Max",
  "Harry Potter e o Cálice de Fogo - Max",
  "Harry Potter e a Ordem da Fênix - Max",
  "Harry Potter e o Enigma do Príncipe - Max",
  "Harry Potter e as Relíquias da Morte Parte 1 - Max",
  "Harry Potter e as Relíquias da Morte Parte 2 - Max",
  "As Crônicas de Nárnia: O Leão, a Feiticeira e o Guarda-Roupa - Disney+",
  "Piratas do Caribe: A Maldição do Pérola Negra - Disney+",
  "Piratas do Caribe: O Baú da Morte - Disney+",
  "Piratas do Caribe: No Fim do Mundo - Disney+",
  "Piratas do Caribe: Navegando em Águas Misteriosas - Disney+",
  "Alice no País das Maravilhas - Disney+"
];

function Fantasia() {
  const indiceAleatorio = Math.floor(Math.random() * filmesFantasia.length);
  const nomeSorteado = filmesFantasia[indiceAleatorio];
  document.getElementById("tre").innerText = nomeSorteado;
}
