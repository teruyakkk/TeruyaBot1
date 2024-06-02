const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const app = express();
app.use(bodyParser.json());

const DISCORD_CHANNEL_ID = '1223313453540839497';
const DISCORD_TOKEN = 'ODg5NTgxODkxNjIyMTQyMDYy.GEezlb.kvqWRRjsENzHzwi9kFz_ZtNfvf9zRFdyDoiWT4';

client.once('ready', () => {
    console.log('Bot do Discord está online!');
});

app.post('/discord', async (req, res) => {
    const { groupId, senderId, messageText } = req.body;
    const channel = client.channels.cache.get(DISCORD_CHANNEL_ID);

    if (channel) {
        await channel.send(`Mensagem do WhatsApp\nGrupo: ${groupId}\nDe: ${senderId}\nMensagem: ${messageText}`);
        res.sendStatus(200);
    } else {
        res.sendStatus(404);
    }
});

client.login(DISCORD_TOKEN);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escutando na porta ${PORT}`);
});
