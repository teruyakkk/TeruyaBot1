const { antiSpam } = require('./antiSpam');

function handleMessage(message) {
    // Verificar se a mensagem é um spam
    const isSpam = antiSpam(message);

    // Se for spam, tomar medidas apropriadas
    if (isSpam) {
        console.log('Mensagem detectada como spam. Bloqueando...');
        // Implemente aqui a lógica para bloquear o usuário ou mensagem
    } else {
        console.log('Mensagem válida.');
        // Se não for spam, continuar com o processamento normal
        // Implemente aqui a lógica para processar a mensagem normalmente
    }
}

module.exports = { handleMessage };
