const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "alive",
    alias: ["status", "runtime", "uptime"],
    desc: "Check uptime and system status",
    category: "main",
    react: "📟",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Get system info
        const platform = "Heroku Platform"; // Fixed deployment platform
        const release = os.release(); // OS version
        const cpuModel = os.cpus()[0].model; // CPU info
        const totalMem = (os.totalmem() / 1024 / 1024).toFixed(2); // Total RAM in MB
        const usedMem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB

        // Stylish and detailed system status message
        const status = `╭───❰ 𝑺𝑯𝑨𝑩𝑨𝑵-𝑴𝑫 ❱───➤
┃ ✨ 𝗨𝗽𝘁𝗶𝗺𝗲: *${runtime(process.uptime())}*
┃ 💾 𝗥𝗮𝗺 𝗨𝘀𝗮𝗴𝗲: *${usedMem}MB / ${totalMem}MB*
┃ 🧑‍💻 𝗗𝗲𝗽𝗹𝗼𝘆𝗲𝗱 𝗢𝗻: *${platform}*
┃ 🔧 𝗖𝗣𝗨: *${cpuModel}*
┃ 👨‍💻 𝗢𝘄𝗻𝗲𝗿: *𝗠𝗿 𝗦𝗵𝗮𝗯𝗮𝗻*
┃ 🧬 𝗩𝗲𝗿𝘀𝗶𝗼𝗻: *𝟯.𝟬.𝟬 𝗕𝗘𝗧𝗔*
╰───────────────────────➤
💥 𝗣𝗼𝘄𝗲𝗿𝗲𝗗 𝗕𝗬: 𝗠𝗿 𝗦𝗵𝗮𝗯𝗮𝗻`;

        // Send image + caption + audio combined
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/tasodv.jpg` },  
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363358310754973@newsletter',
                    newsletterName: 'SʜᴀʙᴀɴMᴅ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Attach audio within the same "quoted" message for grouping
        await conn.sendMessage(from, { 
            audio: { url: 'https://github.com/MRSHABAN40/SHABAN-MD_DATABASE/raw/refs/heads/main/Menu_Data/alive.mp3' },
            mimetype: 'audio/mp4',
            ptt: true 
        }, { quoted: mek });

    } catch (e) {
        console.error("Error in alive command:", e);
        reply(`🚨 *An error occurred:* ${e.message}`);
    }
});