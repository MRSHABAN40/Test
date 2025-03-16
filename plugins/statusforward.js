const { jidNormalizedUser } = require("@whiskeysockets/baileys");

module.exports = {
    name: "sendme",
    description: "Forward WhatsApp Status to your chat.",
    command: ["sendme"],
    category: "utility",
    async handler(m, { conn }) {
        try {
            const user = m.sender;
            const statuses = await conn.fetchStatus(jidNormalizedUser("status@broadcast"));

            if (!statuses || statuses.length === 0) {
                return m.reply("No new status updates found.");
            }

            for (const status of statuses) {
                const msgOptions = { quoted: m };
                
                if (status.message.imageMessage) {
                    await conn.sendMessage(user, { image: status.message.imageMessage.url }, msgOptions);
                } else if (status.message.videoMessage) {
                    await conn.sendMessage(user, { video: status.message.videoMessage.url }, msgOptions);
                } else if (status.message.conversation) {
                    await conn.sendMessage(user, { text: status.message.conversation }, msgOptions);
                }
            }

            m.reply("✅ Status forwarded successfully.");
        } catch (error) {
            console.error("Error in sendme command:", error);
            m.reply("❌ Failed to fetch status.");
        }
    }
};