const { Client, CustomStatus } = require("discord.js-selfbot-v13");
const client = new Client({
    syncStatus: false,
    checkUpdate: false
});
const {setTimeout} = require('timers/promises');


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
    let rawdata = fs.readFileSync('Battery.json');
    global.Battery = JSON.parse(rawdata);
    values = [];
    for (var k in global.Battery) values.push(Object.getOwnPropertyDescriptor(Battery, k).value);
    global.valuesfinal = values
}


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
    let allowedchanger = new Set(['']);
    GetData();
    if (global.allowedchangerstring !== undefined) {
        global.allowedchangerstring = allowedchangerstring.replace("\n", '');
        allowedchanger = new Set(global.allowedchangerstring.split(","));
    }
    let valueslocal;
    if (global.valuesfinal !== undefined) {
        if (allowedchanger.has(msg.author.id)) {
            console.log("Allowed change")
            valueslocal = String(global.valuesfinal).split(",");
            if (valueslocal.includes(String(msg.content.toLowerCase()))) {
                const testnum = Object.keys(global.Battery).find(key => global.Battery[key] === String(msg.content.toLowerCase()));
                const testvar = "an 8.420v battery (" + testnum + "%)"
                msg.reply("Nickname changed to: " + testvar);
                msg.guild.members.me.setNickname(testvar).then(r=> console.log("Changed username to: " + testvar))
            }
        }
    } else {
        valueslocal = String(global.valuesfinal).split(",");
        if (valueslocal.includes(String(msg.content.toLowerCase()))) {
            msg.reply("DiscordJS-Funny-Battery-Bot version: 1.0 loaded. Try again to change percentage");
        }
    }
});

client.login('IFUCKINGPOSTEDMYTOKENHERE');