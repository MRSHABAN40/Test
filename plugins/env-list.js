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
        // VIP Clean & Stylish Settings Message
        let envSettings = `🔥 *SHABAN-MD BOT SETTINGS* 🔥

🛠 *Features & Status:*
✅ Status View: ${isEnabled(config.AUTO_STATUS_SEEN) ? "Enabled" : "Disabled"}
💬 Status Reply: ${isEnabled(config.AUTO_STATUS_REPLY) ? "Enabled" : "Disabled"}
🤖 Auto Reply: ${isEnabled(config.AUTO_REPLY) ? "Enabled" : "Disabled"}
🖼 Auto Sticker: ${isEnabled(config.AUTO_STICKER) ? "Enabled" : "Disabled"}
🎙 Auto Voice: ${isEnabled(config.AUTO_VOICE) ? "Enabled" : "Disabled"}
❤️ Custom Reacts: ${isEnabled(config.CUSTOM_REACT) ? "Enabled" : "Disabled"}
🔥 Auto React: ${isEnabled(config.AUTO_REACT) ? "Enabled" : "Disabled"}
🔗 Delete Links: ${isEnabled(config.DELETE_LINKS) ? "Enabled" : "Disabled"}
🚫 Anti-Link: ${isEnabled(config.ANTI_LINK) ? "Enabled" : "Disabled"}
⚠️ Anti-Bad Words: ${isEnabled(config.ANTI_BAD) ? "Enabled" : "Disabled"}
⌨️ Auto Typing: ${isEnabled(config.AUTO_TYPING) ? "Enabled" : "Disabled"}
🎥 Auto Recording: ${isEnabled(config.AUTO_RECORDING) ? "Enabled" : "Disabled"}
🌐 Always Online: ${isEnabled(config.ALWAYS_ONLINE) ? "Enabled" : "Disabled"}
📢 Public Mode: ${isEnabled(config.PUBLIC_MODE) ? "Enabled" : "Disabled"}
👀 Read Message: ${isEnabled(config.READ_MESSAGE) ? "Enabled" : "Disabled"}

📝 *Description:* ${config.DESCRIPTION}`;

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