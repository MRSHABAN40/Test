const { getContentType } = require('@whiskeysockets/baileys');

cmd({
    pattern: "sendme",
    desc: "Forwards the latest viewed status",
    category: "utility",
    react: "📢",
    filename: __filename
}, async (conn, mek, m, { from, quoted, reply }) => {
    try {
        // Check if status updates exist
        const statusUpdates = conn.store.messages["status@broadcast"];
        if (!statusUpdates || statusUpdates.length === 0) {
            return reply("❌ No recent status found!");
        }

        // Loop through statuses and forward
        for (const status of statusUpdates) {
            if (status.message.imageMessage) {
                await conn.sendMessage(from, { 
                    image: status.message.imageMessage, 
                    caption: "*📢 Forwarded Status*" 
                }, { quoted: mek });
            } else if (status.message.videoMessage) {
                await conn.sendMessage(from, { 
                    video: status.message.videoMessage, 
                    caption: "*📢 Forwarded Status*" 
                }, { quoted: mek });
            } else if (status.message.conversation) {
                await conn.sendMessage(from, { 
                    text: `📢 *Forwarded Status:*\n\n${status.message.conversation}` 
                }, { quoted: mek });
            } else {
                reply("⚠️ Unsupported status format!");
            }
        }
    } catch (e) {
        console.log(e);
        reply("⚠️ Error forwarding status!");
    }
});