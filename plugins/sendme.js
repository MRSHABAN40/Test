const { cmd } = require("../command");

cmd({
    pattern: "sendme",
    alias: ["send", "snd", "snt", "sent", "send me", "sent me"],
    desc: "Forward media messages with caption",
    category: "utility",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {
        if (m.isGroup) return; // گروپ چیٹس میں کام نہ کرے
        if (!m.quoted) return reply("⚠️ براہ کرم کسی میڈیا میسج پر ریپلائی کریں۔");

        const quotedMsg = m.quoted;
        const messageType = Object.keys(quotedMsg.message || {})[0]; // میسج کا ٹائپ چیک کریں
        const allowedTypes = ["imageMessage", "videoMessage", "audioMessage", "documentMessage"];

        if (!allowedTypes.includes(messageType)) {
            return reply("⚠️ براہ کرم کسی *میڈیا میسج* پر ریپلائی کریں، جیسے کہ تصویر، ویڈیو، آڈیو، یا ڈاکیومنٹ۔");
        }

        const caption = quotedMsg.message[messageType]?.caption || "Keep Using *SHABAN-MD*";

        await conn.sendMessage(from, {
            forward: quotedMsg,
            caption: caption,
            contextInfo: {
                mentionedJid: [sender],
                isForwarded: false,
                forwardingScore: 999,
            }
        }, { quoted: mek });

        await mek.react("✅"); // کامیابی کا ری ایکشن

    } catch (error) {
        console.error("Error in sendme command:", error);
        await reply("❌ *Error:* " + error.message);
    }
});