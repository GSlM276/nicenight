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
const Etapa1 = gerarCaminhos('imagens/food/', 9, ['.jpeg']);
const Etapa2 = gerarCaminhos('imagens/make/', 5, ['.jpeg']); 
const Etapa3 = gerarCaminhos('imagens/after/', 5, ['.jpeg']);
const Etapa4 = gerarCaminhos('imagens/final/', 15, ['.jpg', ]);
const Etapa5 = gerarCaminhos('imagens/final/', 15, ['.jpg', ]);
const Etapa6 = gerarCaminhos('imagens/final/', 15, ['.jpg', ]);
const blockimg = gerarCaminhos('imagens/block/', 1, ['.jpg']);

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
  if (maiorDeIdade === true) {
    document.getElementById('final-img').src = getRandomImage(finalimg);
  } else {
    document.getElementById('final-img').src = 'imagens/block/block.jpg'; // ex: imagem bloqueada
  }
}


  
function rodarTudo() {
  if (maiorDeIdade === true) {
    document.getElementById('food-img').src = getRandomImage(foodImgs);
    document.getElementById('make-img').src = getRandomImage(makeImgs);
    document.getElementById('after-img').src = getRandomImage(afterImgs); 
    document.getElementById('final-img').src = getRandomImage(finalimg);
  } else {
    document.getElementById('food-img').src = getRandomImage(foodImgs);
    document.getElementById('make-img').src = getRandomImage(makeImgs);
    document.getElementById('after-img').src = getRandomImage(afterImgs);
    document.getElementById('final-img').src = 'imagens/block/block.jpg'; // ex: imagem bloqueada
  }
}

const filmesT = [
"Blue Collar (1978)", "Hard Eight (1996)", "Safe (1995)", "Clean, Shaven (1993)", "The Brown Bunny (2003)", "Buffalo ’66 (1998)", "Pi (1998)", "Requiem for a Dream (2000)", "Spun (2002)", "Christiane F. (1981)", "The Panic in Needle Park (1971)", "Drugstore Cowboy (1989)", "Permanent Midnight (1998)", "Candy (2006)", "Heavenly Creatures (1994)", "The Falling (2014)", "The Virgin Suicides (1999)", "Raw (2016)", "Titane (2021)", "Saint Maud (2019)", "Swallow (2019)", "Thirst (2009)", "Sympathy for Lady Vengeance (2005)", "Lady Snowblood (1973)", "Tokyo Decadence (1992)", "Audition (1999)", "Cure (1997)", "Bright Future (2003)", "Pulse (Kairo, 2001)", "Versus (2000)", "Tetsuo: The Iron Man (1989)", "Tetsuo II: Body Hammer (1992)", "Dead or Alive (1999)", "Shinjuku Triad Society (1995)", "Visitor Q (2001)", "Gozu (2003)", "Cold Fish (2010)", "Guilty of Romance (2011)", "Norwegian Wood (2010)", "Air Doll (2009)", "Nobody Knows (2004)", "Distance (2001)", "After the Storm (2016)", "Shoplifters (2018)", "Still Walking (2008)", "Our Little Sister (2015)", "Like Father, Like Son (2013)", "The Third Murder (2017)", "I Wish (2011)", "Maborosi (1995)",

"Dogtooth (2009)", "Attenberg (2010)", "Miss Violence (2013)", "The Great Beauty (2013)", "Youth (2015)", "Il Divo (2008)", "The Consequences of Love (2004)", "The Family Friend (2006)", "The Embalmer (2002)", "I Am Love (2009)", "Call Me by Your Name (2017)", "Suspiria (2018)", "The Red Desert (1964)", "Blow-Up (1966)", "Zabriskie Point (1970)", "Identification of a Woman (1982)", "L’Avventura (1960)", "La Notte (1961)", "L’Eclisse (1962)", "The Passenger (1975)", "Rocco and His Brothers (1960)", "Ossessione (1943)", "Umberto D. (1952)", "Bicycle Thieves (1948)", "La Terra Trema (1948)", "Journey to Italy (1954)", "Europa ’51 (1952)", "Stromboli (1950)", "Nights of Cabiria (1957)", "La Strada (1954)", "Juliet of the Spirits (1965)", "Satyricon (1969)", "Amarcord (1973)", "City of Women (1980)", "Ginger and Fred (1986)", "And the Ship Sails On (1983)", "Intervista (1987)", "Orchestra Rehearsal (1978)", "The Voice of the Moon (1990)", "Roma (1972)", "Cléo from 5 to 7 (1962)", "Le Bonheur (1965)", "Vagabond (1985)", "The Gleaners and I (2000)", "Faces Places (2017)", "One Sings, the Other Doesn’t (1977)", "The Beaches of Agnès (2008)", "Jacquot de Nantes (1991)", "Kung-Fu Master! (1988)", "Documenteur (1981)",

"The Celebration (1998)", "The Idiots (1998)", "Mifune’s Last Song (1999)", "Open Hearts (2002)", "Brothers (2004)", "After the Wedding (2006)", "In a Better World (2010)", "The Hunt (2012)", "Another Round (2020)", "Festen (1998)", "The Commune (2016)", "It’s Only the End of the World (2016)", "Matthias & Maxime (2019)", "Tom at the Farm (2013)", "Heartbeats (2010)", "I Killed My Mother (2009)", "The Death and Life of John F. Donovan (2018)", "Laurence Anyways (2012)", "Mommy (2014)", "Boy Erased (2018)", "The Miseducation of Cameron Post (2018)", "Call Me Kuchu (2012)", "Weekend (2011)", "God’s Own Country (2017)", "Shelter (2007)", "Holding the Man (2015)", "North Sea Texas (2011)", "Tomboy (2011)", "Girl (2018)", "120 BPM (2017)", "Portrait of a Lady on Fire (2019)", "Summertime (2015)", "Blue Gate Crossing (2002)", "Happy Together (1997)", "Spring Fever (2009)", "Lan Yu (2001)", "The Handmaiden (2016)", "Mysterious Skin (2004)", "Kaboom (2010)", "Nowhere (1997)", "The Doom Generation (1995)", "Totally F***ed Up (1993)", "Smiley Face Killers (2020)", "All About Evil (2010)", "Chained (2012)", "The Loved Ones (2009)", "Wolf Creek (2005)", "The Snowtown Murders (2011)", "Hounds of Love (2016)", "Lake Eerie (2016)", "The Nightingale (2018)",

"The Proposition (2005)", "Animal Kingdom (2010)", "The Rover (2014)", "Mystery Road (2013)", "Goldstone (2016)", "Samson & Delilah (2009)", "Sweet Country (2017)", "Ten Canoes (2006)", "Charlie’s Country (2013)", "Tracks (2013)", "The Tracker (2002)", "Walkabout (1971)", "Picnic at Hanging Rock (1975)", "The Last Wave (1977)", "Gallipoli (1981)", "The Year of Living Dangerously (1982)", "My Brilliant Career (1979)", "Careful, He Might Hear You (1983)", "The Chant of Jimmie Blacksmith (1978)", "Storm Boy (1976)", "Rabbit-Proof Fence (2002)", "Japanese Story (2003)", "The Black Balloon (2008)", "Shine (1996)", "Lantana (2001)", "Jasper Jones (2017)", "Candy Mountain (1987)", "Control (2007)", "24 Hour Party People (2002)", "24 Hour Woman (1999)", "Velvet Goldmine (1998)", "I’m Not There (2007)", "Dig! (2004)", "Meeting People Is Easy (1998)", "Hype! (1996)", "The Decline of Western Civilization (1981)", "American Hardcore (2006)", "Gimme Danger (2016)", "The Filth and the Fury (2000)", "Sid and Nancy (1986)", "Straight Outta Compton (2015)", "La Haine (1995)", "Entre les Murs (2008)", "Girlhood (2014)", "Divines (2016)", "Les Misérables (2019)", "The Class (2008)", "Blue Is the Warmest Color (2013)", "The Dreamlife of Angels (1998)", "Rust and Bone (2012)", "The Beat That My Heart Skipped (2005)",

"The Prophet (2014)", "Persepolis (2007)", "Waltz with Bashir (2008)", "Tower (2016)", "Grave of the Fireflies (1988)", "Barefoot Gen (1983)", "When the Wind Blows (1986)", "Millennium Actress (2001)", "Perfect Blue (1997)", "Tokyo Godfathers (2003)", "Mind Game (2004)", "A Letter to Momo (2011)", "Colorful (2010)", "The Girl Who Leapt Through Time (2006)", "Summer Wars (2009)", "Wolf Children (2012)", "The Boy and the Beast (2015)", "Mirai (2018)", "Belle (2021)", "Children Who Chase Lost Voices (2011)", "The Place Promised in Our Early Days (2004)", "5 Centimeters per Second (2007)", "Weathering with You (2019)", "Your Name (2016)", "Patema Inverted (2013)", "Harmony (2015)", "Expelled from Paradise (2014)", "Blame! (2017)", "Ajin: Demi-Human (2017)", "Devilman Crybaby (2018)", "Vivy: Fluorite Eye’s Song (2021)", "Ergo Proxy (2006)", "Texhnolyze (2003)", "Serial Experiments Lain (1998)", "Haibane Renmei (2002)", "Paranoia Agent (2004)", "Kaiba (2008)", "The Tatami Galaxy (2010)", "Night Is Short, Walk On Girl (2017)", "Ping Pong the Animation (2002)", "Redline (2009)", "Promare (2019)", "Paprika (2006)", "Mind Game (2004)", "The Garden of Words (2013)", "Voices of a Distant Star (2002)", "Children of the Sea (2019)", "The Deer King (2021)", "A Silent Voice (2016)", "The Anthem of the Heart (2015)", "Maquia: When the Promised Flower Blooms (2018)",

"The Autopsy of Jane Doe (2016)", "Terrified (Aterrados, 2017)", "Lake Mungo (2008)", "The Empty Man (2020)", "Noroi: The Curse (2005)", "Baskin (2015)", "Session 9 (2001)", "Kill List (2011)", "The House of the Devil (2009)", "The Borderlands (2013)", "The Night Eats the World (2018)", "Cold Skin (2017)", "The Lodge (2019)", "Veronica (2017, Espanha)", "We Are Still Here (2015)", "Creep (2014)", "Creep 2 (2017)", "Ghostland (2018)", "The Taking of Deborah Logan (2014)", "The Wailing (2016)", "The Medium (2021)", "The Blackcoat’s Daughter (2015)", "The Last Shift (2014)", "The Dark and the Wicked (2020)", "His House (2020)", "Possum (2018)", "The Ritual (2017)", "The Canal (2014)", "Under the Shadow (2016)", "May (2002)", "The Clovehitch Killer (2018)", "The Endless (2017)", "Spring (2014)", "Resolution (2012)", "The Invitation (2015)", "Goodnight Mommy (2014)", "Them (Ils, 2006)", "Martyrs (2008, França)", "Inside (À l’intérieur, 2007)", "Frontier(s) (2007)", "Cold Fish (2010)", "Suicide Club (2001)", "House (Hausu, 1977)", "Kuroneko (1968)", "The Reflecting Skin (1990)", "The Devil’s Candy (2015)", "Antichrist (2009)", "The Strange Color of Your Body’s Tears (2013)", "Piercing (2018)", "Speak No Evil (2022)",

"Coherence (2013)", "Timecrimes (2007)", "Triangle (2009)", "Another Earth (2011)", "I Origins (2014)", "The Man from Earth (2007)", "The Vast of Night (2019)", "Prospect (2018)", "Sputnik (2020)", "Aniara (2018)", "Moon (2009)", "The Signal (2014)", "The Endless (2017)", "Monsters (2010)", "Love (2011)", "Beyond the Black Rainbow (2010)", "The Platform (El Hoyo, 2019)", "Cargo (2017)", "Archive (2020)", "Automata (2014)", "Advantageous (2015)", "Frequencies (2013)", "The Tesseract (2003)", "Stranded (2001)", "Sutorîto! (2005)", "Pandorum (2009)", "Sunshine (2007)", "Infini (2015)", "Radius (2017)", "The Endless (2017)", "Z for Zachariah (2015)", "Europa Report (2013)", "The Wandering Earth (2019)", "Embers (2015)", "The Divide (2011)", "Turbo Kid (2015)", "Attack the Block (2011)", "The Survivalist (2015)", "The Road (2009)", "Pontypool (2008)", "Southland Tales (2006)", "Paprika (2006)", "Tekkonkinkreet (2006)", "Stalker (1979)", "Solaris (1972)", "Time of the Wolf (2003)", "Kin-dza-dza! (1986)", "The Congress (2013)", "2046 (2004)", "Je t’aime, je t’aime (1968)",

"Blue Valentine (2010)", "Like Crazy (2011)", "Short Term 12 (2013)", "Leave No Trace (2018)", "Wendy and Lucy (2008)", "In the Mood for Love (2000)", "Chungking Express (1994)", "The Lunchbox (2013)", "A Ghost Story (2017)", "Columbus (2017)", "Driveways (2019)", "45 Years (2015)", "Paterson (2016)", "Certified Copy (2010)", "Clouds of Sils Maria (2014)", "Personal Shopper (2016)", "The Double Life of Veronique (1991)", "Ida (2013)", "Cold War (2018)", "Border (2018)", "Toni Erdmann (2016)", "Fish Tank (2009)", "Girlhood (2014)", "Mommy (2014)", "Laurence Anyways (2012)", "Mustang (2015)", "Loveless (2017)", "The Return (2003)", "Still Walking (2008)", "Nobody Knows (2004)", "After Life (1998)", "Maborosi (1995)", "All About Lily Chou-Chou (2001)", "Bright Star (2009)", "Oslo, August 31st (2011)", "The Bothersome Man (2006)", "Reprise (2006)", "The Secret in Their Eyes (2009)", "The Swimmer (1968)", "Seconds (1966)", "Paris, Texas (1984)", "The Last Picture Show (1971)", "Husbands (1970)", "Faces (1968)", "Opening Night (1977)", "A Woman Under the Influence (1974)", "The Long Goodbye (1973)", "California Split (1974)", "The Friends of Eddie Coyle (1973)", "Fat City (1972)",

"In the Loop (2009)", "The Death of Stalin (2017)", "Rubber (2010)", "Four Lions (2010)", "What We Do in the Shadows (2014)", "Sightseers (2012)", "Submarine (2010)", "Eagle vs Shark (2007)", "The Lobster (2015)", "The Killing of a Sacred Deer (2017)", "Wrong (2012)", "Wrong Cops (2013)", "Reality (2014)", "Man Bites Dog (1992)", "Heathers (1989)", "Welcome to the Dollhouse (1995)", "Happiness (1998)", "Palindromes (2004)", "Storytelling (2001)", "Me and You and Everyone We Know (2005)", "The Future (2011)", "Synecdoche, New York (2008)", "Anomalisa (2015)", "Being There (1979)", "The Party (1968)", "Playtime (1967)", "Mon Oncle (1958)", "Zazie dans le Métro (1960)", "Daisies (1966)", "Valerie and Her Week of Wonders (1970)", "The Holy Mountain (1973)", "El Topo (1970)", "Santa Sangre (1989)", "Gummo (1997)", "Julien Donkey-Boy (1999)", "Trash Humpers (2009)", "The Greasy Strangler (2016)", "The Forbidden Room (2015)", "Guy Maddin’s My Winnipeg (2007)", "The Saddest Music in the World (2003)", "Pecker (1998)", "Cecil B. Demented (2000)", "Pink Flamingos (1972)", "Female Trouble (1974)", "Desperate Living (1977)", "Polyester (1981)", "Hairspray (1988)", "Cry-Baby (1990)", "Cecil B. Demented (2000)", "A Dirty Shame (2004)",

"Love (2015, Gaspar Noé)", "9 Songs (2004)", "Intimacy (2001)", "Shortbus (2006)", "Baise-Moi (2000)", "Nymphomaniac Vol. 1 (2013)", "Nymphomaniac Vol. 2 (2013)", "The Duke of Burgundy (2014)", "Blue Is the Warmest Color (2013)", "Stranger by the Lake (2013)", "Wetlands (2013)", "The Dreamers (2003)", "Belle de Jour (1967)", "In the Realm of the Senses (1976)", "Empire of the Senses (1976)", "Bitter Moon (1992)", "Secretary (2002)", "Crash (1996, Cronenberg)", "Lust, Caution (2007)", "Eyes Wide Shut (1999)", "Anatomy of Hell (2004)", "Romance (1999)", "La Pianiste (2001)", "The Lover (1992)", "Henry & June (1990)", "Lady Chatterley (2006)", "The Blue Room (2014)", "Goodbye, Dragon Inn (2003)", "Caligula (1979)", "Salò, or the 120 Days of Sodom (1975)", "The Night Porter (1974)", "Sweet Movie (1974)", "Naked Lunch (1991)", "Ken Park (2002)", "Kids (1995)", "Bully (2001)", "Thirteen (2003)", "Lie with Me (2005)", "Sleeping Beauty (2011)", "Malèna (2000)", "Basic Instinct 2 (2006)", "Crash (1996)", "Two Moon Junction (1988)", "Wild Orchid (1989)", "Wild Orchid 2 (1991)", "Emmanuelle (1974)", "Emmanuelle 2 (1975)", "Goodbye Emmanuelle (1977)", "The Story of O (1975)", "Gabrielle (2005)", "Click - Netflix","A Proposta - Prime Video",
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
  document.getElementById("tre").innerText = nomeSorteado;
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
