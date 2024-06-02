try {
  // Seu código aqui
  const { default: makeWASocket, downloadContentFromMessage, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, delay, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');
  ///////////////////////////////////////////////
  //PEDEM DE MUDELE
  ///////////////////////////////////////////////
  const mimetype = require("mime-types")
  const fs = require('fs');
  const P = require('pino');
  //const { node-webpmux } = require("node-webpmux")
  const ytttts = require("yt-search");
  const chalk = require('chalk')
  const moment = require('moment-timezone')
  const clc = require('cli-color')
  const NodeCache = require('node-cache');
  const readline = require("readline");
  const axios = require('axios');
  const ffmpeg = require('fluent-ffmpeg');
  ///////////////////////////////////////////////
  let bancht = JSON.parse(fs.readFileSync('./functions/banchat.json'));
  const linkNeroV1 = JSON.parse(fs.readFileSync("./functions/fotos/logo.json"))
  const infoBot = JSON.parse(fs.readFileSync('./config.json'));
  ///////////////////////////////////////////////
  const imagemdomenu = "https://telegra.ph/file/c7dcd2ac2bcc5df6bb023.jpg"
  //  "https://telegra.ph/file/899eeb68fbedb64c2d926.jpg"
  const { palavras } = require('./functions/conselhos.js');
  const { ytv } = require('./functions/y2mate.js')
  const { fromBuffer } = require("file-type");
  //const { ia } = require('./datab/js/ia')
  //const welcome_group = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
  //const writeExifImg = require("./functions/exif")
  const bye_group2 = JSON.parse(fs.readFileSync('./functions/byegp.json'));
  const { insert, response } = require('./functions/simi.js');
  ///////////////////////////////////////////////
  const supervisores = JSON.parse(fs.readFileSync('./functions/supervisores.json', 'utf-8'));
  const superiores = JSON.parse(fs.readFileSync('./functions/superiores.json', 'utf-8'));
  const { Youtube } = require('ytdownloader.js')
  const antidoc = JSON.parse(fs.readFileSync('./functions/antidoc.json'))
  const antiimg = JSON.parse(fs.readFileSync('./functions/antiimg.json'))
  const lista = JSON.parse(fs.readFileSync('./functions/lista.json'))
  const antiaudio = JSON.parse(fs.readFileSync('./functions/antiaudio.json'))
  const antisticker = JSON.parse(fs.readFileSync('./functions/antisticker.json'))
  const antivid = JSON.parse(fs.readFileSync('./functions/antivideo.json'))
  const autoreact = JSON.parse(fs.readFileSync('./functions/autoreact.json'))

  ///////////////////////////////////////////////
  const { runtime } = require("./functions/myfunc")
  const { convertSticker } = require("./functions/swm.js");
  const { addDays, isAfter } = require('date-fns');
  const { isUrl } = require("./functions/lib/myfunc.js")
  const { EmojiAPI } = require("emoji-api")
  const usedCommandRecently = new Set()
  let autosticker = JSON.parse(fs.readFileSync('./functions/autosticker.json'));
  const { menuprem } = require("./functions/menuprem.js")
  const { palavrasANA } = require('./functions/jogos.js');
  const { exec } = require("child_process")
  const speed = require("performance-now");
  const sleep = async (ms) => { return new Promise(resolve => setTimeout(resolve, ms)) }
  const { getBuffer, getRandom, getExtension } = require('./functions/lib/functions.js');
  const { fetchJson } = require("./functions/lib/fetcher")
  const { validmove, setGame } = require('./functions/tictactoe');
  const { TextoDoBemvindo } = require("./info/TextoDoBemvindo.js")
  const { TextoDoSaiu } = require("./info/TextoDoBemvindo.js")
  const { Aki } = require('aki-api')
  const { Error } = JSON.parse(fs.readFileSync('./functions/Erro.json'))
  const allowedGroups = ['120363041680178417@g.us', '120363266453249736@g.us'];
  ///////////////////////////////////////////////

  //====== defina ======\\

  var prefix = "!"

  var nomeBot = infoBot.nomeBot// nome do bot 


  var nomeDono = infoBot.nomeDono// nome do dono 

  var SoDono = infoBot.numeroDono

  var link = infoBot.link

  logo = linkNeroV1.logo

  var numeroDono = "556793256366"

  ///////////////////////////////////////////////
  const welcome_group = JSON.parse(fs.readFileSync('./functions/welcomegp.json'));
  const antipv = JSON.parse(fs.readFileSync('./functions/antipv.json'))
  const antilinkgp = JSON.parse(fs.readFileSync('./functions/antilinkgp.json'))
  const welkom = JSON.parse(fs.readFileSync('./functions/welkom.json'));



  const welkom2 = JSON.parse(fs.readFileSync('./functions/welkom.json'));
  const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
  }

  const usePairingCode = process.argv.includes('--use-pairing-code')
  const msgRetryCounterCache = new NodeCache();
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
  });
  async function starts() {
    const { state, saveCreds } = await useMultiFileAuthState('./WhatsApp-Conexao')
    const { version } = await fetchLatestBaileysVersion();
    const question = (text) => new Promise((resolve) => rl.question(text, resolve));
    const store = makeInMemoryStore({
      logger: P().child({
        level: 'debug',
        stream: 'store'
      })
    })

    const client = makeWASocket({
        version,
        logger: P({ level: "silent" }),
        usePairingCode,
        mobile: false,
        browser: ["FireFox (linux)"],
        auth: state,
        msgRetryCounterCache,
        defaultQueryTimeoutMs: undefined,
        patchMessageBeforeSending: (message) => {
            const requiresPatch = !!(message.buttonsMessage || message.listMessage);
            if (requiresPatch) {
                message = {
                    viewOnceMessage: {
                        message: {
                            messageContextInfo: {
                                deviceListMetadataVersion: 2,
                                deviceListMetadata: {},
                            }, ...message
                        }
                    }
                }
            }
            return message;
        }
    });

    //console.log(banner.string)
    console.log('[ Clover 6.0 online ]')
    
function limparNumero(entrada) {
    const numeros = entrada.replace(/\D/g, '');
    const numeroLimpo = numeros.replace(/^(\d{2})(9)?(\d{8,9})$/, '$1$3');
    return numeroLimpo;
}

    if (!client.authState.creds.registered) {
        const phoneNumber = await question(`\nDigite seu número do WhatsApp:\nEx: ${clc.bold("+55 75 9865-6060")}\n `);
const numeroLimpo = limparNumero(phoneNumber);
        const code = await client.requestPairingCode(numeroLimpo);
        console.log(`Seu código de conexão é: \n\n ${clc.bold(code)}\n~>`);
        console.log(`Abra seu WhatsApp, vá em ${clc.bold("Aparelhos Conectados > Conectar um novo Aparelho > Conectar usando Número.")}`)
    }

    store.bind(client.ev)

    client.ev.on("creds.update", saveCreds)
    store.bind(client.ev)
    client.ev.on("chats.set", () => {
        console.log("Tem conversas", store.chats.all())
    })
    client.ev.on("contacts.set", () => {
        console.log("Tem contatos", Object.values(store.contacts))
    })
    // CONEXÃO ATUALIZAÇÃO 
    client.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update
        if (connection === "close") {
            const shouldReconnect = (lastDisconnect.error)?.output?.statusCode !== DisconnectReason.loggedOut
            console.log("Conexão fechada devido a", lastDisconnect.error, "Tentando reconectar...", shouldReconnect);
            if (shouldReconnect) {
                starts()
            }

        } else if (connection === "open") {
            console.log(chalk.keyword("red")("Conectado com sucesso!"));
        }
    })
    // Evento de mensagem

    function isUserPremium(number) {
      console.log('Verificando se usuário é premium:', number);
      const isPremiumUser = premium.some(user => user.number === number);
      console.log(`Usuário ${number} é premium:`, isPremiumUser);
      return isPremiumUser;
  }
  
    function loadAndCheckPremiumUsers() {
      console.log('Carregando lista de usuários premium...');
      const premiumList = JSON.parse(fs.readFileSync('./functions/premium.json'));
      console.log('Lista de usuários premium carregada:', premiumList);
  
      const currentDate = new Date();
      console.log('Data atual:', currentDate);
  
      const updatedPremiumList = premiumList.filter(user => {
          console.log('Verificando usuário:', user);
          const expiryDate = new Date(user.expiryDate);
          console.log('Data de expiração do usuário:', expiryDate);
          return isAfter(expiryDate, currentDate);
      });
      console.log('Lista de usuários premium atualizada:', updatedPremiumList);
  
      console.log('Salvando lista de usuários premium atualizada...');
      fs.writeFileSync('./functions/premium.json', JSON.stringify(updatedPremiumList, null, 2));
      console.log('Lista de usuários premium atualizada salva com sucesso.');
  
      return updatedPremiumList;
  }
  
  // Carregar e verificar usuários premium ao iniciar o bot
  console.log('Iniciando verificação de usuários premium...');
  let premium = loadAndCheckPremiumUsers();
  console.log('Verificação de usuários premium concluída.');
  


    ///////////////////////////////////////////////
    //FUNÇÃO DO BEM VINDO//
    ///////////////////////////////////////////////

    const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');


    client.ev.on('group-participants.update', async (anu) => {
      ale = anu
      conn = client

      const grpmdt = await client.groupMetadata(ale.id);

      const isGroup2 = grpmdt.id.endsWith('@g.us');


      if (welkom2.includes(ale.id)) {
        //if(antifake.includes(ale.id) && !ale.participants[0].startsWith(55)) return
        try {
          let metadata = await client.groupMetadata(anu.id)
          let participants = anu.participants
          for (let num of participants) {

            try {
              ppimg = await client.profilePictureUrl(anu.participants[0])
            } catch {
              ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
            }

            memb = metadata.participants.length

            if (anu.action == 'add') {
              num = anu.participants[0]

              client.sendMessage(anu.id, {
                image: { url: imagemdomenu }, caption: `Bem vindo(a) 𝘢𝘰 𝘨𝘳𝘶𝘱𝘰:\n*${metadata.subject}*\nLEIA REGRAS E SEJA BEM VINDO(A)\n\n\n${NomeDoBot}`, headerType: 4
              })
            } else if (anu.action == 'remove') {
              client.sendMessage(anu.id, { image: { url: imagemdomenu }, caption: `OLA POVO DO GRUPO:\n*${metadata.subject}*\n\nO Membro: @${num.split('@')[0]}\n\nSaiu do Grp ou foi Banido.` })
            }
          }
        } catch (err) {
          console.log(err)
        }

      }

    })


    // MENSAGEM ATUALIZAÇÃO 
    client.ev.on('messages.upsert', async connection => {
      //console.log(connection)
      const info = connection.messages[0];
      //if (info.key.fromMe) return;
      if (connection.type != 'notify') return;
      if (info.key.remoteJid === 'status@broadcast') return;
      try {
        function getGroupAdmins(participants) {
          admins = []
          for (let i of participants) {
            if (i.admin == 'admin') admins.push(i.id)
            if (i.admin == 'superadmin') admins.push(i.id)
          }
          return admins
        }
        const getRandom = (ext) => {
          return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        const getExtension = async (type) => {
          return await mimetype.extension(type)
        }
        const getBuffer = (url, options) => new Promise(async (resolve, reject) => {
          options ? options : {}
          await axios({ method: "get", url, headers: { "DNT": 1, "Upgrade-Insecure-Request": 1 }, ...options, responseType: "arraybuffer" }).then((res) => {
            resolve(res.data)
          }).catch(reject)
        })

        ///////////////////////////////////////////////
        //**************[ functions ]**************//
        ///////////////////////////////////////////////

        //const info = msg.messages[0]
        if (!info.message) return
        if (info.key && info.key.remoteJid == 'status@broadcast') return
        const type = Object.keys(info.message)[0] == 'senderKeyDistributionMessage' ? Object.keys(info.message)[2] : (Object.keys(info.message)[0] == 'messageContextInfo') ? Object.keys(info.message)[1] : Object.keys(info.message)[0]
        const content = JSON.stringify(info.message);
        global.prefix
        const from = info.key.remoteJid
        var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""

        const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''
        const reply = (text) => {
          client.sendMessage(from, { text: text }, { quoted: info })
        }





        var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''
        ///////////////////////////////////////////////
        //********IS DO ANTIPV***********\\
        ///////////////////////////////////////////////
        const isAntiPv = (antipv.indexOf('Ativado') >= 0) ? true : false
        ///////////////////////////////////////////////
        //*****functions DO ANAGRAMA E LEVEL*******
        ///////////////////////////////////////////////

        const pushname = info.pushName ? info.pushName : ''
        const _level = JSON.parse(fs.readFileSync('./functions/level.json'))
        const addLevelingXp = (userId, amount) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            _level[position].xp += amount
            fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
          }
        }
        const isGroup = info.key.remoteJid.endsWith('@g.us')
        const sender = isGroup ? info.key.participant : info.key.remoteJid
        if (isGroup && fs.existsSync(`./functions/anagrama-${from}.json`)) {
          let dataAnagrama = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))
          if (budy.slice(0, 4).toUpperCase() == dataAnagrama.original.slice(0, 4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
          xp = Math.floor(Math.random() * 14) + 3000
          if (budy.toUpperCase() == dataAnagrama.original) {

            let ano = {
              image: { url: logo },
              caption: `
  parabéns ${pushname} 🥳 você ganhou o jogo\nPalavra : ${dataAnagrama.original}\nIniciando o proximo jogo em 5 segundos..
  `,
              lfooter: "",
              //buttons: buttons,
              headerType: 4
            }

            client.sendMessage(from, ano, { "mentionedJid": [sender] }), fs.unlinkSync(`./functions/anagrama-${from}.json`)
            addLevelingXp(sender, xp)
            recompensa = `🎉🎉RECOMPENSA🎉🎉\nVocê ganhou ${xp} em *xp*`
            reply(recompensa)
            setTimeout(async () => {
              fs.writeFileSync(`./functions/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
              let dataAnagrama2 = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))

              let ani = {
                image: { url: logo },
                caption: `
  ╭─────≽「 👾 ANAGRAMA 👾 」
  │➽ DESCUBRA A PALAVRA
  │➽ ANAGRAMA: ${dataAnagrama2.embaralhada}
  │➽ DICA: ${dataAnagrama2.dica}
  ╰────────────────────────
  `,
                lfooter: `${nomeBot}`,
                //buttons: buttons,
                headerType: 4
              }

              client.sendMessage(from, ani)
            }, 5000)
          }
        }
        ///////////////////////////////////////////////
        //DEFINIÇÕES DO LEVELING
        ///////////////////////////////////////////////


        const _leveling = JSON.parse(fs.readFileSync('./functions/lib/leveling.json'))
        const levelingOn = JSON.parse(fs.readFileSync('./functions/lib/leveling.json'))
        const isLevelingOn = isGroup ? _leveling.includes(from) : true
        const { getUserRank, addCooldown, leveltab } = require('./functions/lib/leveling.js')
        const getLevelingXp = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].xp
          }
        }
        const getLevelingLevel = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].level
          }
        }
        const getLevelingId = (userId) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            return _level[position].jid
          }
        }


        const addLevelingLevel = (userId, amount) => {
          let position = false
          Object.keys(_level).forEach((i) => {
            if (_level[i].jid === userId) {
              position = i
            }
          })
          if (position !== false) {
            _level[position].level += amount
            fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
          }
        }
        const addLevelingId = (userId) => {
          const obj = { jid: userId, xp: 1, level: 1 }
          _level.push(obj)
          fs.writeFileSync('./functions/level.json', JSON.stringify(_level))
        }
        /********** FUCTION LEVELING **********/
        var per = '*[▒▒▒▒▒▒▒▒▒▒] 0%*'
        const peri = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
        const perl = peri - getLevelingXp(sender)
        const resl = Math.round(100 - ((perl / getLevelingXp(sender)) * 100))
        if (resl <= 10) {
          per = `*[█▒▒▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 20) {
          per = `*[██▒▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 30) {
          per = `*[███▒▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 40) {
          per = `*[████▒▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 50) {
          per = `*[█████▒▒▒▒▒] ${resl}%*`
        } else if (resl <= 60) {
          per = `*[██████▒▒▒▒] ${resl}%*`
        } else if (resl <= 70) {
          per = `*[███████▒▒▒] ${resl}%*`
        } else if (resl <= 80) {
          per = `*[████████▒▒] ${resl}%*`
        } else if (resl <= 90) {
          per = `*[█████████▒] ${resl}%*`
        } else if (resl <= 100) {
          per = `*[██████████] ${resl}%*`
        }
        const levelRole = getLevelingLevel(sender)
        var role = 'Bronze I🥉'
        if (levelRole <= 3) {
          role = 'Bronze I 🥉'
        } else if (levelRole <= 5) {
          role = 'Bronze II 🥉'
        } else if (levelRole <= 10) {
          role = 'Bronze III 🥉'
        } else if (levelRole <= 15) {
          role = 'Bronze IV 🥉'
        } else if (levelRole <= 20) {
          role = 'Bronze V 🥉'
        } else if (levelRole <= 25) {
          role = 'Prata I 🥈'
        } else if (levelRole <= 30) { 
          role = 'Prata II 🥈'
        } else if (levelRole <= 35) {
          role = 'Prata III 🥈'
        } else if (levelRole <= 40) {
          role = 'Prata IV 🥈'
        } else if (levelRole <= 45) {
          role = 'Prata V 🥈'
        } else if (levelRole <= 50) {
          role = 'Ouro I 🥇'
        } else if (levelRole <= 55) {
          role = 'Ouro II 🥇'
        } else if (levelRole <= 60) {
          role = 'Ouro III 🥇'
        } else if (levelRole <= 65) {
          role = 'Ouro IV 🥇'
        } else if (levelRole <= 70) {
          role = 'Ouro V 🥇'
        } else if (levelRole <= 75) {
          role = 'Campeão I 🏆'
        } else if (levelRole <= 80) {
          role = 'Campeão II 🏆'
        } else if (levelRole <= 85) {
          role = 'Campeão III 🏆'
        } else if (levelRole <= 90) {
          role = 'Campeão IV 🏆'
        } else if (levelRole <= 95) {
          role = 'Campeão V 🏆'
        } else if (levelRole <= 100) {
          role = 'Diamante I 💎'
        } else if (levelRole <= 110) {
          role = 'Diamante II 💎'
        } else if (levelRole <= 120) {
          role = 'Diamante III 💎'
        } else if (levelRole <= 130) {
          role = 'Diamante IV 💎'
        } else if (levelRole <= 140) {
          role = 'Diamante V 💎'
        } else if (levelRole <= 150) {
          role = 'Mestre I 🔥'
        } else if (levelRole <= 170) {
          role = 'Mestre II 🔥'
        } else if (levelRole <= 180) {
          role = 'Mestre III 🔥'
        } else if (levelRole <= 190) {
          role = 'Mestre IV 🔥'
        } else if (levelRole <= 200) {
          role = 'Mestre V 🔥'
        } else if (levelRole <= 250) {
          role = 'Mítico I 🔮'
        } else if (levelRole <= 300) {
          role = 'Mítico II 🔮'
        } else if (levelRole <= 350) {
          role = 'Mítico III 🔮'
        } else if (levelRole <= 400) {
          role = 'Mítico IV 🔮'
        } else if (levelRole <= 450) {
          role = 'Mítico V 🔮'
        } else if (levelRole <= 500) {
          role = 'Lenda I ⚡'
        } else if (levelRole <= 550) {
          role = 'Lenda II ⚡'
        } else if (levelRole <= 600) {
          role = 'Lenda III ⚡'
        } else if (levelRole <= 650) {
          role = 'Lenda IV ⚡'
        } else if (levelRole <= 700) {
          role = 'Lenda V ⚡'
        } else if (levelRole <= 750) {
          role = 'Lendário I 🎑'
        } else if (levelRole <= 800) {
          role = 'Lendário II 🎑'
        } else if (levelRole <= 850) {
          role = 'Lendário III 🎑'
        } else if (levelRole <= 900) {
          role = 'Lendário IV 🎑'
        } else if (levelRole <= 910) {
          role = 'Lendário V 🎑'
        } else if (levelRole <= 920) {
          role = 'EL MESTRE I 🏅'
        } else if (levelRole <= 930) {
          role = 'EL MESTRE II 🏅'
        } else if (levelRole <= 940) {
          role = 'EL MESTRE III 🏅'
        } else if (levelRole <= 950) {
          role = 'EL MESTRE IV 🏅'
        } else if (levelRole <= 10000) {
          role = '⚡️ BRIGADEIRO ⚡️'
        }
        if (isGroup && isLevelingOn) {
          const currentLevel = getLevelingLevel(sender)
          const checkId = getLevelingId(sender)
          try {
            if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
            const amountXp = Math.floor(Math.random() * 10) + 500
            const requiredXp = 10000 * (Math.pow(2, currentLevel) - 1)
            const getLevel = getLevelingLevel(sender)
            addLevelingXp(sender, amountXp)
            if (requiredXp <= getLevelingXp(sender)) {
              addLevelingLevel(sender, 1)
              await client.sendMessage(sender, { text: `*「 LEVEL UP 」*\n\n➸ *Nome*: ${sender}\n➸ *XP*: ${getLevelingXp(sender)}\n➸ *Level*: ${getLevel} -> ${getLevelingLevel(sender)}\n\nParabéns!!  🎉🎉` })
            }
          } catch (err) {
            console.error(err)
          }
        }
        const getLevel = getLevelingLevel(sender)
        const tictactoe = JSON.parse(fs.readFileSync('./functions/database/tictactoe.json'));
        const registros = JSON.parse(fs.readFileSync("./functions/registros.json"))





        ///////////////////////////////////////////////
        // IS DE functions PARA ADM
        ///////////////////////////////////////////////

        const isAntilinkgp = isGroup ? antilinkgp.includes(from) : false
        const Antidoc = isGroup ? antidoc.includes(from) : false
        const isAntiAudio = isGroup ? antiaudio.includes(from) : false
        const isAntiVid = isGroup ? antivid.includes(from) : false
        const isAntiImg = isGroup ? antiimg.includes(from) : false
        const isAntiSticker = isGroup ? antisticker.includes(from) : false
        const isAutoReact = isGroup ? autoreact.includes(from) : false
        const isAutoSticker = isGroup ? autosticker.includes(from) : false
        const isBanchat = isGroup ? bancht.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
        const emoji = new EmojiAPI()
        const isPremium = isUserPremium(sender);
        const isSupervisores = supervisores.some(sup => sup.number === sender);
        const isSuperiores = superiores.some(sup => sup.number === sender);


        ///////////////////////////////////////////////
        //functions PARA COMANDO DE GRUPO
        ///////////////////////////////////////////////
        
        const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
        const groupName = isGroup ? groupMetadata.subject : ''
        selectedButton = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
        const participants = isGroup ? await groupMetadata.participants : ''
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
        const botNumber = client.user.id.split(':')[0] + '@s.whatsapp.net'
        const args = body.trim().split(/ +/).slice(1);
        const isCmd = body.startsWith(prefix);
        const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
        const mentions = (teks, memberr, id) => {
          (id == null || id == undefined || id == false) ? client.sendMessage(from, { text: teks.trim(), mentions: memberr }) : client.sendMessage(from, { text: teks.trim(), mentions: memberr })
        }

        const addFilter = (sender) => {
          usedCommandRecently.add(sender)
          setTimeout(() => usedCommandRecently.delete(sender), 4000)
        }


        const groupIdWelcomed = []
        for (let obj of welcome_group) groupIdWelcomed.push(obj.id)

        const groupIdBye = []
        for (let obj of bye_group2) groupIdBye.push(obj.id)


        ///////////////////////////////////////////////
        //ISQUOTED
        ///////////////////////////////////////////////
        const isImage = type == 'imageMessage'
        const isVideo = type == 'videoMessage'
        const isAudio = type == 'audioMessage'
        const isSticker = type == 'stickerMessage'
        const isContact = type == 'contactMessage'
        const isLocation = type == 'locationMessage'
        const isProduct = type == 'productMessage'
        const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage')
        typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = "Image"
        else if (isVideo) typeMessage = "Video"
        else if (isAudio) typeMessage = "Audio"
        else if (isSticker) typeMessage = "Sticker"
        else if (isContact) typeMessage = "Contact"
        else if (isLocation) typeMessage = "Location"
        else if (isProduct) typeMessage = "Product"
        const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
        const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
        const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
        const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        const getFileBuffer = async (mediakey, MediaType) => {
          const stream = await downloadContentFromMessage(mediakey, MediaType)
          let buffer = Buffer.from([])
          for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk])
          }
          return buffer
        }
        const isGroupAdmins = groupAdmins.includes(sender) || false
        const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

        ///////////////////////////////////////////////
        //FUNÇÃO DE DONO 
        ///////////////////////////////////////////////
        const isOwner = sender.includes(infoBot.numeroDono)
        /////////////////////////////////////////////////


        q = args.join(" ")

        const sendBtext = async (id, text1, desc1, but = [], vr) => {
          buttonMessage = { text: text1, footer: desc1, buttons: but, headerType: 1 }
          client.sendMessage(id, buttonMessage, { quoted: vr })
        }

        const sendBimg = async (id, img1, text1, desc1, but = [], vr) => {
          buttonMessage = { image: { url: img1 }, caption: text1, footerText: desc1, buttons: but, headerType: 4 }
          client.sendMessage(id, buttonMessage, { quoted: vr })
        }


        //*******************************************//


        // VERIFICADOS ⭐️
        const live = info
        const vid = info
        const doc = info


        const dbids = []
        for (i = 0; i < lista.length; ++i) {
          dbids.push(lista[i].groupId)
        }
        const islista = (isGroup && dbids.indexOf(from) >= 0) ? true : false





        if (isAutoSticker && isGroup) {
          async function autofiguf() {
            await setTimeout(async () => {
              if (budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return
              if (type === "videoMessage") {
                if ((isMedia && info.message.videoMessage.seconds < 40)) {
                  rane = getRandom('.' + await getExtension(info.message.videoMessage.mimetype))
                  buffimg = await getFileBuffer(info.message.videoMessage, 'video')
                  fs.writeFileSync(rane, buffimg)
                  const media = rane
                  rano = getRandom('.webp')
                  await ffmpeg(`./${media}`)
                    .inputFormat(media.split('.')[1])
                    .on('start', function (cmd) {
                      console.log(`Started : ${cmd}`)
                    })
                    .on('error', function (err) {
                      console.log(`Error : ${err}`)
                      exec(`webpmux -set exif ${addMetadata('bot', 'manu')} ${rano} -o ${rano}`, async () => {
                        fs.unlinkSync(media)
                        tipe = media.endsWith('.mp4') ? 'video' : 'gif'
                        reply(`Falha na conversão de ${tipe} para sticker`)
                      })
                    })
                  exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, () => {
                    fs.unlinkSync(media)
                    buffer = fs.readFileSync(rano)
                    client.sendMessage(from, { sticker: buffer }, { quoted: info })
                    fs.unlinkSync(rano)
                  })
                }
              }

              if (type === "imageMessage") {
                rane = getRandom('.' + await getExtension(info.message.imageMessage.mimetype))
                buffimg = await getFileBuffer(info.message.imageMessage, 'image')
                fs.writeFileSync(rane, buffimg)
                const media = rane
                rano = getRandom('.webp')
                exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, () => {
                  fs.unlinkSync(media)
                  buffer = fs.readFileSync(rano)
                  client.sendMessage(from, { sticker: buffer }, { quoted: info })
                  fs.unlinkSync(rano)
                })
              }
            }, 1000)
          }
          autofiguf().catch(e => {
            console.log(e)
          })
        }

        var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        const isBot = info.key.fromMe ? true : false

        if (isUrl(body) && isAntilinkgp && isGroup && isBotGroupAdmins) {
          if (!isAntilinkgp) return
          if (!isUrl(body)) return
          if (body.includes("http")) {
            if (!budy2.includes("http")) return
            if (isBot) return
            linkgpp = await client.groupInviteCode(from)
            if (budy.match(`${linkgpp}`)) return reply('*Link do nosso grupo, não irei remover.. *')
            if (isGroupAdmins) return reply("*Link detectado, porém usuário é admin*")
            if (!JSON.stringify(groupMembers).includes(sender)) return
            client.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } })
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }
        }

        enviar = reply


        if (isAutoReact && isGroup && isCmd) {
          if (!isAutoReact) return
          emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
          reassao = emojis[Math.floor(Math.random() * emojis.length)]
          sendMsg = await client.sendMessage(from, { react: { text: reassao, key: info.key } })
        }

        if (isAutoReact && isGroup && !isCmd) {
          if (!isAutoReact) return
          emojis = ["😀", "😃", "😁", "😆", "😂", "🤣", "😭", "😉", "😘", "😗", "🥰", "😍", "🤩", "🥳", "🙃", "🙂", "🥲", "😋", "😛", "😜", "😝", "😜", "😇", "😊", "☺️", "😏", "😌", "😔", "😑", "😐", "😶", "🤔", "🤫", "🤭", "🥱", "🤗", "🤨", "🧐", "😒", "🙄", "😤", "😠", "🤬", "🥺", "😥", "😟", "☹️", "😦", "😧", "😰", "😨", "😕", "😯", "😲", "😳", "🤯", "😬", "😓", "😓", "😞", "😖", "🥴", "😎", "🤓", "😎", "🥵", "🥶", "🌞", "🤢", "🤮", "🤥", "🤡", "😈", "🥵", "👽", "😷", "💦", "👺", "👹", "💨", "😸", "😹", "❤️", "🫀", "👁️", "☠️", "💀", "👀", "😻", "💋", "🫂", "👄", "👅", "💅", "🙏", "🤳", "✍️", "🙅", "🌀", "☃️", "🔥", "⚡", "🌈", "💧", "🙈", "🍑", "🍒", "🍓", "🍌", "🌶️", "🍆", "🍴", "🍷", "🍴", "🍽️", "🛢️", "🚨", "🎤", "🎭", "📽️", "🎰", "☎️", "📞", "👑", "💎", "💍", "💉", "🗑️", "🗡️", "⚔️", "🚬", "💣", "⁉️", "✅", "👁️‍🗨️", "♥️", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🇧🇷", "🏳️‍🌈", "🇲🇽", "🇪🇸", "🇲🇿", "🇦🇴", "🇺🇲", "🤔", "🤫", "😏", "🍆", "👺", "🙊"]
          reassao = emojis[Math.floor(Math.random() * emojis.length)]
          sendMsg = await client.sendMessage(from, { react: { text: reassao, key: info.key } })
        }

        const samih2 = JSON.parse(fs.readFileSync('./functions/simi.json'));

        const isSimi2 = isGroup ? samih2.includes(from) : false


        if (!isCmd && isSimi2 && isGroup) {
          if (isCmd || isUrl(budy2)) return
          if (budy.length >= 500) return
          if (budy.includes("@55")) return
          if (info.key.fromMe) return
          if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
          insert(type, info)
          const sami = await response(budy)

          if (sami) client.sendMessage(from, { text: sami, thumbnail: imagemdomenu }, { quoted: info });
        }







        if (isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }

        if (isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }

        if (isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }

        if (Antidoc && isBotGroupAdmins && type == 'documentMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }

        if (isAntiPv && !isGroup && !isOwner) {
          msgpvblock = `./func/call/msg_block-${sender}.json`
          fs.writeFileSync(msgpvblock, JSON.stringify("_- PROGRAMAÇÃO DE - _\n\n BLOQUEAR / USUARIOS POR ENVIAR MENSAGEM PARA O BOT\n\n_- REALIZANDO AÇÃO _-", null, 2))
          msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
          reply(msgmsglbl)
          fs.unlinkSync(msgpvblock)
          setTimeout(async () => {
            client.updateBlockStatus(sender, 'block')
          }, 22)
          return
        }

        if (isBanchat && !isGroupAdmins && !isOwner) {
          if (!isGroupAdmins && !isOwner) return
          if (budy.toLowerCase().startsWith('unbangp')) {
            if (isCmd && !isBanchat && !isGroupAdmins) return reply(`Este grupo esta banido!`)
            let lfd = bancht.indexOf(from)
            bancht.splice(lfd, 1)
            fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
            reply(`Grupo desbanido...`)
          }
        }

        if (isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
          if (isGroupAdmins) return client.sendMessage(from, { text: 'MENSAGEM PROIBIDA,POREM A REALEZA E ADM, ENTAO NAO TE REMOVEREI ' }, { quoted: info })
          await client.sendMessage(from, { text: '🥋MENSAGEM PROIBIDA,PUNINDO USUÁRIO🥋' }, { quoted: info })
          setTimeout(async function () {
            client.groupParticipantsUpdate(from, [sender], 'remove')
          }, 1000)
        }


        // RESPOSTAS DOS COMANDOS \\
        resposta = {
          espere: "🔧️ Por favor, aguarde... enviando 🚀",
aguarde: "🔧️ Por favor, aguarde... enviando 🚀",
dono: "👑️ Este comando só pode ser usado pelo meu dono! 🛡️",
grupo: "👥️ Este comando só pode ser usado em grupo 🌐️",
premium: "💎️ Este comando é exclusivo para usuários Vip ✨",
supervisores: "🛡️ Este comando é exclusivo para Supervisores 👨‍💼️",
superiores: "🛡️ Este comando é exclusivo para Superiores 👨‍💼️",
privado: "📩️ Este comando só pode ser usado no privado 🔒️",
adm: "⚙️️ Este comando só pode ser usado por administradores de grupo 🔑️",
botadm: "🤖️ Este comando só pode ser usado quando o bot é administrador 🔐️",
registro: `📋️ Você não está registrado! Utilize ${prefix}login para se registrar 📝️`,
norg: "✅️ Você já está registrado ✔️",
erro: "❌️ Ocorreu um erro, tente novamente mais tarde ⚠️",
          menu: "aaaaa"
        }

        comando = command
        
        if (isGroup) {
          if (isCmd && !isBot) {
            console.log(
              color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰 ”`, 'blue'),
              color(`\n➱  𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${comando}`, 'red'),
              color(`\n➱  𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
              color(`\n➱  𝙶𝚁𝚄𝙿𝙾: ${groupName}`, 'red'),
              color(`\n➱  𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
              color(`\n➱  𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
          } else if (!isBot) {
            console.log(
              color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰 ”`, 'blue'),
              color(`\n➱  𝙽𝚄́𝙼𝙴𝚁𝙾: ${color('Não', 'red')}`, 'orange'),
              color(`\n➱  𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
              color(`\n➱  𝙶𝚁𝚄𝙿𝙾: ${groupName}`, 'red'),
              color(`\n➱  𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
              color(`\n➱  𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
          }
        } else {
          if (isCmd && !isBot) {
            console.log(
              color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰”`, 'blue'),
              color(`\n➱  𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${comando}`, 'red'),
              color(`\n➱  𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
              color(`\n➱  𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
              color(`\n➱  𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
          } else if (!isBot) {
            console.log(
              color(`\n “𝘔𝘦𝘴𝘢𝘨𝘦𝘮 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰”`, 'blue'),
              color(`\n➱  𝙲𝙾𝙼𝙰𝙽𝙳𝙾: ${color('Não', 'red')}`, 'orange'),
              color(`\n➱  𝙽𝚄́𝙼𝙴𝚁𝙾: ${sender.split("@")[0]}`, 'red'),
              color(`\n➱  𝙽𝙾𝙼𝙴: ${pushname}`, 'red'),
              color(`\n➱  𝙷𝙾𝚁𝙰: ${hora}\n`, 'red'))
          }
        }

        /*
        if(!isGroup && !isOwner && !m.key.fromMe && !isPremium){ 
        reply(`[🚫] 𝗔𝗡𝗧𝗜𝗣𝗩 𝗤𝗨𝗘 𝗕𝗟𝗢𝗤𝗨𝗘𝗜𝗔! [🚫]\nUsuários que enviarem mensagem no privado, será bloqueado pois antipv está ativo, fale com meu dono para solicitar o desbloqueio: wa.me/${numerodn}`)
        setTimeout(async () => {
        //pl.updateBlockStatus(sender, 'block')
        }, 1000)
        return
        }
        */

        const { pix } = require('@klawdyo/pix.js');
        switch (command) {



          case "little":
          case 'simih2':
          case 'autoresponder':
          case "simi":
            if (!isOwner) return reply(resposta.dono)
            if (!isGroupAdmins) return reply('so adm!!!')
            if (args.length < 1) return reply('1 pra ligar e pra desligar')
            if (Number(args[0]) === 1) {
              if (isSimi2) return reply('O modo Simi está ativo')
              samih2.push(from)
              fs.writeFileSync('./functions/simi.json', JSON.stringify(samih2))
              reply('Ativado com sucesso o modo simi neste grupo 😗, Este simih2 ele aprende as respostas e perguntas das pessoas, conforme vai falando, por isso, só recomendo utilizar ele no termux, pois no site ou lugar diferente do termux que você utilizar, ele não vai armazenar os dados nescessarios')
            } else if (Number(args[0]) === 0) {
              if (!isSimi2) return reply('Já está Desativado.')
              pesquisar = from
              processo = samih2.indexOf(pesquisar)
              while (processo >= 0) {
                samih2.splice(processo, 1)
                processo = samih2.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/simi.json', JSON.stringify(samih2))
              reply('Desativado modo simi com sucesso neste grupo 😡️')
            } else {
              reply('1 para ativar, 0 para desativar, lerdao vc em KKKKK')
            }
            break


          case 'emoji2':
          case 'emoji-mix':
          case 'emojimix': {
            if (!isOwner) return reply(resposta.dono)
            if (!q) return reply(`Exemplo : ${prefix + command} 😅+🤔`)
            reply('SER NÃO FOR TENTA COM OUTRO... ?')
            let [emoji1, emoji2] = q.split`+`
            var em = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
            for (let res of em.results) {
              templateMassage = {
                image: {
                  url: `${res.url}`,
                  quoted: live
                }
              }
              client.sendMessage(from, templateMassage, { quoted: live })
            }
          }
            break

          case 'gerarlink':
          case 'imgpralink':
          case "telegra.ph":
            if (!isOwner) return reply(resposta.dono)
            try {
              if (isQuotedImage) {
                boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage : info
                const fetch = require('node-fetch');
                const FormData = require('form-data');
                const fs = require('fs');
                async function uploadImageToTelegraph(imageBuffer) {
                  const form = new FormData();
                  form.append('file', imageBuffer, { filename: 'image.jpg' });

                  const response = await fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: form,
                  });
                  const data = await response.json();
                  if (data && data[0] && data[0].src) {
                    return 'https://telegra.ph' + data[0].src;
                  } else {
                    throw new Error('Failed to retrieve the image URL from the response.');
                  }
                }
                const owgi = await getFileBuffer(boij, "image");
                const imageUrl = await uploadImageToTelegraph(owgi);
                reply(imageUrl);
              } else {
                reply('marque a ft')
              }
            } catch (e) {
              console.log(e)
              reply('error...')
            }
            break



          case 'totag':
          case 'cita':
          case 'hidetag':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply('Este comando só deve ser utilizado em Grupo.')
            if (!isGroupAdmins) return reply('Você precisa ser ADM pra utilizar este comando')
            if (q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
            if (q.includes("=>") || q.includes(">")) return
            membros = (groupId, membros1) => {
              array = []
              for (let i = 0; i < membros1.length; i++) {
                array.push(membros1[i].id)
              }
              return array
            }
            var yd = membros(from, groupMembers)
            if ((isMedia && !info.message.videoMessage || isQuotedSticker) && args.length == 0) {
              media = isQuotedSticker ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage : info.message.stickerMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              img = await getFileBuffer(media, 'sticker')
              fs.writeFileSync(rane, img)
              fig = fs.readFileSync(rane)
              var options = {
                sticker: fig,
                mentions: yd
              }
              client.sendMessage(from, options)
            } else if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
              media = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              img = await getFileBuffer(media, 'image')
              fs.writeFileSync(rane, img)
              buff = fs.readFileSync(rane)
              client.sendMessage(from, { image: buff, mentions: yd }, { quoted: info })
            } else if ((isMedia && !info.message.videoMessage || isQuotedVideo) && args.length == 0) {
              media = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              vid = await getFileBuffer(media, 'video')
              fs.writeFileSync(rane, vid)
              buff = fs.readFileSync(rane)
              client.sendMessage(from, { video: buff, mimetype: 'video/mp4', mentions: yd }, { quoted: info })
            } else if ((isMedia && !info.message.videoMessage || isQuotedAudio) && args.length == 0) {
              media = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              aud = await getFileBuffer(media, 'audio')
              fs.writeFileSync(rane, aud)
              buff = fs.readFileSync(rane)
              client.sendMessage(from, { audio: buff, mimetype: 'audio/mp4', ptt: true, mentions: yd }, { quoted: info })
            } else if ((isMedia && !info.message.videoMessage || isQuotedDocument) && args.length == 0) {
              media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
              rane = getRandom('.' + await getExtension(media.mimetype))
              doc = await getFileBuffer(media, 'document')
              fs.writeFileSync(rane, doc)
              buff = fs.readFileSync(rane)
              client.sendMessage(from, { document: buff, mimetype: 'text/plain', mentions: yd }, { quoted: info })
            } else if (budy) {
              if (q.length < 1) return reply('Citar oq?')
              client.sendMessage(from, { text: body.slice(command.length + 2), mentions: yd })
            } else {
              reply(`Responder imagem/documento/gif/adesivo/áudio/vídeo com legenda ${prefix + command}`)
            }
            break

          case 'antiimg':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiImg) return reply('Já Esta ativo')
              antiimg.push(from)
              fs.writeFileSync('./functions/antiimg.json', JSON.stringify(antiimg))
              reply(' ativou com sucesso o recurso de anti imagem nesse grupo ')
            } else if (Number(args[0]) === 0) {
              if (!isAntiImg) return reply('Ja esta Desativado.')
              antiimg.splice(from, 1)
              fs.writeFileSync('./functions/antiimg.json', JSON.stringify(antiimg))
              reply(' Desativou com sucesso o recurso de anti imagem nesse grupo ')
            } else {
              if (isAntiImg) {
                buttons002 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[ ] DESATIVAR [ ]' }, type: 1 }
                ]
              } else {
                buttons002 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[ ] ATIVAR [ ]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═─────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐈𝐌𝐀𝐆𝐄𝐌 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═─────═⌘═────═╯`,
                footer: `STATUS DO ANTI-IMG AGORA:${isAntiImg ? 'ATIVADO' : 'DESATIVADO'}\n`,
                buttons: buttons002,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              client.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break



          case 'antilinkgp':
          case 'antilink':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (Number(args[0]) === 1) {
              if (isAntilinkgp) return reply('Ja esta ativo')
              antilinkgp.push(from)
              fs.writeFileSync('./functions/antilinkgp.json', JSON.stringify(antilinkgp))
              reply(' Ativou com sucesso o recurso de antilinkgp ')
            } else if (Number(args[0]) === 0) {
              if (!isAntilinkgp) return reply('Ja esta Desativado')
              pesquisar = from
              processo = antilinkgp.indexOf(pesquisar)
              while (processo >= 0) {
                antilinkgp.splice(processo, 1)
                processo = antilinkgp.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/antilinkgp.json', JSON.stringify(antilinkgp))
              reply(' Desativou com sucesso o recurso de antilink de grupo ')
            } else {
              if (isAntilinkgp) {
                buttons02 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[ ] DESATIVAR [ ]' }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[ ] ATIVAR [ ]' }, type: 1 },
                ]
              }
              buttonMessage02 = {
                text: `╭═─────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐋𝐈𝐍𝐊 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═─────═⌘═────═╯      `,
                footer: `STATUS DO ANTI-LINK AGORA: ${isAntilinkgp ? 'ATIVADO' : 'DESATIVADO'}\n`,
                buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              client.sendMessage(from, buttonMessage02, { quoted: live })
            }
            break

          case 'nuke': case 'arquivargp':
            if (!isOwner) return reply(resposta.dono)
            if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
            if (info.key.fromMe) return
            function banirtodos() {
              var r_banirtodos = Math.floor(Math.random() * groupMembers.length + 0)
              nmrbot = botNumber.split("@")[0]
              var resp = `${groupMembers[r_banirtodos].id.split("@")[0]}`
              if (resp === numeroDono || resp === nmrbot) {
                return
              } else {
                client.groupParticipantsUpdate(from, [resp + "@s.whatsapp.net"], 'remove')
              }
            }
            myinterval = setInterval(banirtodos, 1000)
            if (groupMembers.length <= 2) {
              clearInterval(myinterval);
            }
            break


          case 'status':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            statuszada = `╔━━❲ 𝐒 𝐓 𝐀 𝐓 𝐔 𝐒 ❳━━╗ 
      ┃ Anti video = ${isAntiVid ? 'ON' : 'OFF'}
      ┃ Anti img = ${isAntiImg ? 'ON' : 'OFF'}
      ┃ Anti áudios = ${isAntiAudio ? 'ON' : 'OFF'}
      ┃ Anti sticker = ${isAntiSticker ? 'ON' : 'OFF'}
      ┃ Anti pv block = ${isAntiPv ? 'ON' : 'OFF'}
      ┃ Anti documentos = ${Antidoc ? 'ON' : 'OFF'}
      ┃ Auto ban lista negra = ${islista ? 'ON' : 'OFF'}
      ┃ Anti link grupo = ${isAntilinkgp ? 'ON' : 'OFF'}
      ┃ Bem vindo = ${isWelkom ? 'ON' : 'OFF'}
      ╚━━━━━━━━━━━━╝`
            client.sendMessage(from, { image: { url: logo }, caption: statuszada, thumbnail: null })
            break


          case 'bemvindo':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply("Apenas Grupos")
            if (!isGroupAdmins) return reply("Somente Admnistradores")
            if (!isBotGroupAdmins) return reply("Bot Necessita ser Admin")
            if (Number(args[0]) === 1) {
              if (isWelkom) return reply('Ja Esta Ativo')
              welkom.push(from)
              fs.writeFileSync('./functions/welkom.json', JSON.stringify(welkom))
              reply('Ativado Com Sucesso Recurso Boas-Vindas Ativado no Grupo 📝')
            } else if (Number(args[0]) === 0) {
              if (!isWelkom) return reply('Recurso ja DEsativado')
              pesquisar = from
              processo = welkom.indexOf(pesquisar)
              while (processo >= 0) {
                welkom.splice(processo, 1)
                processo = welkom.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/welkom.json', JSON.stringify(welkom))
              reply('Desativado Com Sucesso Recurso Boas-Vindas Ativado no Grupo✔️')
            } else {
              reply("Digite 1 Para Ativar e 0 Para Desativar.")
            }
            break

          case 'autoban':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (args.length < 1) return reply('Para Ativar Digite 1 e Para Desativar Digite 0')
            if (Number(args[0]) === 1) {
              if (islista) return reply("Recurso ja Ativado")
              var ind = dbids.indexOf(from)
              if (islista) {
                lista[ind].actived = true
              } else {
                lista.push({
                  groupId: from,
                  actived: true,
                  number: []
                })
              }
              fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
              reply(` Ativou com sucesso o recurso de autoban neste grupo `)
            } else if (Number(args[0]) === 0) {
              if (!islista) return reply("🥋Já está Desativado.🥋")
              var ind = dbids.indexOf(from)
              if (islista) {
                lista[ind].actived = false
              } else {
                lista.push({
                  groupId: from,
                  actived: false,
                  number: []
                })
              }
              fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
              reply(` Desativou com sucesso o recurso de autoban neste grupo `)
            } else {
              reply('1 para ativar, 0 para desativar')
            }
            break


          case 'listban':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            var ind = dbids.indexOf(from)
            if (!islista) return reply('Nenhum Número não foi adicionado')
            teks = ' Números que vou moer na porrada se voltar 😡\n'
            for (i = 0; i < lista[ind].number.length; ++i) {
              teks += `➤ *${lista[ind].number[i]}*\n`
            }
            teks += '*Esses ai vou descer meu martelo do ban 🥵*'
            reply(teks)
            break


          case 'addlistanegra':
          case 'addlista':
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (args.length < 1) return reply('Cade o número?')
            var ind = dbids.indexOf(from)
            if (islista) {
              listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
              var numind = lista[ind].number.indexOf(listng)
              if (numind >= 0) return reply(' este Número ja esta incluso ')
              lista[ind].number.push(listng)
            } else {
              listng = q.replace(new RegExp("[()+-/ +/]", "gi"), "")
              lista.push({
                groupId: from,
                actived: false,
                number: [listng]
              })
            }
            fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
            reply(` Número adicionado a lista de autoban com sucesso  `)
            break

          case 'dellistanegra':
          case 'dellista':
          case 'rlista':
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (args.length < 1) return reply(' Diga o numero sem espaço, + ou traço ')
            if (isNaN(args[0])) return reply(' Diga o numero sem espaço, + ou traço ')
            var ind = dbids.indexOf(from)
            if (!islista) return reply('Nenhum Número não foi adicionado')
            var numind = lista[ind].number.indexOf(args[0])
            if (numind < 0) return reply(' Esse número não está incluso na lista de autoban😑')
            lista[ind].number.splice(numind, 1)
            fs.writeFileSync('./functions/lista.json', JSON.stringify(lista, null, 2) + '\n')
            reply(`Número removido a lista de autoban com sucesso  `)
            break

          case 'linkgp':
          case 'linkgroup':
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isGroup) return reply(resposta.grupo)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            let metadata = await client.groupMetadata(from)
            linkgc = await client.groupInviteCode(from)
            reply(` ${metadata.participants.length ? metadata.participants.length : "undefined"} PARTICIPANTES DO GRUPO    LINK DO GRUPO            ${groupMetadata.subject} https://chat.whatsapp.com/` + linkgc)
            break

          case 'promover':
          case 'promote':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroupAdmins) return reply(' Só ADM pode utilizar este comando ')
            if (!isBotGroupAdmins) return reply(' O Bot Precisa ser ADM pra executar esse comando .')

            if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply(' Marque ou responda a mensagem de quem você quer promover ')
            mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
            if (botNumber.includes(mentioned)) return reply("😑")

            let responsedm = await client.groupParticipantsUpdate(from, [mentioned], 'promote')
            if (responsedm[0].status === "200") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} Foi Promovido a Administrador.️`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
            else if (responsedm[0].status === "404") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} Não é Mais Administrador`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
            else client.sendMessage(from, { text: `😥Parece que deu erro😥️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
            break

          case "rebaixar":
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm);
            if (!isBotGroupAdmins) return reply(resposta.botadm);
            if (
              info.message.extendedTextMessage === undefined ||
              info.message.extendedTextMessage === null
            )
              return reply(
                " Marque ou responda a mensagem de quem você quer tirar o admin "
              );
            mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
              ? info.message.extendedTextMessage.contextInfo.mentionedJid[0]
              : info.message.extendedTextMessage.contextInfo.participant;
            if (botNumber.includes(mentioned))
              return reply("😑 marque outra pessoa");
            let responsepm = await client.groupParticipantsUpdate(
              from,
              [mentioned],
              "demote"
            );
            if (responsepm[0].status === "406")
              client.sendMessage(from, {
                text: `@${mentioned.split("@")[0]
                  } criou esse grupo e não pode ser removido(a) da lista de admins.️`,
                mentions: [mentioned, sender],
                contextInfo: { forwardingScore: 999, isForwarded: true },
              });
            else if (responsepm[0].status === "200")
              client.sendMessage(from, {
                text: `@${mentioned.split("@")[0]} 😥não e mais adm do grupo😥`,
                mentions: [mentioned, sender],
                contextInfo: { forwardingScore: 999, isForwarded: true },
              });
            else if (responsepm[0].status === "404")
              client.sendMessage(from, {
                text: `@${mentioned.split("@")[0]} não está no grupo😑️`,
                mentions: [mentioned, sender],
                contextInfo: { forwardingScore: 999, isForwarded: true },
              });
            else
              client.sendMessage(from, {
                text: `Parece que deu erro️`,
                mentions: [sender],
                contextInfo: { forwardingScore: 999, isForwarded: true },
              });
            break;




          case 'sairgp':
            if (isGroup && !isOwner && !info.key.fromMe) return reply(" COMANDO SO PARA DONO ")
            try {
              client.groupLeave(from)
            } catch (erro) {
              reply(String(erro))
            }
            break

          case 'grupo':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(`SÓ EM GRUPO`)
            if (!isGroupAdmins) return reply(`PRECISA SER ADMININASTROR`)
            if (!isBotGroupAdmins) return reply(`BOT PREPRECISA SER ADMININASTROR`)
            if (args[0] === 'a') {
              reply(`*GRUPO ABERTO COM SUCESSO*`)
              await client.groupSettingUpdate(from, 'not_announcement')
            } else if (args[0] === 'f') {
              reply(`*GRUPO FECHADO COM SUCESSO*`)
              await client.groupSettingUpdate(from, 'announcement')
            }
            break

          case 'novolink':
          case 'redefinir':
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isGroup) return reply(resposta.grupo)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            try {
              await client.groupRevokeInvite(from)
              reply(' LINK DO GRUPO REDEFINIDO ')
            } catch (e) {
              console.log(e)
              reply(`ERRO`)
            }
            break

          case 'setfotogp':
          case 'fotogp':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(' ESTE COMANDO SO PODE SER UTILIZANDO EM GRUPO ')
            if (!isGroupAdmins) return reply(' COMANDO SO PARA ADM ')
            if (!isBotGroupAdmins) return reply(' O BOT PRECISA SER ADM ')
            if (!isQuotedImage) return reply(`Use: ${prefix + command} Marque uma foto`)
            ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
            rane = getRandom('.' + await getExtension(ftgp.mimetype))
            buffimg = await getFileBuffer(ftgp, 'image')
            fs.writeFileSync(rane, buffimg)
            medipp = rane
            await client.updateProfilePicture(from, { url: medipp })
            reply(` FOTO DO GRUPO ALTERADA COM SUCESSO `)
            break

          case 'nomegp':
            {
              if (!isGroup) return reply(resposta.grupo)
                if (!isOwner) return reply(resposta.dono)
                  if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
              if (!isBotGroupAdmins) return reply(resposta.botadm)
              blat = args.join(" ")
              client.groupUpdateSubject(from, `${blat}`)
              client.sendMessage(from, { text: ' NOME DO GRUPO ALTERADO COM SUCESSO  ' }, { quoted: info }).catch(() => {
                reply(`erro`);
              })
            }
            break

          case 'descgp':
          case 'descriçãogp':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            blabla = args.join(" ")
            client.groupUpdateDescription(from, `${blabla}`)
            client.sendMessage(from, { text: 'Sucesso, alterou a descrição do grupo' }, { quoted: info })
            break


          case 'setfotogp':
          case 'fotogp':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply('Só pode ser utilizado em Grupo')
            if (!isGroupAdmins) return reply('Você precisa ser ADM')
            if (!isBotGroupAdmins) return reply('O bot Precisa ser ADM')
            if (!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
            ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
            rane = getRandom('.' + await getExtension(ftgp.mimetype))
            buffimg = await getFileBuffer(ftgp, 'image')
            fs.writeFileSync(rane, buffimg)
            medipp = rane
            await client.updateProfilePicture(from, { url: medipp })
            reply(`Foto do grupo alterada com sucesso`)
            break 

            case 'gpt4':
  if (!q) return reply('Por favor, forneça um texto para a API.');

  try {
    console.log('Chamando API GPT-4 com texto:', q);

    const response = await fetch(`http://node2.nooxhosting.cloud:2001/api/gpt4?text=${encodeURIComponent(q)}&username=Teruya&apikey=YJB77PoV`);
    const data = await response.json();

    console.log('Resposta da API GPT-4:', data);

    if (data && data.resultado) {
      reply(data.resultado);
    } else {
      reply('Erro ao obter resposta da API GPT-4.');
    }
  } catch (error) {
    console.error('Erro ao chamar a API GPT-4:', error);
    reply('Erro ao chamar a API GPT-4.');
  }
  break;


  case 'pin':
    if (!isOwner) return reply(resposta.dono)
  if (!q) return reply('Por favor, forneça um texto para a API.');

  try {
    console.log('Chamando API PIN com texto:', q);

    const response = await fetch(`http://node2.nooxhosting.cloud:2001/api/pin?username=Teruya&apikey=YJB77PoV&query=${encodeURIComponent(q)}`);

    if (!response.ok) throw new Error(`Erro na resposta da API: ${response.statusText}`);

    const arrayBuffer = await response.arrayBuffer();
    const imageBuffer = Buffer.from(arrayBuffer);

    await client.sendMessage(from, { image: imageBuffer, caption: 'Aqui está a imagem gerada:' }, { quoted: info });

  } catch (error) {
    console.error('Erro ao chamar a API PIN:', error);
    reply('Erro ao chamar a API PIN.');
  }
  break;
  


  


          case 'fotobot':
            if (!isOwner) return reply(resposta.dono)
            if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
            buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
            await client.updateProfilePicture(botNumber, buff)
            reply('Obrigado pelo novo perfil vlw')
            break


          case 'autofig-gp':
          case 'autofig':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo);
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm);
            if (!isBotGroupAdmins) return reply(resposta.botadm);
            if (Number(args[0]) === 1) {
              if (isAutoSticker) return reply('Já está ativo');
              autosticker.push(from);
              fs.writeFileSync('./functions/autosticker.json', JSON.stringify(autosticker));
              reply('  Ativou com sucesso o recurso de auto fig  ');
            } else if (Number(args[0]) === 0) {
              if (!isAutoSticker) return reply('Já está desativado');
              pesquisar = from;
              processo = autosticker.indexOf(pesquisar);
              while (processo >= 0) {
                autosticker.splice(processo, 1);
                processo = autosticker.indexOf(pesquisar);
              }
              fs.writeFileSync('./functions/autosticker.json', JSON.stringify(autosticker));
              reply('  Desativou com sucesso o recurso de auto fig de grupo  ');
            }
            break;


          case 'autoreação':
          case 'autoreacao':
          case 'autoreact':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (Number(args[0]) === 1) {
              if (isAutoReact) return reply('Já está ativado')
              autoreact.push(from)
              fs.writeFileSync('./functions/autoreact.json', JSON.stringify(autoreact))
              reply('[ ] Ativou com sucesso o recurso de auto reação neste grupo [ ]')
            } else if (Number(args[0]) === 0) {
              if (!isAutoReact) return reply('Já está desativado')
              pesquisar = from
              processo = autoreact.indexOf(pesquisar)
              while (processo >= 0) {
                autoreact.splice(processo, 1)
                processo = autoreact.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/autoreact.json', JSON.stringify(autoreact))
              reply(' Desativou com sucesso o recurso de auto reação nesse grupo ')
            } else {
              if (isAutoReact) {
                buttons02 = [{ buttonId: `${prefix + command} 0`, buttonText: { displayText: '[ ] DESATIVAR[ ]' }, type: 1 }]
              } else {
                buttons02 = [{ buttonId: `${prefix + command} 1`, buttonText: { displayText: '[ ] ATIVAR [ ]' }, type: 1 }]
              }
              buttonMessage02 = {
                text: `╭═─────═⌘═────═╮   
    👑 𝐀𝐔𝐓𝐎 𝐑𝐄𝐀ÇÃ𝐎 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═─────═⌘═────═╯`,
                footer: `STATUS DO AUTO-REACT AGORA ${isAutoReact ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              client.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break

          case 'antisticker':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiSticker) return reply('Já Esta ativo')
              antisticker.push(from)
              fs.writeFileSync('./functions/antisticker.json', JSON.stringify(antisticker))
              reply(' Ativou com sucesso o recurso de anti-sticker nesse grupo ')
            } else if (Number(args[0]) === 0) {
              if (!isAntiSticker) return reply('Ja esta Desativado.')
              antisticker.splice(from, 1)
              fs.writeFileSync('./functions/antisticker.json', JSON.stringify(antisticker))
              reply(' Desativou com sucesso o recurso de anti-sticker nesse grupo  ')
            } else {
              if (isAntiSticker) {
                buttons02 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[ ] DESATIVAR [ ]' }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[ ] ATIVAR [ ]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═─────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 STICKER 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═─────═⌘═────═╯
  `,
                footer: `STATUS DO ANTI-STICKER AGORA:${isAntiSticker ? 'ATIVADO' : 'DESATIVAR'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              client.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break

          case 'leave':
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            const leaveMessage = {
              text: `O bot saiu do grupo: ${groupName}`,
              footer: `${nomeBot}`,
              headerType: 1
            }

            client.sendMessage(from, leaveMessage)
            client.leaveGroup(groupId)
            break

          case 'mute':
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            const muteMessage = {
              text: `O bot silenciou o grupo: ${groupName}`,
              footer: `${nomeBot}`,
              headerType: 1
            }

            client.sendMessage(from, muteMessage)
            client.groupSettingChange(groupId, GroupSettingChange.messageSend, false)
            break

          case 'unmute':
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            const unmuteMessage = {
              text: `O bot destilenciou o grupo: ${groupName}`,
              footer: `${nomeBot}`,
              headerType: 1
            }

            client.sendMessage(from, unmuteMessage)
            client.groupSettingChange(groupId, GroupSettingChange.messageSend, true)
            break
          case 'antiimg':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiImg) return reply('Já Esta ativo')
              antiimg.push(from)
              fs.writeFileSync('./functions/antiimg.json', JSON.stringify(antiimg))
              reply(' ativou com sucesso o recurso de anti imagem nesse grupo ')
            } else if (Number(args[0]) === 0) {
              if (!isAntiImg) return reply('Ja esta Desativado.')
              antiimg.splice(from, 1)
              fs.writeFileSync('./functions/antiimg.json', JSON.stringify(antiimg))
              reply(' Desativou com sucesso o recurso de anti imagem nesse grupo ')
            } else {
              if (isAntiImg) {
                buttons002 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[ ] DESATIVAR [ ]' }, type: 1 }
                ]
              } else {
                buttons002 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[ ] ATIVAR [ ]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═─────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐈𝐌𝐀𝐆𝐄𝐌 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═─────═⌘═────═╯`,
                footer: `STATUS DO ANTI-IMG AGORA:${isAntiImg ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons002,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              client.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break

      // ====== COMEÇO DAS CASES LOGOS ======     

case 'sampp':///cases by Pedrozz_Mods
if (!isPremium) return reply(resposta.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply('aguarde')
pedrozz1 = await getBuffer(`
https://teruyaah12.sirv.com/samp.jpg?text.0.text=${teks}&text.0.position.gravity=west&text.0.position.y=43%25&text.0.size=100&text.0.color=F4A460&text.0.font.family=Bangers&text.0.outline.color=000000&text.0.outline.width=4&text.0.outline.blur=100
`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: info })
break


case 'velho':///cases by Pedrozz_Mods
if (!isPremium) return reply(resposta.premium)
if (args.length < 1) return reply('❕Cade o texto?')
teks = body.slice(7)
if (teks.length > 20) return reply('❕O texto é longo, até 20 caracteres')
reply('aguarde')
pedrozz1 = await getBuffer(`
https://teruyaah12.sirv.com/velho.png?text.0.text=${teks}&text.0.position.gravity=west&text.0.position.y=-40%25&text.0.size=100&text.0.color=2F4F4F&text.0.font.family=Verdana&text.0.outline.color=000000&text.0.outline.width=4&text.0.outline.blur=100`)
client.sendMessage(from, { image: pedrozz1 }, { quoted: vid })
break

// ====== FIM DAS CASES LOGOS ======

          case "gp":
          case "msgdiretagp": {
            texto = args.join(' ')
            texto1 = texto.split('/')[0] || 'Indefinido'
            texto2 = texto.split('/')[1] || 'Indefinido'
            if (!isOwner) return
            if (!texto.includes("/")) return reply(`Digite o texto que vai aparecer Exemplo: /msgdireta iddogp/TXT
  tem que ter a / e o id do grupo destinado senão não vai.`)
            let buttonMessage = {
              image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=Mensagem%20Gestão:&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=25&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${pushname}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` },
              caption: (`${texto2}`),
              footer: ` `,
              headerType: 4
            }
            client.sendMessage(`${texto1}@g.us`, buttonMessage)
            reply("Mensagem enviada para o grupo")
          }
            break

          case 'tagall':
          case 'marcar': {
            if (!isGroup) return reply(resposta.group)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            let metadata = await client.groupMetadata(from)
            let teks = `
  \n ${metadata.participants.length ? metadata.participants.length : "undefined"} participantes do grupo
  \n ${args.join(" ") ? args.join(" ") : 'Mensagem Nula'}*\n\n`
            for (let mem of participants) {
              teks += `┃❖┃@${mem.id.split('@')[0]}\n`
            }
            client.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: live })
          }
            break

          case 'antivideo':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiVid) return reply('Ja esta ativo🤝')
              antivid.push(from)
              fs.writeFileSync('./functions/antivideo.json', JSON.stringify(antivid))
              reply(' Ativou com sucesso o recurso de anti video neste grupo✔ ')
            } else if (Number(args[0]) === 0) {
              if (!isAntiVid) return reply('Ja esta Desativado')
              antivid.splice(from, 1)
              fs.writeFileSync('./functions/antivideo.json', JSON.stringify(antivid))
              reply(' Desativou com sucesso o recurso de anti video neste grupo ')
            } else {
              if (isAntiVid) {
                buttons02 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[ ] DESATIVAR [ ]' }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[ ] ATIVAR [ ]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═─────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐕𝐈𝐃𝐄𝐎 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═─────═⌘═────═╯ `,
                footer: `STATUS DO ANTIVIDEO AGORA: ${isAntiVid ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              client.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break

          case 'antiaudio':
            if (!isGroup) return reply(respostagrupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (Number(args[0]) === 1) {
              if (isAntiAudio) return reply('🤝Ja esta ativo🤝')
              antiaudio.push(from)
              fs.writeFileSync('./functions/antiaudio.json', JSON.stringify(antiaudio))
              reply(' Ativou com sucesso o recurso de anti audio neste grupo ')
            } else if (Number(args[0]) === 0) {
              if (!isAntiAudio) return reply('🤝Ja esta Desativado🤝')
              antiaudio.splice(from, 1)
              fs.writeFileSync('./functions/antiaudio.json', JSON.stringify(antiaudio))
              reply(' Desativou com sucesso o recurso de anti audio neste grupo ')
            } else {
              if (isAntiAudio) {
                buttons02 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[ ] DESATIVAR [ ]' }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[ ] ATIVAR [ ]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═──────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐀𝐔𝐃𝐈𝐎👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═──────═⌘═────═╯
  `,
                footer: `STATUS DO ANTI-AUDIO: AGORA ${isAntiAudio ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              client.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break
            case "playaudio":
              case 'play':
                if (!isOwner) return reply(resposta.dono)
                if (!q) return reply('Coloque o nome da musica também')
                  api = await fetchJson(`http://node2.nooxhosting.cloud:2001/download/play?username=Teruya&apikey=YJB77PoV&nome=${q}`)
                  play = `
                  Titulo: ${api.resultado.title}
                  Canal: ${api.resultado.channel}
                  Vizu: ${api.resultado.views} 
                  `
                  client.sendMessage(from, {image: {url: api.resultado.thumb }, caption: play})
                  client.sendMessage(from, { audio: { url: api.resultado.link }, mimetype: 'audio/mpeg' }, { quoted: info })

                  break
          case 'antidocumento':
          case 'antidoc':
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (Number(args[0]) === 1) {
              if (Antidoc) return reply(' Ja esta ativo ')
              antidoc.push(from)
              fs.writeFileSync('./functions/antidoc.json', JSON.stringify(antidoc))
              reply(' Ativou com sucesso o recurso de anti documento neste grupo  ')
            } else if (Number(args[0]) === 0) {
              if (!Antidoc) return reply(' Ja esta Desativado ')
              pesquisar = from
              processo = antidoc.indexOf(pesquisar)
              while (processo >= 0) {
                antidoc.splice(processo, 1)
                processo = antidoc.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/antidoc.json', JSON.stringify(antidoc))
              reply(' Desativou com sucesso o recurso de anti documento neste grupo ')
            } else {
              if (Antidoc) {
                buttons02 = [
                  { buttonId: `${prefix + command} 0`, buttonText: { displayText: '[ ] DESATIVAR [ ]' }, type: 1 }
                ]
              } else {
                buttons02 = [
                  { buttonId: `${prefix + command} 1`, buttonText: { displayText: '[ ] ATIVAR [ ]' }, type: 1 }
                ]
              }
              buttonMessage02 = {
                text: `╭═──────═⌘═────═╮   
    👑 𝐀𝐍𝐓𝐈 𝐃𝐎𝐂𝐔𝐌𝐄𝐍𝐓𝐎 👑
    
    𝐔𝐒𝐔Á𝐑𝐈𝐎: ${pushname}
    
    
    𝐆𝐑𝐔𝐏𝐎: ${groupName}
  ╰═──────═⌘═────═╯      
  `,
                footer: `STATUS DO ANTIDOC AGORA:${Antidoc ? 'ATIVADO' : 'DESATIVADO'}\n`,
                //buttons: buttons02,
                headerType: 4,
                contextInfo: { forwardingScore: 999, isForwarded: true }
              }
              client.sendMessage(from, buttonMessage02, { quoted: info })
            }
            break

          case 'antipv':
            if (!isOwner) return reply(`Apenas dono pode ativar/desativar essa função..`)
            if (args.length < 1) return reply('1 pra ligar / 0 pra desligar')
            if (Number(args[0]) === 1) {
              if (isAntiPv) return reply('Ja esta ativo')
              antipv.push('Ativado')
              fs.writeFileSync('./functions/antipv.json', JSON.stringify(antipv))
              reply('🌀 Ativou com sucesso o recurso de Anti Privado 📝')
            } else if (Number(args[0]) === 0) {
              if (!isAntiPv) return reply('Ja esta Desativado')
              pesquisar = 'Ativado'
              processo = antipv.indexOf(pesquisar)
              while (processo >= 0) {
                antipv.splice(processo, 1)
                processo = antipv.indexOf(pesquisar)
              }
              fs.writeFileSync('./functions/antipv.json', JSON.stringify(welkom))
              reply('‼️ Desativou com sucesso o recurso De ANTIPV✔️')
            } else {
              enviar('1 para ativar, 0 para desativar')
            }
            break

          case 'fstiker':
          case 'fsticker':
          case 'f':
          case 's':
          case 'stickergif':
          case "sticker":
          case 'sgif':
          case 'figu':
          case 'st':
          case 'stk':
            if (!isOwner) return reply(resposta.dono)
            {
              (async function () {
                var legenda = q ? q?.split("/")[0] : ` `
                var autor = q ? q?.split("/")[1] : q?.split("/")[0] ? '' : `  `
                if (isMedia && !info.message.videoMessage || isQuotedImage) {
                  var encmedia = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
                  rane = getRandom('.' + await getExtension(encmedia.mimetype))
                  buffimg = await getFileBuffer(encmedia, 'image')
                  fs.writeFileSync(rane, buffimg)
                  rano = getRandom('.webp')
                  exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, () => {
                    fs.unlinkSync(rane)
                    // "android-app-store-link": "https://play.google.com/store/search?q=%2B55%2094%209147-2796%20%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5%F0%9F%94%A5&c=apps",
                    var json = {
                      "sticker-pack-name": legenda,
                      "sticker-pack-publisher": autor
                    }
                    var exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                    var jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                    var exif = Buffer.concat([exifAttr, jsonBuff])
                    exif.writeUIntLE(jsonBuff.length, 14, 4)
                    let nomemeta = Math.floor(Math.random() * (99999 - 11111 + 1) + 11111) + ".temp.exif"
                    fs.writeFileSync(`./${nomemeta}`, exif)
                    exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                      client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                      fs.unlinkSync(nomemeta)
                      fs.unlinkSync(rano)
                    })
                  })
                } else if (isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 35) {
                  var encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
                  rane = getRandom('.' + await getExtension(encmedia.mimetype))
                  buffimg = await getFileBuffer(encmedia, 'video')
                  fs.writeFileSync(rane, buffimg)
                  rano = getRandom('.webp')
                  await ffmpeg(`./${rane}`)
                    .inputFormat(rane.split('.')[1])
                  exec(`ffmpeg -i ${rane} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, () => {
                    fs.unlinkSync(rane)
                    let json = {
                      "sticker-pack-name": legenda,
                      "sticker-pack-publisher": autor
                    }
                    let exifAttr = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00, 0x16, 0x00, 0x00, 0x00])
                    let jsonBuff = Buffer.from(JSON.stringify(json), "utf-8")
                    let exif = Buffer.concat([exifAttr, jsonBuff])
                    exif.writeUIntLE(jsonBuff.length, 14, 4)
                    let nomemeta = "temp.exif"
                    fs.writeFileSync(`./${nomemeta}`, exif)
                    exec(`webpmux -set exif ${nomemeta} ${rano} -o ${rano}`, () => {
                      client.sendMessage(from, { sticker: fs.readFileSync(rano) }, { quoted: info })
                      fs.unlinkSync(nomemeta)
                      fs.unlinkSync(rano)
                    })
                  })
                } else {
                  reply(`Você precisa enviar ou marcar uma imagem ou vídeo com no máximo 10 segundos`)
                }
              })().catch(e => {
                console.log(e)
                reply("Hmm deu erro")
                try {
                  if (fs.existsSync("temp.exif")) fs.unlinkSync("temp.exif");
                  if (fs.existsSync(rano)) fs.unlinkSync(rano);
                  if (fs.existsSync(media)) fs.unlinkSync(media);
                } catch { }
              })
            }
            break

            case 'menuadm':{
              if (!isOwner) return reply(resposta.dono)
            if(!isGroup){ 
            const buttonMessage = {
            image: {url: "https://telegra.ph/file/063c5b8fb16d35f285bec.jpg"},
            caption:  `
            ╭───╮ 〘 MENU ADMIN 〙
            │
            ├── Configurações de Grupo:
            │   ├── ${prefix}antilink 1/0       - AutoBan Links
            │   ├── ${prefix}bemvindo 1/0       - Boas-Vindas
            │   ├── ${prefix}antiaudio 1/0      - AutoBan Áudios
            │   ├── ${prefix}antivideo 1/0      - AutoBan Vídeos
            │   ├── ${prefix}antiimg 1/0        - AutoBan Imagens
            │   ├── ${prefix}antisticker 1/0    - AutoBan Stickers
            │   ├── ${prefix}autoreacao         - Auto-React
            │   ├── ${prefix}autofig 1/0        - Auto Stickers
            │
            ├── Gerenciamento de Mensagens:
            │   ├── ${prefix}marcar             - Mencionar Todos
            │   ├── ${prefix}hidetag            - Mencionar Invisível
            │   ├── ${prefix}delete             - Deletar Bot Msg
            │
            ├── Administração de Grupo:
            │   ├── ${prefix}descgp             - Alterar Descrição
            │   ├── ${prefix}nomegp             - Alterar Nome
            │   ├── ${prefix}fotogp             - Alterar Ícone
            │   ├── ${prefix}novolink           - Redefinir Link
            │   ├── ${prefix}grupo f/a          - Fechar/Abrir Grupo
            │   ├── ${prefix}status             - Ver Status
            │   ├── ${prefix}kick @numero       - Remover Membro
            │   ├── ${prefix}linkgp             - Obter Link
            │   ├── ${prefix}promover @numero   - Promover Admin
            │   ├── ${prefix}rebaixar @numero   - Rebaixar Admin
            │
            ├── Sistema de AutoBan:
            │   ├── ${prefix}rlista             - Remover AutoBan
            │   ├── ${prefix}addlista           - Adicionar AutoBan
            │   ├── ${prefix}listban            - Ver AutoBan
            │   ├── ${prefix}autoban            - Ativar AutoBan
            │
            ╰───╯ 〘 ${nomeBot} 〙
            `,
                footer: ` ${nomeBot} `,
              //  buttons: buttons,
                headerType: 4
            }
            
            client.sendMessage(from, buttonMessage)
            
            
            } else if(isGroup){ 
            client.sendMessage(from, { react: { text: `⌛`, key: info.key }})
            //reply(`${data.resultado}`)
            let buttonMessage4 = {
            image: { url: `https://telegra.ph/file/063c5b8fb16d35f285bec.jpg`},
            caption: `
            ╭───╮ 〘 MENU ADMIN 〙
            │
            ├── Configurações de Grupo:
            │   ├── ${prefix}antilink 1/0       - AutoBan Links
            │   ├── ${prefix}bemvindo 1/0       - Boas-Vindas
            │   ├── ${prefix}antiaudio 1/0      - AutoBan Áudios
            │   ├── ${prefix}antivideo 1/0      - AutoBan Vídeos
            │   ├── ${prefix}antiimg 1/0        - AutoBan Imagens
            │   ├── ${prefix}antisticker 1/0    - AutoBan Stickers
            │   ├── ${prefix}autoreacao         - Auto-React
            │   ├── ${prefix}autofig 1/0        - Auto Stickers
            │
            ├── Gerenciamento de Mensagens:
            │   ├── ${prefix}marcar             - Mencionar Todos
            │   ├── ${prefix}hidetag            - Mencionar Invisível
            │   ├── ${prefix}delete             - Deletar Bot Msg
            │
            ├── Administração de Grupo:
            │   ├── ${prefix}descgp             - Alterar Descrição
            │   ├── ${prefix}nomegp             - Alterar Nome
            │   ├── ${prefix}fotogp             - Alterar Ícone
            │   ├── ${prefix}novolink           - Redefinir Link
            │   ├── ${prefix}grupo f/a          - Fechar/Abrir Grupo
            │   ├── ${prefix}status             - Ver Status
            │   ├── ${prefix}kick @numero       - Remover Membro
            │   ├── ${prefix}linkgp             - Obter Link
            │   ├── ${prefix}promover @numero   - Promover Admin
            │   ├── ${prefix}rebaixar @numero   - Rebaixar Admin
            │
            ├── Sistema de AutoBan:
            │   ├── ${prefix}rlista             - Remover AutoBan
            │   ├── ${prefix}addlista           - Adicionar AutoBan
            │   ├── ${prefix}listban            - Ver AutoBan
            │   ├── ${prefix}autoban            - Ativar AutoBan
            │
            ╰───╯ 〘 ${nomeBot} 〙
            `,
            footer: '',
            //buttons: buttons,
            headerType: 4
            }
            client.sendMessage(from, buttonMessage4, { quoted: info })
            
            }
            }
            break 

case "menupremium":
case "menuvip": {      
  if (!isOwner) return reply(resposta.dono)
            if(!isGroup){ 
              const buttonMessage = {
              image: {url: "https://telegra.ph/file/9f853f4cf4dac8689d3c5.jpg"},
              caption:  `
              ╭───╮ 〘 MENUS VIP 〙
              │
              ├── Recursos:
              │   ├── ${prefix}walpaperanime - Papel de Parede de Anime
              │   ├── ${prefix}encurtalink   - Encurtar Link
              │   ├── ${prefix}clima         - Informações sobre o Clima
              │   ├── ${prefix}getquoted     - Citações Aleatórias
              │   ├── ${prefix}premiumlist   - Lista de Recursos Premium
              │
              ╰───╯ 〘${nomeBot}〙
              `,
                  footer: ` ${nomeBot} `,
                //  buttons: buttons,
                  headerType: 4
              }
              
              client.sendMessage(from, buttonMessage)
              
              
              } else if(isGroup){ 
              client.sendMessage(from, { react: { text: `⌛`, key: info.key }})
              //reply(`${data.resultado}`)
              let buttonMessage4 = {
              image: { url: `https://telegra.ph/file/9f853f4cf4dac8689d3c5.jpg`},
              caption: `
              ╭───╮ 〘 MENUS JOGOS 〙
              │
              │   ├── ${prefix}ppt           - Pedra, Papel, Tesoura
              │   ├── ${prefix}Chance (Texto) - Chance (Texto)
              │   ├── ${prefix}cassino       - Cassino
              │
              ╰───╯ 〘${nomeBot}〙
              `,
              footer: '',
              //buttons: buttons,
              headerType: 4
              }
              client.sendMessage(from, buttonMessage4, { quoted: info })
              
              }
              }
            break

          case "menubrincadeiras":
          case "brincadeira":
            case "jogos":{
              if (!isOwner) return reply(resposta.dono)
                if(!isGroup){ 
                const buttonMessage = {
                image: {url: "https://telegra.ph/file/edcc53f766c2470987fa1.jpg"},
                caption:  `
                ╭───╮ 〘 MENUS JOGOS 〙
                │
                │   ├── ${prefix}ppt           - Pedra, Papel, Tesoura
                │   ├── ${prefix}Chance (Texto) - Chance (Texto)
                │   ├── ${prefix}cassino       - Cassino
                │
                ╰───╯ 〘${nomeBot}〙
                `,
                    footer: ` ${nomeBot} `,
                  //  buttons: buttons,
                    headerType: 4
                }
                
                client.sendMessage(from, buttonMessage)
                
                
                } else if(isGroup){ 
                client.sendMessage(from, { react: { text: `⌛`, key: info.key }})
                //reply(`${data.resultado}`)
                let buttonMessage4 = {
                image: { url: `https://telegra.ph/file/edcc53f766c2470987fa1.jpg`},
                caption: `
                ╭───╮ 〘 MENUS JOGOS 〙
                │
                │   ├── ${prefix}ppt           - Pedra, Papel, Tesoura
                │   ├── ${prefix}Chance (Texto) - Chance (Texto)
                │   ├── ${prefix}cassino       - Cassino
                │
                ╰───╯ 〘${nomeBot}〙
                `,
                footer: '',
                //buttons: buttons,
                headerType: 4
                }
                client.sendMessage(from, buttonMessage4, { quoted: info })
                
                }
                }
                break 

                case 'teste087':
  // Verifica se a mensagem foi recebida de um grupo específico
  if (from === '120363301881302825@g.us') {
    // Se sim, envia o menu
    reply('Menu aqui');
  } else {
    // Se não, envia uma mensagem informando que o comando só pode ser usado no grupo específico
    reply('Este comando só pode ser usado neste grupo específico.');
  }
  break;
  
            case "adm+":
              if (!isSupervisores && !isSuperiores && !isOwner) return reply(resposta.supervisores)
              reply(`
    ╭─⊣〘 ${nomeBot} 〙
    ║
    ╠ ➽𝐔𝐙𝐔𝐀𝐑𝐈𝐎: ${pushname}
    ╠ ➽𝐕𝐄𝐑𝐒Ã𝐎: 1.0
    ╠ ➽𝐍𝐎𝐌𝐄:  ${pushname}
    ║
    ║╭─⊣〘 COMANDOS 〙
    ║
    ┃ ➽${prefix}addsup (Adiciona Um Supervisor)
    ┃ ➽${prefix}delsup (Remove Um Supervisor)
    ┃ ➽${prefix}suplist (Lista de  Supervisores)
    ┃ ➽${prefix}aus (Ausencia Supervisores)
    ┃ ➽${prefix}addsupr (Adiciona Um Superior)
    ┃ ➽${prefix}delsupr (Remove Um Superior)
    ┃ ➽${prefix}suprlist (Lista de  Superiores)
    ║
    ╚════• 〘${nomeBot}〙•═════╝
    `)
  
              break

      
      case "logos":
        if (!isOwner) return reply(resposta.dono)
              reply(`
    ╭─⊣〘 ${nomeBot} 〙
    ║
    ╠ ➽𝐔𝐙𝐔𝐀𝐑𝐈𝐎: ${pushname}
    ╠ ➽𝐕𝐄𝐑𝐒Ã𝐎: 1.0
    ╠ ➽𝐍𝐎𝐌𝐄:  ${pushname}
    ║
    ║╭─⊣〘 COMANDOS 〙
    ┃ ➽${prefix}sampp
    ┃ ➽${prefix}velho
    ║
    ╚════• 〘${nomeBot}〙•═════╝
    `)
  
              break    
            

          case "menufigurinhas":
          case "menufig": {
            if (!isOwner) return reply(resposta.dono)
            if(!isGroup){ 
              const buttonMessage = {
              image: {url: "https://telegra.ph/file/edccbcee95504ead50a3c.jpg"},
              caption:  `
              ╭───╮ 〘 MENUS FIG 〙
              │
              │   ├── ${prefix}sticker  - Converter Imagem em Sticker
              │   ├── ${prefix}roubar   - Roubar Sticker de Outro Pacote
              │   ├── ${prefix}rename   - Renomear Sticker
              │
              ╰───╯ 〘${nomeBot}〙
              `,
                  footer: ` ${nomeBot} `,
                //  buttons: buttons,
                  headerType: 4
              }
              
              client.sendMessage(from, buttonMessage)
              
              
              } else if(isGroup){ 
              client.sendMessage(from, { react: { text: `⌛`, key: info.key }})
              //reply(`${data.resultado}`)
              let buttonMessage4 = {
              image: { url: `https://telegra.ph/file/edccbcee95504ead50a3c.jpg`},
              caption: `
              ╭───╮ 〘 MENUS FIG 〙
              │
              │   ├── ${prefix}sticker  - Converter Imagem em Sticker
              │   ├── ${prefix}roubar   - Roubar Sticker de Outro Pacote
              │   ├── ${prefix}rename   - Renomear Sticker
              │
              ╰───╯ 〘${nomeBot}〙
              
              `,
              footer: '',
              //buttons: buttons,
              headerType: 4
              }
              client.sendMessage(from, buttonMessage4, { quoted: info })
              
              }
              }
              break 

          case 'rename':
          case 'roubar':
            if (!isOwner) return reply(resposta.dono)
            if (!isQuotedSticker) return reply('Marque uma figurinha...')
            encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
            var kls = q
            var pack = kls.split("/")[0];
            var author2 = kls.split("/")[1];
            if (!q) return reply('*E o autor e o nome do pacote?*')
            if (!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
            if (!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
            bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
            var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
            var sti = new Buffer.from(mantap, 'base64');
            client.sendMessage(from, { sticker: sti, contextInfo: { externalAdReply: { title: `${pack}|${author2}`, body: "", previewType: "PHOTO", thumbnail: sti } } }, { quoted: live })
              .catch(() => {
                reply(`❎ Error, tenta mais tarde`);
              })
            break

          case 'emoji': {
            if (!isOwner) return reply(resposta.dono)
            if (!args.join(" ")) return reply('CADÊ O EMOJI?')
            emoji.get(args.join(" ")).then(async (emoji) => {
              await client.sendMessage(from, { text: `!s` }, { quoted: live })
            }).catch(() => {
              reply("EMOJI NÃO ENCONTRADO, TENTE OUTRO EMOJI AÍ...")
            })
          }
            break

          //CASSINO
          case 'cassino':
            if (!isOwner) return reply(resposta.dono)
    const symbols = [
        '🍊 : 🍒 : 🍐',
        '🍒 : 🔔 : 🍊',
        '🍇 : 🍇 : 🍇',
        '🍊 : 🍋 : 🔔',
        '🔔 : 🍒 : 🍐',
        '🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : ??',
        '🍐 : 🍒 : 🍋',
        '🍐 : 🍐 : 🍐',
        '🍊 : 🍒 : 🍒',
        '🔔 : 🔔 : 🍇',
        '🍌 : 🍒 : 🔔',
        '🍐 : 🔔 : 🔔',
        '🍊 : 🍋 : 🍒',
        '🍋 : 🍋 : 🍌',
        '🔔 : 🔔 : 🍇',
        '🔔 : 🍐 : 🍇',
        '🔔 : 🔔 : 🔔',
        '🍒 : 🍒 : 🍒',
        '🍌 : 🍌 : 🍌'
    ];

    const winningCombos = [
        '🍊 : 🍊 : 🍊',
        '🍒 : 🍒 : 🍒',
        '🍇 : 🍇 : 🍇',
        '🍐 : 🍐 : 🍐',
        '🔔 : 🔔 : 🔔',
        '🍋 : 🍋 : 🍋',
        '🍌 : 🍌 : 🍌'
    ];

    const randomIndex = Math.floor(Math.random() * symbols.length);
    const result = symbols[randomIndex];
    const isWinning = winningCombos.includes(result);

    const meessage = isWinning ? "Você ganhou 🔮" : "Você perdeu...";
    
    const casinoMessage = {
        text: `
╔═════🥇═════╗
┣► ${result} ◄┛
╚═════🥇═════╝

*${meessage}*`,
        footer: `${nomeBot}`,
        headerType: 1
    };

    client.sendMessage(from, casinoMessage);

    if (isWinning) {
        reply('Parabéns');
    }
    break;

          case 'chance':
            if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply('Só pode ser utilizado este comando, em grupo.')
            if (args.length < 1) return client.sendMessage(from, { text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance de ganhar na Loteria+` }, { quoted: info })
            random = `${Math.floor(Math.random() * 100)}`
            hasil = `A chance ${body.slice(8)}\n\né de... ${random}%`
            await client.sendMessage(from, { text: hasil, contextInfo: { mentionedJid: [sender] } }, { quoted: info })
            break


          case 'getquoted':
          case 'getinfo':
          case 'get':
            if (!isPremium) return reply(resposta.premium)
            reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
            break

          case 'encurtalink':
            if (!isPremium) return reply(resposta.premium)
            if (args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://www.youtube.com/channel/UCgKrNnrbNPJIOjJOgIXe1vQ`)
            try {
              link = args[0]
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
              reply(`${anu.data}`)
            } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
            await limitAdd(sender)
            break



case 'menu':{
  if (!isOwner) return reply(resposta.dono)
  var tipo = '🧔 MEMBRO 🧔';

if (isOwner) {
    tipo = 'Creator 🛐';
} else if (isPremium) {
    tipo = 'Vip 🤴';
} else if (isSupervisor) {
    tipo = 'Supervisor 👨‍💼';
} else if (isSuperior) {
    tipo = 'Superior 👑';
} else if (isGroupAdmins) {
    tipo = 'Admin do Grupo 👮🏻‍♀️';
}
//client.sendMessage(from, { react: { text: `⌛`, key: info.key }})
var download = [
  `〘▒▒▒▒▒▒▒▒▒▒〙0%`,
  `〘█▒▒▒▒▒▒▒▒▒〙10%`,
  `〘███▒▒▒▒▒▒▒〙35%`,
  `〘█████▒▒▒▒▒〙51%`,
  `〘███████▒▒▒〙62%`,
  `〘████████▒▒〙80%`,
  `〘██████████〙100%`,
  `*Bem Vindo(a) ao menu 💜*`
]
let { key } = await client.sendMessage(from, { text: `Ola @${pushname}` }, { quoted: info })
await delay(1000)
for (let i = 0; i < download.length; i++) {
  await client.sendMessage(from, { text: download[i], edit: key }, { quoted: info })
}

await delay(50)

if(!isGroup){ 
const buttonMessage = {
image: {url: "https://telegra.ph/file/c7dcd2ac2bcc5df6bb023.jpg"},
caption:  `
╭───╮ 〘 ${nomeBot} 〙
│   Usuario: ${pushname}
│   Você é: ${tipo}
│   Level: ${getLevel}
│   Patente: ${role}
│   Versão: 1.0.0
╰───╯

╭───╮ 〘 MENUS 〙
│
├── Menu Principal:
│   ├── ${prefix}Menubrincadeiras  - Brincadeiras
│   ├── ${prefix}Menuadm           - Administração
│   ├── ${prefix}Menupremium       - Recursos Premium
│   ├── ${prefix}Menufig           - Figurinhas
│   ├── ${prefix}Menudownload      - Downloads
│   ├── ${prefix}Menudono          - Opções do Dono
│
├── Adicionais:
│   ├── ${prefix}anagrama          - Anagrama
│   ├── ${prefix}ppt               - Pedra, Papel, Tesoura
│   ├── ${prefix}jokenpo           - Jokenpô
│   ├── ${prefix}adivinhação       - Adivinhação
│   ├── ${prefix}convite           - Gerar Convite
│   ├── ${prefix}ping              - Ping
│   ├── ${prefix}perfil            - Perfil
│   ├── ${prefix}correio           - Correio
│   ├── ${prefix}clima             - Clima
│   ├── ${prefix}level             - Ver seu Level
│   ├── ${prefix}ranklevel         - Ranking de Levels
│   ├── ${prefix}google            - Pesquisa no Google
│   ├── ${prefix}encurtalink       - Encurtar Link
│   ├── ${prefix}listabr           - Lista de Animes BR
│   ├── ${prefix}listafake         - Lista de Números Fakes
│   ├── ${prefix}bug               - Reportar Bug
│   ├── ${prefix}avalie            - Avaliar o Bot
│   ├── ${prefix}novocmd           - Novo Comando
│
╰───╯ 〘 ${nomeBot} 〙
`,
    footer: ` ${nomeBot} `,
  //  buttons: buttons,
    headerType: 4
}

client.sendMessage(from, buttonMessage)


} else if(isGroup){ 
client.sendMessage(from, { react: { text: `⌛`, key: info.key }})
//reply(`${data.resultado}`)
let buttonMessage4 = {
image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=Usuario%20Do%20Bot&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=25&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${pushname}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100`},
caption: `
╭───╮ 〘 ${nomeBot} 〙
│   Usuario: ${pushname}
│   Você é: ${tipo}
│   Level: ${getLevel}
│   Patente: ${role}
│   Versão: 1.0.0
╰───╯

╭───╮ 〘 MENUS 〙
│
├── Menu Principal:
│   ├── ${prefix}Menubrincadeiras  - Brincadeiras
│   ├── ${prefix}Menuadm           - Administração
│   ├── ${prefix}Menupremium       - Recursos Premium
│   ├── ${prefix}Menufig           - Figurinhas
│   ├── ${prefix}Menudownload      - Downloads
│   ├── ${prefix}Menudono          - Opções do Dono
│
├── Adicionais:
│   ├── ${prefix}anagrama          - Anagrama
│   ├── ${prefix}ppt               - Pedra, Papel, Tesoura
│   ├── ${prefix}jokenpo           - Jokenpô
│   ├── ${prefix}adivinhação       - Adivinhação
│   ├── ${prefix}convite           - Gerar Convite
│   ├── ${prefix}ping              - Ping
│   ├── ${prefix}perfil            - Perfil
│   ├── ${prefix}correio           - Correio
│   ├── ${prefix}clima             - Clima
│   ├── ${prefix}level             - Ver seu Level
│   ├── ${prefix}ranklevel         - Ranking de Levels
│   ├── ${prefix}google            - Pesquisa no Google
│   ├── ${prefix}encurtalink       - Encurtar Link
│   ├── ${prefix}listabr           - Lista de Animes BR
│   ├── ${prefix}listafake         - Lista de Números Fakes
│   ├── ${prefix}bug               - Reportar Bug
│   ├── ${prefix}avalie            - Avaliar o Bot
│   ├── ${prefix}novocmd           - Novo Comando
│
╰───╯ 〘 ${nomeBot} 〙
`,
footer: '',
//buttons: buttons,
headerType: 4
}
client.sendMessage(from, buttonMessage4, { quoted: info })

}
}
break 


          case "menudono":{
            if (!isOwner) return reply(resposta.dono)
            if(!isGroup){ 
              const buttonMessage = {
              image: {url: "https://telegra.ph/file/cf57c5e35319c205f24a9.jpg"},
              caption:  `
              ╭───╮ 〘 MENUS DONO 〙
              │ 
              │   ├── ${prefix}premiumlist         - Lista de Premium
              │   ├── ${prefix}addpremium @       - Adicionar Premium
              │   ├── ${prefix}delpremium @       - Remover Premium
              │   ├── ${prefix}bangp               - Banir Participantes
              │   ├── ${prefix}transmitir          - Transmitir Mensagem
              │   ├── ${prefix}unbangp             - Desbanir Participantes
              │   ├── ${prefix}arquivargp          - Arquivar Grupo
              │   ├── ${prefix}nuke                - Nuke
              │   ├── ${prefix}entrar [link do gp] - Entrar em um Grupo
              │   ├── ${prefix}antipv 1            - Ativar Antivírus
              │   ├── ${prefix}antipv 0            - Desativar Antivírus
              │   ├── ${prefix}fotobot            - Foto do Bot
              │   ├── ${prefix}seradm              - Tornar-se Admin
              │   ├── ${prefix}sairgp              - Sair do Grupo
              │   ├── ${prefix}sermembro           - Tornar-se Membro
              │   ├── ${prefix}listagp             - Lista de Grupos
              │   ├── ${prefix}banghost            - Banir Host
              │   ├── ${prefix}serpremium          - Tornar-se Premium
              │   ├── ${prefix}antipv 1/0          - Ativar/Desativar Antivírus
              │ 
              ╰───╯ 〘${nomeBot}〙
              `,
                  footer: ` ${nomeBot} `,
                //  buttons: buttons,
                  headerType: 4
              }
              
              client.sendMessage(from, buttonMessage)
              
              
              } else if(isGroup){ 
              client.sendMessage(from, { react: { text: `⌛`, key: info.key }})
              //reply(`${data.resultado}`)
              let buttonMessage4 = {
              image: { url: `https://telegra.ph/file/cf57c5e35319c205f24a9.jpg`},
              caption: `
              ╭───╮ 〘 MENUS DONO 〙
              │ 
              │   ├── ${prefix}premiumlist         - Lista de Premium
              │   ├── ${prefix}addpremium @       - Adicionar Premium
              │   ├── ${prefix}delpremium @       - Remover Premium
              │   ├── ${prefix}bangp               - Banir Participantes
              │   ├── ${prefix}transmitir          - Transmitir Mensagem
              │   ├── ${prefix}unbangp             - Desbanir Participantes
              │   ├── ${prefix}arquivargp          - Arquivar Grupo
              │   ├── ${prefix}nuke                - Nuke
              │   ├── ${prefix}entrar [link do gp] - Entrar em um Grupo
              │   ├── ${prefix}antipv 1            - Ativar Antivírus
              │   ├── ${prefix}antipv 0            - Desativar Antivírus
              │   ├── ${prefix}fotobot            - Foto do Bot
              │   ├── ${prefix}seradm              - Tornar-se Admin
              │   ├── ${prefix}sairgp              - Sair do Grupo
              │   ├── ${prefix}sermembro           - Tornar-se Membro
              │   ├── ${prefix}listagp             - Lista de Grupos
              │   ├── ${prefix}banghost            - Banir Host
              │   ├── ${prefix}serpremium          - Tornar-se Premium
              │   ├── ${prefix}antipv 1/0          - Ativar/Desativar Antivírus
              │ 
              ╰───╯ 〘${nomeBot}〙
              
              `,
              footer: '',
              //buttons: buttons,
              headerType: 4
              }
              client.sendMessage(from, buttonMessage4, { quoted: info })
              
              }
              }
              break 

          case 'listagp':
            if (!isOwner) return reply(resposta.dono)
            try {
              if (!isOwner) return reply(resposta.dono)
              let getGroups = await client.groupFetchAllParticipating()
              let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
              if (q.includes("-l") || q.includes("--list")) {
                array_gps = [];
                for (let a of groups) {
                  try {
                    array_gps.push({
                      title: `‍𝗡𝗼𝗺𝗲: ${a.subject}`,
                      description: `𝗜𝗱: ${a.id}\n𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}`,
                      rowId: `${prefix + command} ${a.id}`
                    })
                  } catch { }
                }
                buttonmessage02 = {
                  title: `Lista de grupos`,
                  text: `Selecione um grupo para mais detalhes`,
                  buttonText: "Selecionar",
                  sections: [
                    {
                      rows: array_gps
                    }
                  ]
                }
                client.sendMessage(from, buttonmessage02, { quoted: info })
              } else if (q && args[0].endsWith("g.us")) {
                try {
                  let infogp = await client.groupMetadata(`${args[0]}`)
                  try {
                    ppUrl = await client.profilePictureUrl(`${args[0]}`, 'image')
                  } catch { ppUrl = "https://telegra.ph/file/41634a68c48c40189dbf7.jpg" }
                  try {
                    linkgc = await client.groupInviteCode(infogp.id)
                    linkgp = 'https://chat.whatsapp.com/' + linkgc
                  } catch { linkgp = "Bot não é admin" }
                  txt =
                    `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${infogp.subject}
  𝗗𝗼𝗻𝗼: ${infogp.owner ? infogp.owner : "Não tem"}
  𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${infogp.participants.length}
  𝗜𝗱: ${infogp.id}
  𝗟𝗶𝗻𝗸: ${linkgp}
  `
                  await client.sendMessage(from, { image: { url: ppUrl }, caption: txt, thumbnail: null, mentions: [sender] }, { quoted: info })
                } catch { }
              } else {
                txt = "━━━━━━━━━━━━━━━━━━\n"
                array_owners = [];
                for (let a of groups) {
                  txt += `𝗡𝗼𝗺𝗲 𝗱𝗼 𝗴𝗿𝘂𝗽𝗼: ${a.subject}
  𝗗𝗼𝗻𝗼 / 𝗰𝗿𝗶𝗮𝗱𝗼𝗿: @${a.owner ? a.owner.split("@")[0] : "Não tem"}
  𝗠𝗲𝗺𝗯𝗿𝗼𝘀: ${a.participants.length}
  𝗜𝗱: ${a.id}\n━━━━━━━━━━━━━━━━━━\n
  `
                  if (a.owner !== undefined) {
                    array_owners.push(`${a.owner}`)
                  }
                }
                client.sendMessage(from, { text: txt, mentions: array_owners })
              }
            } catch {
              reply("Hmm deu erro")
            }
            break

          case 'banghost':
          case 'banghosts':
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner) return reply("Só dono pode executar este comando..")
            if (!isBotGroupAdmins) return reply('Bot precisa ser ADM, para executar esta função.')
            if (q.length < 1) return reply(`Exemplo: ${prefix}banghosts 0\n\nEle vai banir todos aqueles que tá com 0 mensagens, mas faça isso apenas se passou um tempo com o bot armazenando mensagem dos membros ativos do grupo.`)
            async function banghst() {
              if (groupIdscount.indexOf(from) >= 0) {
                for (let obj of groupMembers) {
                  if (numbersIds.indexOf(obj.id) >= 0) {
                    var indnum = numbersIds.indexOf(obj.id)
                    if (countMessage[ind].numbers[indnum].messages <= args[0]) {
                      if (groupAdmins.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser admin`, [obj.id], true)
                      if (numerodono.includes(obj.id)) return mentions(`@${obj.id} ta liberado da inspeção por ser dono`, [obj.id], true)
                      client.groupParticipantsUpdate(from, [obj.id], 'remove')
                    }
                  }
                }
              }
            }
            setInterval(banghst, 1000)
            break

          case 'seradm': {
            if (!isOwner) return reply(resposta.dono)
            reply(`Agora vc é adm do grupo.`)
            kiceed = sender
            client.groupParticipantsUpdate(from, [kiceed], 'promote')
          }
            break

          case 'sermembro': {
            if (!isOwner) return reply(resposta.dono)
            reply(`Agora vc não é mais adm do grupo.`)
            kicee = sender
            await client.groupParticipantsUpdate(from, [kicee], 'demote')
          }
            break

          case 'fotobot':
            if (!isOwner) return reply(resposta.dono)
            if (!isQuotedImage) return reply(`Envie fotos com legendas ${prefix}fotobot ou tags de imagem que já foram enviadas`)
            buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
            await client.updateProfilePicture(botNumber, buff)
            reply('Obrigado pelo novo perfil vlw')
            break

          case 'reviverqr':
            if (!isOwner) return reply(resposta.dono)
            exec("cd conexão akame.json* && rm -rf pre-key* sender* session*")
            setTimeout(async () => {
              reply("Reiniciando..")
              setTimeout(async () => {
                process.exit()
              }, 1200)
            }, 1000)
            break

            case 'addpremium':
    if (!isGroup) return reply(resposta.grupo);
    if (!isOwner) return reply(resposta.dono);

    if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return;

    // Novo bloco de código para evitar a redefinição de variáveis
    {
        const argsStringPremium = args.join(' ');
        const argsArrayPremium = argsStringPremium.split('|');
        if (argsArrayPremium.length !== 4) {
            return reply(`Formato inválido. Use: !addpremium numero|nome|id|dias\nExemplo: !addpremium 6793266366|Teruya|67433|30`);
        }

        const [number, name, id, days] = argsArrayPremium;
        const mentioned = `${number}@s.whatsapp.net`;

        console.log(`Tentando adicionar número: ${mentioned}, nome: ${name}, id: ${id}, dias: ${days}`);

        premium = loadAndCheckPremiumUsers(); // Atualizar a lista de premium antes de adicionar novo usuário

        const existingUserIndex = premium.findIndex(user => user.number === mentioned);
        if (existingUserIndex !== -1) {
            console.log(`Usuário já é premium: ${mentioned}`);
            return reply(`👑 @${number} já é um usuário premium. 👑`);
        }

        const expiryDate = addDays(new Date(), parseInt(days));
        console.log(`Data de expiração calculada: ${expiryDate.toISOString()}`);

        premium.push({
            number: mentioned,
            name: name,
            id: id,
            expiryDate: expiryDate.toISOString()
        });

        fs.writeFileSync('./functions/premium.json', JSON.stringify(premium, null, 2));
        console.log('Usuário adicionado à lista premium:', premium);

        client.sendMessage(from, { 
            text: `👑 @${number} foi adicionado à lista de usuários premium com sucesso por ${days} dias! 👑`, 
            mentions: [mentioned] 
        }, { quoted: info });

        console.log(`Mensagem de sucesso enviada para: @${number}`);
    }
    break;



            case 'addsup':
    if (!isGroup) return reply(resposta.grupo);
    if (!isSuperiores && !isOwner) return reply(resposta.superiores);
    if (args.length < 1) return reply('Você precisa fornecer o número, nome e função da pessoa que deseja adicionar no formato !addsup numero|nome|funcao.');

    const argsStringSup = args.join(' ');
    const argsArraySup = argsStringSup.split('|');
    if (argsArraySup.length < 3) return reply('Você precisa fornecer o número, nome e função da pessoa no formato !addsup numero|nome|funcao.');

    const [numeroSup, nomeSup, funcaoSup] = argsArraySup;
    const newSupervisor = {
        number: `${numeroSup.replace(/[^0-9]/g, "")}@s.whatsapp.net`,
        name: nomeSup.trim(),
        function: funcaoSup.trim()
    };

    const supervisores = JSON.parse(fs.readFileSync('./functions/supervisores.json', 'utf-8'));
    if (supervisores.find(sup => sup.number === newSupervisor.number)) {
        return reply("Este número já está incluso.");
    }

    supervisores.push(newSupervisor);
    fs.writeFileSync('./functions/supervisores.json', JSON.stringify(supervisores, null, 2));

    client.sendMessage(from, {
        text: `👑 ${nomeSup} (${numeroSup}) foi adicionado à lista de Supervisores com a função de ${funcaoSup} com sucesso 👑`
    }, { quoted: info });
    break;


case 'addsupr':
    if (!isGroup) return reply(resposta.grupo);
    if (!isSuperiores && !isOwner) return reply(resposta.superiores);
    if (args.length < 1) return reply('Você precisa fornecer o número, nome e função da pessoa no formato !addsup numero|nome|função.');

    const input = args.join(" ").split("|");
    if (input.length !== 3) return reply('Formato inválido. Use !addsupr numero|nome|função.');

    const newSuperiorNumber = input[0].replace("@", "").trim();
    const newSuperiorName = input[1].trim();
    const newSuperiorFunction = input[2].trim();

    // Verifica se o número é válido (somente dígitos e com tamanho mínimo)
    const numberPattern = /^\d+$/;
    if (!numberPattern.test(newSuperiorNumber)) {
        return reply('Número inválido. Certifique-se de fornecer apenas dígitos.');
    }

    const newSuperiorFullNumber = newSuperiorNumber + "@s.whatsapp.net";

    if (superiores.some(sup => sup.number === newSuperiorFullNumber)) {
        return reply("Este número já está incluso.");
    }

    superiores.push({ number: newSuperiorFullNumber, name: newSuperiorName, function: newSuperiorFunction });
    fs.writeFileSync('./functions/superiores.json', JSON.stringify(superiores));

    client.sendMessage(from, {
        text: `👑${newSuperiorName} (${newSuperiorNumber}) foi adicionado à lista de Superiores com sucesso com a função ${newSuperiorFunction}👑`
    }, { quoted: info });
    break;

    case 'delpremium':
    if (!isGroup) return reply(resposta.grupo);
    if (!isOwner) return reply(resposta.dono);
  
    const numberToRemove = args[0];
    if (!numberToRemove) return reply("Por favor, forneça um número para remover da lista premium.");
  
    const mentioned = `${numberToRemove.replace(/[^0-9]/g, '')}@s.whatsapp.net`;
  
    let premiumData = JSON.parse(fs.readFileSync('./functions/premium.json'));
  
    const userIndex = premiumData.findIndex(user => user.number === mentioned);
    if (userIndex === -1) {
        return reply(`*${numberToRemove} não está na lista de usuários premium.*`);
    }
  
    const removedUser = premiumData.splice(userIndex, 1)[0];
  
    fs.writeFileSync('./functions/premium.json', JSON.stringify(premiumData, null, 2));
  
    client.sendMessage(from, { 
        text: ` ${removedUser.name} (${removedUser.id}) foi removido da lista premium com sucesso.`, 
        mentions: [mentioned] 
    }, { quoted: info });
  
    break;

            case 'delsup':
    if (!isGroup) return reply(resposta.grupo);
    if (!isSuperiores && !isOwner) return reply(resposta.superiores)
      if (args.length < 1) {
        return reply('Você deve fornecer um número para remover da lista de supervisores no formato !delsup numero.');
    }

    const numeroDelSup = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";

    const supervisoresDel = JSON.parse(fs.readFileSync('./functions/supervisores.json', 'utf-8'));
    const supervisorIndexDel = supervisoresDel.findIndex(sup => sup.number === numeroDelSup);
    if (supervisorIndexDel === -1) {
        return reply("Este número não está incluso na lista de Supervisores.");
    }

    const removedSupervisor = supervisoresDel.splice(supervisorIndexDel, 1)[0];
    fs.writeFileSync('./functions/supervisores.json', JSON.stringify(supervisoresDel, null, 2));
    
    client.sendMessage(from, {
        text: `@${removedSupervisor.number.split('@')[0]} (${removedSupervisor.name}) foi removido da lista de Supervisores.`,
        mentions: [removedSupervisor.number]
    }, { quoted: info });
    break;

    case 'delsupr':
    if (!isGroup) return reply(resposta.grupo);
    if (!isSuperiores && !isOwner) return reply(resposta.superiores)
      if (!args[0]) {
        return reply('Você deve fornecer um número para remover da lista de Superiores.');
    }
    
    const mentiionedNumber = args[0].replace("@", "").trim() + "@s.whatsapp.net";

    const superiorIndex = superiores.findIndex(sup => sup.number === mentiionedNumber);
    if (superiorIndex === -1) {
        return reply("Este número não está incluso na lista de Superiores.");
    }

    // Remove o supervisor da lista
    const removedSuperior = superiores.splice(superiorIndex, 1)[0];
    
    // Escreve a nova lista de superiores no arquivo
    fs.writeFileSync('./functions/superiores.json', JSON.stringify(superiores));

    const displayNumber = args[0];
    client.sendMessage(from, {
        text: `@${displayNumber} (${removedSuperior.name}) foi tirado da lista de Superiores. Função: ${removedSuperior.function}`,
        mentions: [mentiionedNumber]
    }, { quoted: info });
    break;


          case 'listafake':
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            teks = '𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n'
            men = []
            for (let mem of groupMembers) {
              if (!mem.id.startsWith(55)) {
                teks += `➤ @${mem.id.split('@')[0]}\n`
                men.push(mem.id)
              }
            }
            if (teks.indexOf('➤') < 0) return reply(' 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁𝗮𝗱𝗼')
            client.sendMessage(from, { text: teks, mentions: men })
            break

            
            case 'grupo30s':
              if (!isGroupAdmins && !isOwner) return responder(resposta.adm)
              {
              client.groupSettingUpdate(from, "announcement")
              await sleep(30000) //30 segundos 
              client.groupSettingUpdate(from, "not_announcement")
              }
              break

          case 'listabr':
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            teks = '𝗕𝗥𝗔𝗦𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 \n'
            men = []
            for (let mem of groupMembers) {
              if (mem.id.startsWith(55)) {
                teks += `➤ @${mem.id.split('@')[0]}\n`
                men.push(mem.id)
              }
            }
            if (teks.indexOf('➤') < 0) return reply('*NENHUM NÚMERO BR FOI ENCONTRADO*')
            client.sendMessage(from, { text: teks, mentions: men })
            break


          case 'encurtalink':
            if (!isPremium) return reply(resposta.premium)
            if (args.length < 1) return reply(`Exemplo:\n${prefix}encurtalink https://www.youtube.com/channel/UCgKrNnrbNPJIOjJOgIXe1vQ`)
            try {
              link = args[0]
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
              reply(`${anu.data}`)
            } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
            await limitAdd(sender)
            break

          case 'serpremium':
          case 'serprem':
            if (!isOwner) return reply(resposta.dono)
            const fss = require('fs');
            premium.push(`${infoBot.numeroDono}@s.whatsapp.net`)
            fss.writeFileSync('./functions/premium.json', JSON.stringify(premium))
            reply(`Pronto ${infoBot.numeroDono} você foi adicionado na minha lista de premium.`)
            break

          case 'google': {
          if (!isOwner) return reply(resposta.dono)
            if (!q) return reply(`Examplo : ${prefix}Google bot de WhatsApp`)
            reply("aguarde um momento ")
            let google = require('google-it')
            google({ 'query': q }).then(res => {
              let teks = `Google Pesquisa \n\n`
              for (let g of res) {
                teks += `⭔ *Titulo* : ${g.title}\n`
                teks += `⭔ *Descrição* : ${g.snippet}\n`
                teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
              }
              reply(teks)
            })
          }
            break

          case 'correio':
          if (!isOwner) return reply(resposta.dono)
            {
              txt = args.join(" ")
              if (!txt) return reply(`Exemplo: ${prefix + command} +55 00.../Oi amor, sdds`)
              let txt1 = txt.split("/")[0].replace(/\D/g, '');
              let txt2 = txt.split("/")[1];
              if (!txt1) return reply('Cade o número da pessoa?')
              if (!txt2) return reply('Cade a mensagem do correio??')
              let [result] = await client.onWhatsApp(txt1)
              if (!result) return reply(`Número inválido`)
              bla =
                `╭┄━┄━┄━┄━┄━╮
    ┞┧ ⸙. ͎۪۫          💌  ː͡₊ꞋꞌꞋꞌ
    ┞┧Correio anônimo. 
    ┞┧Msg: ${txt2}
    ┞┧
    ╰┄━┄━┄━┄━┄━╮`
              client.sendMessage(result.jid, { text: bla })
              reply(`Mensagem enviada com sucesso para wa.me/${result.jid.split("@")[0]}`)
            }
            break

          case 'speed':
          case 'ping':
          if (!isOwner) return reply(resposta.dono)
            r = (Date.now() / 1000) - info.messageTimestamp;
            uptime = process.uptime();
            hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
            const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
            let girastamp = speed();
            let latensi = speed() - girastamp;
           reply(` 
    ╔═════ °❀•°💖°•❀°═════╗
    ╠ ➽𝙋𝙄𝙉𝙂: ${String(r.toFixed(3))}
    ┃✰ 
    ╠ ➽𝗛𝗢𝗥𝗔: ${hora1}
    ┃✰  
    ╠ ➽𝗗𝗔𝗧𝗔: ${data}
    ┃✰ 
    ╠ ➽𝗩𝗘𝗟𝗢𝗖𝗜𝗗𝗔𝗗𝗘:${latensi.toFixed(4)}
    ┃✰ 
    ╠ ➽𝗧𝗘𝗠𝗣𝗢 𝗢𝗡𝗟𝗜𝗡𝗘: ${runtime(uptime)}
    ┃✰ 
    ╠ ➽𝗕𝗢𝗧: ${nomeBot}
    ╚═════ °❀•°💜°•❀°═════╝`)    
    break

          case 'convite':
          if (!isOwner) return reply(resposta.dono)
            if (!q) return reply("cadê o link do grupo?")
            cnvt = args.join(" ")
            reply(`🥳convite enviado com sucesso para meu dono🥳`)
            sendBtext(`${numeroDono}@s.whatsapp.net`, ` convite para entra em um grupo \n\nLink do grupo: ${cnvt}\n\nNúmero dele(a) : wa.me/${sender.split("@")[0]}`, `${nomeBot}️`, [
              { buttonId: `${prefix}entrar ${cnvt}`, buttonText: { displayText: `🔮ACEITA🔮` }, type: 1 },
              { buttonId: `${prefix}recusar ${sender}`, buttonText: { displayText: `🔮RECUSAR🔮` }, type: 1 }], live)
            break

          case 'recusar':
            if (!isOwner) return reply("Só dono...")
            client.sendMessage(q, { text: `Olá,seu convite foi recusado 😪` })
            break

          case 'join': case 'entrar':
            if (!isOwner) return reply('Somente proprietário!')
            string = args.join(' ')
            if (!string) return reply('Insira um link de convite ao lado do comando.')
            if (string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.')) {
              link = string.split('app.com/')[1]
              try {
                await client.groupAcceptInvite(`${link}`)
              } catch (erro) {
                if (String(erro).includes('resource-limit')) {
                  reply('O grupo já está com o alcance de 257 membros.')
                }
                if (String(erro).includes('not-authorized')) {
                  reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
                }
              }
            }
            break



            case 'premiumlist':
    console.log('Comando premiumlist iniciado.');

    if (!isPremium) {
        console.log('Usuário não é premium. Enviando resposta padrão.');
        return reply(resposta.premium);
    }

    console.log('Usuário é premium. Preparando lista de usuários premium.');

    let tkks = '╭────*「 *PREMIUM USER👑* 」\n';

    const currentDate = new Date();

    for (let V of premium) {
        const expiryDate = new Date(V.expiryDate);
        const timeDiff = expiryDate - currentDate;
        const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        console.log('Iterando usuário premium:', V);

        tkks += `│+ *Nome:* ${V.name}\n`;
        tkks += `│+ *ID:* ${V.id}\n`;
        tkks += `│+ *Dias Restantes:* ${daysRemaining} dias\n\n`;
    }

    console.log('Lista de usuários premium preparada:', tkks);

    tkks += `│+ Total : ${premium.length}\n╰──────*「 *${nomeBot}* 」*────`;

    console.log('Lista de usuários premium finalizada:', tkks);

    console.log('Enviando lista de usuários premium.');
    reply(tkks.trim());

    console.log('Resposta enviada. Comando premiumlist concluído.');
    break;

          


            case 'suplist':
            if (!isSupervisores && !isSuperiores && !isOwner) return reply(resposta.supervisores)
              const supervisoresList = JSON.parse(fs.readFileSync('./functions/supervisores.json', 'utf-8'));

    if (supervisoresList.length === 0) {
        return reply('Não há supervisores na lista.');
    }

    let messageList = '╭────*「 *SUPERVISORES* 」*────\n';
    supervisoresList.forEach(sup => {
        messageList += `│+ *Nome:* ${sup.name}
        *Função:* ${sup.function}
        wa.me/${sup.number.split('@')[0]}\n`;
    });
    messageList += `│+ Total: ${supervisoresList.length}\n╰──────*「 *${nomeBot}* 」*────`;

    client.sendMessage(from, {
        text: messageList,
        mentions: supervisoresList.map(sup => sup.number)
    }, { quoted: info });
    break;

    // Array contendo os IDs dos grupos específicos permitidos

case 'suprlist':
    // Verifica se o ID do grupo da mensagem está na lista de grupos permitidos
    if (allowedGroups.includes(from)) {
        // Se sim, continua com a execução normal do comando
        let tkks = '╭────*「 *SUPERIORES* 」\n';
        for (let sup of superiores) {
            tkks += `│+ *Nome:* ${sup.name}
            *Função:* ${sup.function}
            wa.me/@${sup.number.split('@')[0]}\n`;
        }
        tkks += `│+ Total : ${superiores.length}\n╰──────*「 *${nomeBot}* 」*────`;
        reply(tkks.trim());
    } else {
        // Se não, envia uma mensagem informando que o comando só pode ser usado nos grupos específicos
        reply('Este comando só pode ser usado nos grupos específicos.');
    }
    break;

          

    case 'edit':
    console.log('Comando de edição recebido');
    console.log('Argumentos:', args);
    if (!isGroup || !isSuperiores || !isOwner) return;

    const argsString = args.join(' '); // Convertendo os argumentos em uma única string
    const argsArray = argsString.split('|'); // Separando os argumentos pela barra vertical "|"
    console.log('Array de Argumentos:', argsArray);
    
    const argsLength = argsArray.length;
    console.log(`Número de argumentos: ${argsLength}`);
    if (argsLength < 3) {
        console.log('Argumentos insuficientes');
        return reply(`Envie o comando com as seguintes funoções que deja atulizar (funcao/nome/numero), e o novo valor
        
No formato !edit numero|funcao|nome|novo_valor.
        
Exemplo: !edit 558996576543|nome|Teruya`);
    }

    const [superiorNumber, editType, ...newValueArray] = argsArray;
    const newValue = newValueArray.join(" ").trim();
    console.log(`Número do Superior: ${superiorNumber}, Tipo de Edição: ${editType}, Novo Valor: ${newValue}`);

    const indexToUpdate = superiores.findIndex(sup => sup.number === `${superiorNumber}@s.whatsapp.net`);
    console.log(`Índice para Atualização: ${indexToUpdate}`);
    if (indexToUpdate === -1) {
        console.log('Superior não encontrado');
        return reply("Este número não está incluso na lista de Superiores.");
    }

    if (editType.toLowerCase() === 'funcao') {
        console.log('Editando função');
        superiores[indexToUpdate].function = newValue;
    } else if (editType.toLowerCase() === 'nome') {
        console.log('Editando nome');
        superiores[indexToUpdate].name = newValue;
    } else if (editType.toLowerCase() === 'numero') {
        console.log('Editando número');
        const number = newValue.replace(/[^0-9]/g, ""); // Remover caracteres não numéricos
        if (!/^\d+$/.test(number)) {
            console.log('Número inválido');
            return reply('Número inválido. Certifique-se de fornecer apenas dígitos.');
        }
        superiores[indexToUpdate].number = `${number}@s.whatsapp.net`;
    } else {
        console.log('Tipo de edição inválido');
        return reply('Tipo de edição inválido. Use "funcao", "nome" ou "numero".');
    }

    fs.writeFileSync('./functions/superiores.json', JSON.stringify(superiores, null, 2));
    console.log('Superiores atualizados:', superiores);

    client.sendMessage(from, {
        text: `Informação do superior atualizada com sucesso. Novo ${editType}: ${newValue}`
    }, { quoted: info });
    break;

    case 'editsup':
    console.log('Comando de edição recebido');
    console.log('Argumentos:', args);
    if (!isGroup || !isSupervisores || !isOwner) return;

    let supervisoresEdit;
    try {
        supervisoresEdit = JSON.parse(fs.readFileSync('./functions/supervisores.json', 'utf-8'));
    } catch (error) {
        console.error('Erro ao ler o arquivo supervisores.json:', error);
        return reply('Ocorreu um erro ao ler a lista de supervisores.');
    }

    const argsStringEdit = args.join(' '); // Convertendo os argumentos em uma única string
    const argsArrayEdit = argsStringEdit.split('|'); // Separando os argumentos pela barra vertical "|"
    console.log('Array de Argumentos:', argsArrayEdit);
    
    const argsLengthEdit = argsArrayEdit.length;
    console.log(`Número de argumentos: ${argsLengthEdit}`);
    if (argsLengthEdit < 3) {
        console.log('Argumentos insuficientes');
        return reply(`Envie o comando com as seguintes funções que deseja atualizar (funcao/nome/numero), e o novo valor
        
No formato !edit numero|funcao|nome|novo_valor.
        
Exemplo: !edit 558996576543|nome|Teruya`);
    }

    const [supervisorNumberEdit, editTypeEdit, ...newValueArrayEdit] = argsArrayEdit;
    const newValueEdit = newValueArrayEdit.join(" ").trim();
    console.log(`Número do Supervisor: ${supervisorNumberEdit}, Tipo de Edição: ${editTypeEdit}, Novo Valor: ${newValueEdit}`);

    const indexToUpdateEdit = supervisoresEdit.findIndex(sup => sup.number === `${supervisorNumberEdit}@s.whatsapp.net`);
    console.log(`Índice para Atualização: ${indexToUpdateEdit}`);
    if (indexToUpdateEdit === -1) {
        console.log('Supervisor não encontrado');
        return reply("Este número não está incluso na lista de Supervisores.");
    }

    let oldValueEdit;
    switch (editTypeEdit.toLowerCase()) {
        case 'funcao':
            console.log('Editando função');
            oldValueEdit = supervisoresEdit[indexToUpdateEdit].funcao;
            supervisoresEdit[indexToUpdateEdit].funcao = newValueEdit;
            break;
        case 'nome':
            console.log('Editando nome');
            oldValueEdit = supervisoresEdit[indexToUpdateEdit].nome;
            supervisoresEdit[indexToUpdateEdit].nome = newValueEdit;
            break;
        case 'numero':
            console.log('Editando número');
            const numberEdit = newValueEdit.replace(/[^0-9]/g, ""); // Remover caracteres não numéricos
            if (!/^\d+$/.test(numberEdit)) {
                console.log('Número inválido');
                return reply('Número inválido. Certifique-se de fornecer apenas dígitos.');
            }
            oldValueEdit = supervisoresEdit[indexToUpdateEdit].number;
            supervisoresEdit[indexToUpdateEdit].number = `${numberEdit}@s.whatsapp.net`;
            break;
        default:
            console.log('Tipo de edição inválido');
            return reply('Tipo de edição inválido. Use "funcao", "nome" ou "numero".');
    }

    fs.writeFileSync('./functions/supervisores.json', JSON.stringify(supervisoresEdit, null, 2));
    console.log('Supervisores atualizados:', supervisoresEdit);

    client.sendMessage(from, {
        text: `Informação do supervisor atualizada com sucesso. Novo ${editTypeEdit}: ${newValueEdit}\n${editTypeEdit.charAt(0).toUpperCase() + editTypeEdit.slice(1)} Antigo: ${oldValueEdit}`
    }, { quoted: info });
    break;


  

          case 'leveling':
          if (!isOwner) return reply(resposta.dono)
            if (!isGroupAdmins) return reply('comando apenas para admins')
            if (!isBotGroupAdmins) return reply(resposta.botadm)
            if (args.length < 1) return reply('digite 1 para ativar ou 0 para desativar ')
            if (Number(args[0]) === 1) {
              if (isLevelingOn) return reply('o level está ativo')
              levelingOn.push(from)
              fs.writeFileSync('./functions/lib/leveling.json', JSON.stringify(levelingOn))
              reply('O level foi ativo no grupo ✔️')
            } else if (Number(args[0]) === 0) {
              levelingOn.splice(from, 1)
              fs.writeFileSync('./functions/lib/leveling.json', JSON.stringify(levelingOn))
              reply('O level foi desativado com sucesso neste grupo✔️')
            } else {
              reply('1 para ativar, 0 para desativar ')
            }
            break

          case 'anagrama':
          if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply('comando apenas para grupos')
            const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
            if (!isGroupAdmins) return reply('comando apenas para admins')
            if (args.length == 0) return reply('use 1 para ativar o jogo do anagrama\npara desativar use anagrama 0')
            if (args.join(' ') === '1') {
              if (fs.existsSync(`./functions/anagrama-${from}.json`)) {
                let dataAnagrama2 = JSON.parse(fs.readFileSync(`./functions/anagrama-${from}.json`))
                reply(`o jogo já foi iniciado neste grupo:
  palavra: ${dataAnagrama2.embaralhada}
  dica: ${dataAnagrama2.dica}
  `)
              } else {
                fs.writeFileSync(`./functions/anagrama-${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)

                let atr = {
                  image: { url: logo },
                  caption: `
  ╭─────≽「 👾 ANAGRAMA 👾 」
  │ ➽ DESCUBRA A PALAVRA
  │ ➽ ANAGRAMA: ${palavrasANA[anaaleatorio].embaralhada}
  │ ➽ DICA: ${palavrasANA[anaaleatorio].dica}
  ╰────────────────────────
  `,
                  lfooter: `${nomeBot}`,
                  //buttons: buttons,
                  headerType: 4
                }


                client.sendMessage(from, atr)
              }
            } else if (args.join(' ') === '0') {
              if (!fs.existsSync(`./functions/anagrama-${from}.json`)) return reply('não tem como desativar o jogo do anagrama pôs ele não foi ativado')
              fs.unlinkSync(`./functions/anagrama-${from}.json`)
              reply("desativado com sucesso")
            }
            //await limitAdd(sender)
            break

          case "level":
          if (!isOwner) return reply(resposta.dono)
            if (!isLevelingOn) return reply("o leveling nao ta ativo, peca pra algum adm ativar!!!")
            reply(`
  Ola ${pushname} aqui esta suas informações
  
  Patente: ${role}
  Level: ${getLevel}
  porcentagem: ${per}
  `)
            break

          

          case "perfil":
          if (!isOwner) return reply(resposta.dono)
            try {
              ppimg = await client.profilePictureUrl(`${sender.split("@")[0]}@c.us`, "image")
            } catch (e) {
              ppimg = logo
            }
            var conselho = palavras[Math.floor(Math.random() * palavras.length)]
            const nivelgado = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const nivelgado2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
            const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))]
            const gostosura = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const gostosura2 = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
            const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))]
            const programa = Math.ceil(Math.random() * 10000)
            perfil = await getBuffer(ppimg)
            reply("enviando..")
            try {
              client.sendMessage(from, {
                image: perfil,
                caption: `          「 🔥 ~_*PERFIL*_~ 🌈 」
  
  📄 *Nome* : ${pushname}
  🐂 *Número* : ${sender.split("@")[0]}
  🔮 *Wa.me* : https://wa.me/${sender.split("@")[0]}
  🌂 *Grupo*: ${groupName}
  🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
  📱 *Seu Célular* : ${info.key.id.length > 21 ? 'Android 🤣' : info.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
  😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
  🍼 *Valor do programa* : *R$${programa}*
  
  ➻ *~_CONSELHO_~* :
  ${conselho}`
              }, { quoted: live })
            } catch (e) {
              console.log("erro")
              reply(resposta.erro)
            }
            break

            case 'ausencia':
  if (!isSupervisores) return reply(resposta.supervisores)
  horaaus = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
  const dataaus = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
    if (!q) {
        return enviar(`Para deixar sua ausência registrada, use o formato:
        
        !aus Nick|Função|Motivo|Dia da semana`);
    }

    // Divida o texto recebido em partes
    let parts = q.split('|');
    
    // Verifique se todas as partes necessárias foram fornecidas
    if (parts.length < 4) {
        return enviar(`Formato incorreto! Certifique-se de usar o formato:
        
        !aus Nick|Função|Motivo|Dia da semana`);
    }

    // Atribua as partes às variáveis correspondentes
    let [nick, funcao, motivo, diaSemana] = parts;
    var download = [
      `〘▒▒▒▒▒▒▒▒▒▒〙0%`,
      `〘█▒▒▒▒▒▒▒▒▒〙10%`,
      `〘██▒▒▒▒▒▒▒▒〙20%`,
      `〘███▒▒▒▒▒▒▒〙35%`,
      `〘████▒▒▒▒▒▒〙45%`,
      `〘█████▒▒▒▒▒〙55%`,
      `〘██████▒▒▒▒〙65%`,
      `〘███████▒▒▒〙75%`,
      `〘████████▒▒〙85%`,
      `〘█████████▒〙95%`,
      `〘██████████〙100%`,
      `*Ausencia Registrada*`
    ]
    let { key } = await client.sendMessage(from, { text: `Registrando sua Ausencia` }, { quoted: info })
    await delay(1000)
    for (let i = 0; i < download.length; i++) {
      await client.sendMessage(from, { text: download[i], edit: key }, { quoted: info })
    }
    
    await delay(50)
    // Confirmação de registro da ausência

    // Montagem da mensagem template
    let templateMesssage = {
        image: {
            url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=Ausencia%20de:&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=25&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${nick}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100`,
            quoted: live
        },
        caption: `Ausência de: @${sender.split('@')[0]},\nNick: ${nick}\nFunção: ${funcao}\nMotivo: ${motivo}\nDia da semana: ${diaSemana}\nHorario da Ausencia: ${horaaus}\nData da Ausencia: ${dataaus}`
    };

    // Enviar a mensagem ao dono
    client.sendMessage(`120363301881302825@g.us`, templateMesssage);
    break



          case 'novocmd':
          if (!isOwner) return reply(resposta.dono)
            if (!q) return enviar('Ex: novocmd coloca antilink')
            reply(`Obrigada pela colaboração, a sua idea foi reportada aos meus criadores 😊`)
            let templateMessage = {
              image: {
                url: imagemdomenu,
                quoted: live
              },
              caption: `💦IDEIA DE CMD♨💦\nDo Número: @${sender.split('@')[0]},\nA Ideia É:\n ${q}`,
              footer: 'Noelle_md'
            }
            client.sendMessage(`${numeroDono}@s.whatsapp.net`, templateMessage)
            break

          case 'ban':
          case 'kick':
            if (!isGroup) return reply(resposta.grupo)
                if (!isGroupAdmins && !isOwner) return reply(resposta.adm)
            if (!isBotGroupAdmins) return reply(resposta.botadm)

            const frases = JSON.parse(fs.readFileSync('./functions/frases.json'))
            const clover = frases[Math.floor(Math.random() * frases.length)]

            if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('𝙢𝙖𝙧𝙦𝙪𝙚 𝙖 𝙢𝙚𝙣𝙨𝙖𝙜𝙚𝙢 𝙤𝙪 𝙖 𝙥𝙚𝙨𝙨𝙤𝙖 𝙦𝙪𝙚 𝙫𝙘 𝙙𝙚𝙨𝙚𝙟𝙖 𝙧𝙚𝙢𝙤𝙫𝙚𝙧 𝙙𝙤 𝙜𝙧𝙪𝙥𝙤')
            if (info.message.extendedTextMessage.contextInfo.participant !== null && info.message.extendedTextMessage.contextInfo.participant != undefined && info.message.extendedTextMessage.contextInfo.participant !== "") {
              mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0] ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : info.message.extendedTextMessage.contextInfo.participant
              if (sender.includes(mentioned)) return reply("😑")
              if (botNumber.includes(mentioned)) return reply('Não sou besta de remover eu mesmo né, mas estou decepcionado com você')
              let responseb = await client.groupParticipantsUpdate(from, [mentioned], 'remove')
              if (responseb[0].status === "200") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} ${clover}`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              else if (responseb[0].status === "406") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              else if (responseb[0].status === "404") client.sendMessage(from, { text: `@${mentioned.split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned, sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              else client.ontextInfoe(from, { text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
            } else if (info.message.extendedTextMessage.contextInfo.mentionedJid != null && info.message.extendedTextMessage.contextInfo.mentionedJid != undefined) {
              mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
              if (mentioned.includes(sender)) return reply("😑")
              if (mentioned.length > 1) {
                if (mentioned.length > groupMembers.length || mentioned.length === groupMembers.length || mentioned.length > groupMembers.length - 3) return reply(`Vai banir todo mundo mesmo?`)
                sexocomrato = 0
                for (let banned of mentioned) {
                  await sleep(100)
                  let responseb2 = await client.groupParticipantsUpdate(from, [banned], 'remove')
                  if (responseb2[0].status === "200") sexocomrato = sexocomrato + 1
                }
                client.sendMessage(from, { text: `${sexocomrato} participantes removido do grupo`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              } else {
                let responseb3 = await client.groupParticipantsUpdate(from, [mentioned[0]], 'remove')
                if (responseb3[0].status === "200") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} ${clover}`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                else if (responseb3[0].status === "406") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} criou esse grupo e não pode ser removido(a) do grupo️`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                else if (responseb3[0].status === "404") client.sendMessage(from, { text: `@${mentioned[0].split("@")[0]} já foi removido(a) ou saiu do grupo`, mentions: [mentioned[0], sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
                else client.sendMessage(from, { text: `Hmm parece que deu erro️`, mentions: [sender], contextInfo: { forwardingScore: 999, isForwarded: true } })
              }
            }
            break

          case 'io':
          if (!isOwner) return reply(resposta.dono)
            try {
              let openai = await ia(q)
              let response = openai[0].resposta
              delay(1000)
              enviar(response)
            } catch (e) {
              console.log(e)
              reply('Erro')
            }
            break

          case "play4": {
          if (!isOwner) return reply(resposta.dono)
            client.sendMessage(from, { react: { text: ' ', key: info.key } })
            if (!q) return reply("digite o nome da música que você deseja exemplo: /play teto m4")
            ab = args.join(" ")
            res = await ytttts(ab)
            reply("aguarde enviando..")
            blaimg = await getBuffer(res.all[0].image)

            bla = `
  𝑻𝑰𝑻𝑼𝑳𝑶: ${res.all[0].title}
  𝑽𝑰𝑺𝑼𝑨𝑳𝑰𝒁𝑨𝑪̧𝑶̃𝑬𝑺: ${res.all[0].views}\n
  𝑻𝑬𝑴𝑷𝑶: ${res.all[0].timestamp}
  𝑪𝑨𝑵𝑨𝑳: ${res.all[0].author.name}
  𝘚𝘦 𝘷𝘰𝘤𝘦̂ 𝘯𝘢̃𝘰 𝘤𝘰𝘯𝘴𝘦𝘨𝘶𝘪𝘳 𝘷𝘪𝘴𝘶𝘢𝘭𝘪𝘻𝘢𝘳 𝘰𝘴 𝘣𝘰𝘵𝘰̃𝘦𝘴,𝘦𝘹𝘦𝘤𝘶𝘵𝘦 𝘰 𝘱𝘭𝘢𝘺𝘢𝘶𝘥𝘪𝘰, 𝘱𝘭𝘢𝘺𝘷𝘪𝘥𝘦𝘰 𝘤𝘰𝘮𝘰 𝘴𝘦𝘨𝘶𝘯𝘥𝘢 𝘰𝘱𝘤̧𝘢̃𝘰.`

            sendBimg(from, `${res.all[0].image}`, bla, nomeBot, [
              { buttonId: `${prefix}playmp3 ${res.all[0].url}`, buttonText: { displayText: '『𝐀𝐔𝐃𝐈𝐎』' }, type: 1 }, { buttonId: `${prefix}playmp4 ${res.all[0].url}`, buttonText: { displayText: '『𝐕𝐈́𝐃𝐄𝐎』' }, type: 1 }], live)
          }
            break

          case 'audio': case 'ytaudio':
          if (!isOwner) return reply(resposta.dono)
            enviar('*enviando ✨*')
            bla = await fetchJson(`https://api.brizaloka-api.tk/sociais/v2/ytplaymp3?apikey=brizaloka&query=${q}`)
            audbla = bla.link_src
            client.sendMessage(from, { audio: { url: audbla }, mimetype: 'audio/mp4' }, { quoted: live })
            break



          case "ppt":
          if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(`Comando so para grupos.`)
            if (args.length < 1) return reply('exemplo: /ppt pedra')
            ppt = ["pedra", "papel", "tesoura"]
            ppy = ppt[Math.floor(Math.random() * ppt.length)]
            ppg = Math.floor(Math.random() * 50)
            pptb = ppy
            pph = `Você ganhou ${ppg} em money`
            if ((pptb == "pedra" && args == "papel") ||
              (pptb == "papel" && args == "tesoura") ||
              (pptb == "tesoura" && args == "pedra")) {
              var vit = "vitoria"
            } else if ((pptb == "pedra" && args == "tesoura") ||
              (pptb == "papel" && args == "pedra") ||
              (pptb == "tesoura" && args == "papel")) {
              var vit = "derrota"
            } else if ((pptb == "pedra" && args == "pedra") ||
              (pptb == "papel" && args == "papel") ||
              (pptb == "tesoura" && args == "tesoura")) {
              var vit = "empate"
            } else if (vit = "undefined") {
              return reply("deu erro...")
            }
            if (vit == "vitoria") {
              var tes = "Vitória do jogador"
            }
            if (vit == "derrota") {
              var tes = "A vitória é do bot"
            }
            if (vit == "empate") {
              var tes = "O jogo terminou em empate"
            }
            reply(`Bot jogou: ${pptb}\nO jogador jogou: ${args}\n\n${tes}`)
            if (tes == "Vitória do jogador") {
              reply(pph)
            }
            break



          case "jokenpo":
          if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply("Comando só para grupos.");
            if (args.length < 1) return reply(`Exemplo: ${prefix}jokenpo pedra`);

            const opptions = ["pedra", "papel", "tesoura"];
            const botChoice = opptions[Math.floor(Math.random() * opptions.length)];
            const userChoice = args[0].toLowerCase();

            let resuult;
            let reward = 0;

            if (!opptions.includes(userChoice)) {
              resuult = "Opção inválida, escolha entre pedra, papel ou tesoura.";
            } else if (botChoice === userChoice) {
              resuult = "Empate!";
            } else if (
              (botChoice === "pedra" && userChoice === "tesoura") ||
              (botChoice === "papel" && userChoice === "pedra") ||
              (botChoice === "tesoura" && userChoice === "papel")
            ) {
              resuult = "Você perdeu!";
            } else {
              resuult = "Você ganhou!";
              reward = Math.floor(Math.random() * 50);
            }

            let message = `O bot escolheu: ${botChoice}\nVocê escolheu: ${userChoice}\n\n${resuult}`;

            if (reward > 0) {
              message += `\n\nParabéns! Você ganhou 🥳💥 `;
              // Aqui você pode adicionar sua lógica para dar a recompensa ao usuário.
            }

            reply(message);
            break;
          case "adivinhação":
          if (!isOwner) return reply(resposta.dono)
            if (!isGroup) return reply(`Comando só para grupos.`)
            if (args.length < 1) return reply(`Exemplo: ${prefix} adivinhacao 50`)
            const num = Math.floor(Math.random() * 100) + 1
            const guess = parseInt(args[0])
            if (isNaN(guess)) return reply('Digite um número válido.')
            if (guess < 1 || guess > 100) return reply('O número deve estar entre 1 e 100.')
            if (guess === num) {
              const premio = Math.floor(Math.random() * 50) + 1
              reply(`Parabéns, você acertou! O número era ${num}.\nVocê ganhou ${premio} em dinheiro.`)
            } else {
              reply(`Que pena, você errou. O número era ${num}. Tente novamente.`)
            }
            break




          case 'avalie':
          if (!isOwner) return reply(resposta.dono)
            if (!q) return enviar(`Ex: ${prefix} avaliação bot muito top..`)
            reply(`Avaliacão enviada com sucesso.`)
            let templateMeesssage = {
              image: {
                url: imagemdomenu,
                quoted: live
              },
              caption: `*💦️Avaliação💦*\nDo Número: @${sender.split('@')[0]},\nAvaliacão:\n${q}`,
              footer: 'Noelle_md'
            }
            client.sendMessage(`${numeroDono}@s.whatsapp.net`, templateMeesssage)
            break

 

          case 'ranklevel':
          case 'rl':
          case 'rank':
          if (!isOwner) return reply(resposta.dono)
            _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
            let leaderboardlvl = '    🏆《 Rank Niveis 》🏆\n\n'
            let nom = 0
            try {
              for (let i = 0; i < 10; i++) {
                nom++
                leaderboardlvl += `
  ┏ ✘🌖 ${nomeBot} 🌘✘┓
  ┃•────•───────•───•
  ┣❲🏆❳ [${nom}] ϟ➠ ${_level[i].id.replace('@s.whatsapp.net', '')}
  ┣❲🏆❳「xp」: ϟ${_level[i].xp}
  ┣❲🏆❳「Level」 :ϟ➠ ${_level[i].level}
  ┗ ──────「★」──────┚\n`

              }
              leaderboardlvl += `×•-•-•⟮ 🏆Ranking Level🏆⟯•-•-•×`
              client.sendMessage(from, { text: leaderboardlvl, sendEphemeral: true }, { quoted: live })
            } catch (err) {
              console.error(err)
              await reply(`Deve conter 10 pessoas com level, e o leveling deve está ativado para que aconteça a evolução de level dos membros, após as interações`)
            }
            break

          case 'clima':
          case 'tempo':
          if (!isOwner) return reply(resposta.dono)
            client.sendMessage(from, { react: { text: `📡`, key: info.key } })
            if (args.length < 1) return reply(`*Sintaxe correta para uso:* ${prefix + command} nome da cidade\n• Caso tenha algum acento, retire ok?`)
            cidade = body.slice(7)
            clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=f5c0840c2457fbb64188a6d4be05618f&units=metric&lang=pt_br`)
            if (clima.error) return reply(resposta.erro)
            jr = `🌞 Temperatura agora: ${clima.data.main.temp}ºC
  🏙️ Cidade: ${clima.data.name}
  🔥 Temperatura Máxima: ${clima.data.main.temp_max}°C
  ❄ Temperatura Mínima: ${clima.data.main.temp_min}°C
  🌦 Clima: ${clima.data.weather[0].description}
  💧 Umidade de ar: ${clima.data.main.humidity}% 
  🌫 Ventos: ${clima.data.wind.speed}  
  
  Solicitado por: ${pushname}`
            await client.sendMessage(from, { text: jr }, { quoted: info, contextInfo: { "mentionedJid": jr } })
            break


          case 'bangp':
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner && !isCmdy && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(resposta.Dono)
            if (isBanchat) return reply(`Este grupo ja está banido`)
            bancht.push(from)
            fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
            reply(`Grupo banido com sucesso`)
            break

          case 'unbangp':
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner) return reply(resposta.Dono)
            let cur = bancht.indexOf(from)
            bancht.splice(cur, 1)
            fs.writeFileSync('./functions/banchat.json', JSON.stringify(bancht))
            reply(`Grupo desbanido com sucesso...`)
            break


          case 'walpaperanime':
            if (!isPremium) return reply(resposta.premium)
            {
              json = JSON.parse(fs.readFileSync('./functions/fotos/wall.json').toString())
              random = json[Math.floor(Math.random() * json.length)]
              /*
              let proximo = [
                {buttonId: `${prefix + command}`, buttonText: {displayText: ' PROXIMO '}, type: 1},
                ]
                */
              templateMassage = {
                image: {
                  url: random,
                  quoted: live
                },
                caption: `${command}`,
                footer: `${nomeBot}`,
              }
              client.sendMessage(from, templateMassage)
            }
            break

          case 'deletar': case 'apagar': case 'delete': case 'del': case 'd':
            if (!isGroup) return reply(resposta.grupo)
            if (!isOwner && !isGroupAdmins) return reply(resposta.adm)
            client.sendMessage(from, { delete: { remoteJid: from, fromMe: true, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: sender } })
              .catch((err) => {
                console.log(err)
                reply('A mensagem não foi enviado pelo bot...')
              })
            break

          case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
            if (!isOwner) return reply(resposta.dono)
            if (!q) return reply(`Texto onde?\n\nExemplo : ${prefix + command} BOM DIA `)
            let getGroups = await client.groupFetchAllParticipating()
            let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anu = groups.map(v => v.id)
            for (let i of anu) {
              await sleep(150)
              let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
              client.sendMessage(i, { text: txt })
            }
            reply(`Enviando com sucesso `)
          }
            break

          case 'playvideo':
          if (!isOwner) return reply(resposta.dono)
            if (!q) return reply('*Quer pesquisar oq??*');
            reply('*enviando..*')
            dlk = await fetchJson(`https://api.brizaloka-api.tk/sociais/ytplaymp4?apikey=brizaloka&query=${q}`);
            Op = dlk.video
            client.sendMessage(from, { video: { url: Op } }, { quoted: live });
            break


          case 'playaudio':
          if (!isOwner) return reply(resposta.dono)
            reply('*enviando..*')
            bla = await fetchJson(`https://api.brizaloka-api.tk/sociais/v2/ytplaymp3?apikey=brizaloka&query=${q}`)
            audbla = bla.link_src
            client.sendMessage(from, { audio: { url: audbla }, mimetype: 'audio/mp4' }, { quoted: live })
            break





//====================//


          default:
            if (isCmd && command) {
              const buttonMessage = { text: `comando inexistente...` }
              client.sendMessage(from, buttonMessage)
            }

        }

      } catch (e) {
        console.log(e)
      }
    });

  }
  // Conectar à rede do WhatsApp
  starts();

} catch (error) {
  console.error("Ocorreu um erro:", error);
}
