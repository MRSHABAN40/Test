const config = require('../config');
const { cmd, commands } = require('../command');
const { runtime } = require('../lib/functions');
const axios = require('axios');

function isEnabled(value) {
    // Function to check if a value represents a "true" boolean state
    return value && value.toString().toLowerCase() === "true";
}

cmd({
    pattern: "env",
    alias: ["setting", "allvar"],
    desc: "Settings of bot",
    category: "menu",
    react: "⚙️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // VIP stylish settings message
        let envSettings = `┏━━━✦ *『 𝗩𝗜𝗣 𝗕𝗢𝗧 𝗦𝗘𝗧𝗧𝗜𝗡𝗚𝗦 』* ✦━━━┓
┃ 🚀 *𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐛𝐲 SHABAN-MD*  
┃————————————————————
┃ 🔰 *Status View:* ${isEnabled(config.AUTO_STATUS_SEEN) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 💬 *Status Reply:* ${isEnabled(config.AUTO_STATUS_REPLY) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 🤖 *Auto Reply:* ${isEnabled(config.AUTO_REPLY) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 🖼 *Auto Sticker:* ${isEnabled(config.AUTO_STICKER) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 🎙 *Auto Voice:* ${isEnabled(config.AUTO_VOICE) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ ❤️ *Custom Reacts:* ${isEnabled(config.CUSTOM_REACT) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 🔥 *Auto React:* ${isEnabled(config.AUTO_REACT) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 🔗 *Delete Links:* ${isEnabled(config.DELETE_LINKS) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 🚫 *Anti-Link:* ${isEnabled(config.ANTI_LINK) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ ⚠️ *Anti-Bad Words:* ${isEnabled(config.ANTI_BAD) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ ⌨️ *Auto Typing:* ${isEnabled(config.AUTO_TYPING) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 🎥 *Auto Recording:* ${isEnabled(config.AUTO_RECORDING) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 🌐 *Always Online:* ${isEnabled(config.ALWAYS_ONLINE) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 📢 *Public Mode:* ${isEnabled(config.PUBLIC_MODE) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃ 👀 *Read Message:* ${isEnabled(config.READ_MESSAGE) ? "✅ 𝗘𝗡𝗔𝗕𝗟𝗘𝗗" : "❌ 𝗗𝗜𝗦𝗔𝗕𝗟𝗘𝗗"}
┃————————————————————
┃ 📝 *Description:* ${config.DESCRIPTION}
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`;

        // Send message with an image
        await conn.sendMessage(
            from,
            {
                image: { url: 'https://files.catbox.moe/yoqs4t.jpg' }, // Stylish Image
                caption: envSettings,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: "SʜᴀʙᴀɴMᴅ",
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send an audio file
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/MRSHABAN40/SHABAN-MD_DATABASE/raw/refs/heads/main/Menu_Data/env.mp3' }, // Audio File
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.log(error);
        reply(`❌ *Error:* ${error.message}`);
    }
});