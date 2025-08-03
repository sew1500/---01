const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions'); // Make sure this path is correct and the function is exported

cmd({
    pattern: "alive",
    alias: ["status", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Ensure 'pushname' is correctly populated from your bot's framework.
        // If 'pushname' is sometimes undefined, you might want to provide a fallback, e.g., 'mek.pushName || "User"'.
        const userPushName = pushname || "මිත්‍රයා"; // Fallback if pushname is not available

        // Generate system status message
        const status = `> *👋 ʜᴇʟʟᴏ..${userPushName}, PRIME ALPHA-XMD ɪs ᴀʟɪᴠᴇ ɴᴏᴡ !! 🧸*

*ʜᴇʟʟᴏ 👋 , ɪᴍ PRIME ALPHA-XMD !! ʜᴏᴡ ᴄᴀɴ ɪ ʜᴇʟᴘ ʏᴏᴜ ᴛᴏᴅᴀʏ 😊*

> *💤 ᴠᴇʀsɪᴏɴ  :* 0.0.1 ᴠ 
> *✨ ʜᴏsᴛ    :* ${os.hostname()}
> *⏰ ᴜᴘᴛɪᴍᴇ  :* ${runtime(process.uptime())}
> *📶 ᴍᴇᴍᴏʀʏ   :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB

> *© POWERED BY PRIME ALPHA-XMD ⚖*`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://i.ibb.co/1tQYm6zR/4z-S9-P9-Rhm9.jpg` },  // Ensure this URL is always accessible
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender], // Ensure m.sender is always a valid JID
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363369981563818@newsletter', // This JID needs to be valid and accessible
                    newsletterName: 'PRIME ALPHA-XMD-V1',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
