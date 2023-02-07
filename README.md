# DiscordJS-System-Bot
A discord.js-selfbot-v13 bot to change your discord status to what alter is fronting (intended for DID/OSDD systems)

**TSA: THIS IS AGAINST DISCORDS TOS. USE AT YOUR OWN RISK. I AM NOT RESPONSIBLE FOR ANY ACCOUNT BANS FOR USING THIS BOT. This breaks TOS because it is considered a self-bot.**

**This Discord self-bot needs your discord token to be able to login to your discord account so it can modify your discord status**

# Prerequisites:
1. Install [NodeJS](https://nodejs.org/en/download/)
2. After NodeJS is installed open command prompt and run `npm install discord.js-selfbot-v13@latest`

# How to install
1. Open `Main.js` in any text editor
2. Scroll down to the very bottom
3. Change `TOKEN_GOES_HERE` to your discord token
4. Format alters in Alters.json:	

`"Value of status message for alter": "Exact discord message to change status"`

NOTE: (second value must be lowercase in the file but the actual message you send to change fronts can have any combination of uppercase and lowercase letters)

5. Format ID's.txt:

You must add the discord users ID's that you allow to change your alters (separated between a comma), ex:
`810676381154803743,123123123412341,14234234523452345`

To find a user's Discord ID (including your own), right-click their profile picture and select Copy ID

6. Extract files.zip and open the folder
7. Double click the start.bat file
9. Profit?

## How to get your Discord Token
<strong>Run code (Discord Console - [Ctrl + Shift + I])</strong>

```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

Credit: <img src="https://cdn.discordapp.com/emojis/889092230063734795.png" alt="." width="16" height="16"/> [<strong>hxr404</strong>](https://github.com/hxr404/Discord-Console-hacks)

FAQ:
1. Why would you want to let someone else to change whos fronting?
For littles and other alters that might not be able to change it themselves
2. How do I change whos fronting?
Use the "Exact discord message to change status" that you setup in step 4
3. Examples for file formatting?
Look in /Examples folder
