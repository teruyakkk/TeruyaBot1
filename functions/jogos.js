const fs = require('fs')



//========(PALAVRAS-DO-ANAGRAMA)=========\\

let palavrasANA = [
{
original: 'MIGUEL',
embaralhada: 'MGIELU',
dica: 'FUNDADOR'
},
{
original: 'PALITO',
embaralhada: 'paiot',
dica: 'ALIMENTO'
}
]	



//====== ANIME JOGOS =========\\

let quizanime = [
{
original: 'AKAMARU',
foto: 'https://i.ibb.co/W0g7DLY/c4f771da7af1.jpg'
},
{
original: 'AKASUNA',
foto: 'https://i.ibb.co/vvdXpvs/5c4899522b1c.jpg'
},
{
original: 'AKATSUCHI',
foto: 'https://i.ibb.co/nnv3PbQ/a3b275339e77.jpg'
},
{
original: 'AKATSUKI',
foto: 'https://i.ibb.co/GHSYGmH/a821073ff5c9.jpg'
},
{
original: 'AMARU',
foto: 'https://i.ibb.co/rknTT8T/e5c7ba9fa14f.jpg'
},
{
original: 'AMATERASU',
foto: 'https://i.ibb.co/4sGNVfS/6ebeef8d76b6.jpg'
},
{
original: 'AMEGAKURE',
foto: 'https://i.ibb.co/Ytv3sg5/482181e4d2c9.jpg'
},
{
original: 'AMEYURI',
foto: 'https://i.ibb.co/N19pYCG/84d9f144e874.jpg'
},
{
original: 'ANBU',
foto: 'https://i.ibb.co/NTHgmDD/c8fa101a1ea8.jpg'
},
{
original: 'ANKO',
foto: 'https://i.ibb.co/y6vzDvN/b561164524ef.jpg'
},
{
original: 'AO',
foto: 'https://i.ibb.co/fd6mxTY/d2da80961c51.jpg'
},
{
original: 'AOBA',
foto: 'https://i.ibb.co/FhX81xB/511a7e6a4fc2.jpg'
},
{
original: 'AODA',
foto: 'https://i.ibb.co/2k7CvTS/6c84d64144d5.jpg'
},
{
original: 'ASHINA',
foto: 'https://i.ibb.co/SB0N90V/ba19e69b2417.jpg'
},
{
original: 'ASHURA',
foto: 'https://i.ibb.co/7CJPdxS/076d7794216b.jpg'
},
{
original: 'ASUMA',
foto: 'https://i.ibb.co/swTPQf6/84f527c23359.jpg'
},
{
original: 'ATSUI',
foto: 'https://i.ibb.co/xfHLhjQ/071354edc113.jpg'
},
{
original: 'EY',
foto: 'https://i.ibb.co/q7r2hF2/a277af679a63.jpg'
},
{
original: 'AYAME',
foto: 'https://i.ibb.co/xhvZJCm/952861774735.jpg'
},
{
original: 'JUTSU DE EXPANSÃO',
foto: 'https://i.ibb.co/JnRY4gR/5a9002e17d75.jpg'
},
{
original: 'DOTON',
foto: 'https://i.ibb.co/yY9JJwm/511ca9e70ade.jpg'
},
{
original: 'HYOUTON',
foto: 'https://i.ibb.co/zSWDyyH/94c614c09001.jpg'
},
{
original: 'RAITON',
foto: 'https://i.ibb.co/1fjJZ7Q/aec79d1f3ef4.jpg'
},
{
original: 'MOKUTON',
foto: 'https://i.ibb.co/RzTr9gF/dfa7219565bf.jpg'
},
{
original: 'FUUTON',
foto: 'https://i.ibb.co/sy7dVj9/56e5257dea70.jpg'
},
{
original: 'SUITON',
foto: 'https://i.ibb.co/tMvPw5j/5bfbbaa4e2eb.jpg'
},
{
original: 'KATON',
foto: 'https://i.ibb.co/1z3S3MS/607165f8976c.jpg'
}
]

//======== QUIZ DE ANIMAIS =======\\
let quizanimais = [
{
original: 'PORQUINHO DA ÍNDIA',
foto: 'https://i.ibb.co/Fqwr0W0/cb2bb96f29e3.jpg'
},
{
original: 'HAMSTER',
foto: 'https://i.ibb.co/Qb3npqg/c43fae235c0a.jpg'
},
{
original: 'ROTTWEILER',
foto: 'https://telegra.ph/file/a10ad7df6ab6a2312a1f9.jpg'
},
{
original: 'FLOPPA',
foto: 'https://telegra.ph/file/7633abcd83b8a587f418d.jpg'
},
{
original: 'GUAXINIM',
foto: 'https://telegra.ph/file/3800c7048d04a1c3dbc4e.jpg'
},
{
original: 'ZEBRA',
foto: 'https://telegra.ph/file/a08e224344e34aa916972.jpg'
},
{
original: 'CARNEIRO',
foto: 'https://telegra.ph/file/096342c8c7815ba9d83be.jpg'
},
{
original: 'BODE',
foto: 'https://telegra.ph/file/ff574a82178089f453444.jpg'
},
{
original: 'MAMUTE',
foto: 'https://telegra.ph/file/00e445dde6c036a0c0df5.jpg'
},
{
original: 'ALPACA',
foto: 'https://telegra.ph/file/a201b23b179392f1cdd7f.jpg'
},
{
original: 'PORCO ESPINHO',
foto: 'https://telegra.ph/file/7b180efc77c8ab6e9a24a.jpg'
},
{
original: 'QUOKKA',
foto: 'https://telegra.ph/file/3042e66a22c6d0fb6e0cd.jpg'
},
{
original: 'PANDA VERMELHO',
foto: 'https://telegra.ph/file/a6517debde47b846073cc.jpg'
},
{
original: 'PEIXE GOTA',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'PEIXE MANDARIM',
foto: 'https://telegra.ph/file/e8892204b373c147bf489.jpg'
},
{
original: 'DRAGÃO DE KOMODO',
foto: 'https://telegra.ph/file/d4c36b449f4c781533f3c.jpg'
},
{
original: 'GUEPARDO',
foto: 'https://telegra.ph/file/0016017b9d28a3b6d027a.jpg'
},
{
original: 'FURÃO',
foto: 'https://telegra.ph/file/e352b4831db11c20a3c62.jpg'
},
{
original: 'LEOPARDO',
foto: 'https://telegra.ph/file/71f5f532ced0fddc08f5b.jpg'
},
{
original: 'LEBRE',
foto: 'https://telegra.ph/file/89f9a46ce660261279477.jpg'
},
{
original: 'MARRECO',
foto: 'https://telegra.ph/file/aa41bde6c4c350ec9d0d4.jpg'
},
{
original: 'GANSO',
foto: 'https://telegra.ph/file/9ab69884414feefc9c109.jpg'
},
{
original: 'CAVALO MARINHO',
foto: 'https://telegra.ph/file/e4cee57d5b731dfffa5d8.jpg'
},
{
original: 'CROCODILO',
foto: 'https://telegra.ph/file/b4483f9a7077fd29a137f.jpg'
},
{
original: 'ORNITORRINCO',
foto: 'https://telegra.ph/file/8ffdd62da1834433112be.jpg'
},
{
original: 'HUSKY SIBERIANO',
foto: 'https://telegra.ph/file/07b98023259637951ba8f.jpg'
},
{
original: 'CAPIVARA',
foto: 'https://telegra.ph/file/54f20cbd80737fe45a284.jpg'
}
]


module.exports = {
palavrasANA, 
quizanime, 
quizanimais
}