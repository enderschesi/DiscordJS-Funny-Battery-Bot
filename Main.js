const { Client, CustomStatus } = require("discord.js-selfbot-v13");
const client = new Client({
    syncStatus: false,
    checkUpdate: false
});

function GetData() {
    const fs = require('fs')
    fs.readFile('IDs.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            console.log("ERROR READING ID FILE");
            return;
        }
        global.allowedchangerstring = String(data);
    });
    let rawdata = fs.readFileSync('Alters.json');
    global.Alters = JSON.parse(rawdata);
    values = [];
    for (var k in global.Alters) values.push(Object.getOwnPropertyDescriptor(Alters, k).value);
    global.valuesfinal = values
}


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
    var allowedchanger = new Set(['']);
    GetData();
    if (global.allowedchangerstring != undefined) {
        var allowedchanger = new Set(global.allowedchangerstring.split(","));
    }
    if (global.valuesfinal != undefined) {
        if (allowedchanger.has(msg.author.id)) {
            valueslocal = String(global.valuesfinal).split(",");
            if (valueslocal.includes(String(msg.content.toLowerCase()))) {
                const testvar = Object.keys(global.Alters).find(key => global.Alters[key] === String(msg.content.toLowerCase()));
                msg.reply("Status changed to: \"" + testvar + "\"");
                console.log("Status changed to: \"" + testvar + "\"");
                client.user.setPresence({ activities: [{ name: testvar }], status: 'online' });
                client.user.setStatus('online');
                client.settings.setCustomStatus({ text: testvar, status: 'online', expires: null });
            }
        }
    } else {
        valueslocal = String(global.valuesfinal).split(",");
        if (valueslocal.includes(String(msg.content.toLowerCase()))) {
            msg.reply("DiscordJS-System-Bot version: 1.0 loaded. Try again to change fronts");
        }
    }
});

client.login('TOKEN_GOES_HERE');