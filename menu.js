
const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const imageUrl = 'https://i.ibb.co/1tQYm6zR/4z-S9-P9-Rhm9.jpg';

cmd({
    pattern: "menu",
    react: "📂",
    alias: ["panel", "commands"],
    desc: "බොට් විධාන ලැයිස්තුව ලබා ගන්න",
    category: "main",
    use: '.menu',
    filename: __filename
},
async (conn, mek, m, { from, quoted, pushname, reply }) => {
    try {
        const selectionMessage = `
*_PRIME ALPHA-XMD COMMAND LIST 🤖_*

> *🤖 NAME BOT : PRIME ALPHA-XMD*
> *📡 VERSION : 1.0*
> *🌟 PREFIX : [.]*
> *👨‍💻 OWNER : SHERON ELIJAH*
> *🚀 RAM : UNLIMITED*

> *> ® ᴘᴏᴡᴇʀᴅ by ᴡʜɪᴛᴇ ᴀʟᴘʜᴀ ᴡᴏʟꜰ x ᴛᴇᴀᴍ 🐺
┌────────────────···▸*
*│╭─────────────···▸*
*┴│▸* 
*◈│▸* *1. DOWNLOAD MENU*
*◈│▸* *2. SEARCH MENU* 
*◈│▸* *3. AI MENU*
*◈│▸* *4. OWNER MENU*
*◈│▸* *5. GROUP MENU*
*◈│▸* *6. INFO MENU*
*◈│▸* *7. CONVERTER MENU*
*◈│▸* *8. RANDOM MENU*
*◈│▸* *9. WALLPAPERS MENU*
*◈│▸* *10. OTHER MENU*
*┬│▸*
*│╰────────────···▸▸*
*└────────────────···▸*

> ©POWERD BY PRIME ALPHA-XMD
`;

        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: selectionMessage,
            contextInfo: { forwardingScore: 999, isForwarded: true },
        }, { quoted: mek });

        // පරිශීලක ප්‍රතිචාර ලබා ගැනීම
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userResponse = msg.message.extendedTextMessage.text.trim();
            if (msg.message.extendedTextMessage.contextInfo &&
                msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {

                let responseText;

                switch (userResponse) {
                    case '1': // DOWNLOAD MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📥 DOWNLOADER-MENU 📥* *❒⁠⁠⁠⁠* 
*┋* *.ANIME*
*┋* *.ANIMEGIRL*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '2': // SEARCH MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🔎 SEARCH-MENU 🔍* *❒⁠⁠⁠⁠* 
*┋* *.VV*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '3': // AI MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🧠 AI-MENU 🧠* *❒⁠⁠⁠⁠* 
*┋* *.AI*
*┋* *.OPENAI*
*┋* *.DEEPSEEK*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '4': // OWNER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👨‍💻 OWNER-MENU 👨‍💻* *❒⁠⁠⁠⁠* 
*┋* *.SETTINGS*
*┋* *.OWNER*
*┋* *.SYSTEM*
*┋* *.BLOCK*
*┋* *.SETPP*
*┋* *.RESTART*
*┋* *.VV*
*┋* *.HACK*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '5': // GROUP MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *👥 GROUP-MENU 👥* *❒⁠⁠⁠⁠* 
*┋* *.DELETE*
*┋* *.MUTE*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '6': // INFO MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *📃 INFO-MENU 📃* *❒⁠⁠⁠⁠* 
*┋* *.MENU*
*┋* *.ALIVE*
*┋* *.SYSTEM*
*┋* *.PING*
*┋* *.ANIME*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '7': // CONVERTER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🎡 CONVERTER-MENU 🎡* *❒⁠⁠⁠⁠* 
*┋* *.S*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '8': // WALLPAPERS MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *⛱️ RANDOM-MENU ⛱️* *❒⁠⁠⁠⁠* 
*┋* *.ANIME*
*┋* *.ANIMEGIRL*
*┋* *.COUPLEPP*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '9': // WALLPAPER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🏜️ WALLPAPERS-MENU 🏜️* *❒⁠⁠⁠⁠* 
*┋* *.IMG*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    case '10': // OTHER MENU
                        responseText = `
*╭────❒⁠⁠⁠⁠* *🌐 OTHER-MENU 🌐* *❒⁠⁠⁠⁠* 
*┋* *.HACK*
*╰───────────────────❒*

> ©POWERED BY PRIME ALPHA-XMD
`;
                        break;
                    default:
                        responseText = "*❌ Invalid option. Please enter a valid number (1-10)*";
                }

                // තෝරාගත් මෙනුව WhatsApp chat එකට යවයි.
                await conn.sendMessage(from, { text: responseText }, { quoted: mek });
            }
        });

    } catch (e) {
        console.error(e);
        reply(`*⚠️ An error occurred: ${e.message}*`);
    }
});
