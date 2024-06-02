let messageCount = 0;
let blocked = false;

function antiSpam(message) {
    // Verificar se o antispam está bloqueado
    if (blocked) {
        console.log('Anti-spam bloqueado. Esperando...');
        return true;
    }

    // Incrementar o contador de mensagens
    messageCount++;

    // Verificar se o limite de mensagens foi atingido
    if (messageCount > 3) {
        // Bloquear o antispam por 5 segundos
        blocked = true;
        setTimeout(() => {
            blocked = false;
            messageCount = 0;
        }, 5000);
        console.log('Limite de spam atingido. Bloqueando por 5 segundos...');
        return true;
    }

    // Se não houver spam, retornar false
    return false;
}

module.exports = { antiSpam };