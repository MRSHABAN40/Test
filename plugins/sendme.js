const { cmd } = require("../command");

cmd({
    pattern: "sendme",
    alias: ["send", "snd", "snt", "sent", "send me", "sent me"],
    desc: "Forward media messages with caption",
    category: "utility",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {
        if (!m.quoted) return reply("⚠️ براہ کرم کسی *میڈیا میسج* پر ریپلائی کریں۔");

        const quotedMsg = m.quoted;
        const messageType = Object.keys(quotedMsg.message || {})[0];

        // سپورٹڈ میسج ٹائپس
        const allowedTypes = ["imageMessage", "videoMessage", "audioMessage", "documentMessage", "stickerMessage"];

        if (!allowedTypes.includes(messageType)) {
            return reply("⚠️ براہ کرم کسی *میڈیا میسج* پر ریپلائی کریں، جیسے کہ تصویر، ویڈیو، آڈیو، اسٹیکر، یا ڈاکیومنٹ۔");
        }

        const media = await quotedMsg.download(); // میڈیا ڈاؤنلوڈ کریں  
        const caption = quotedMsg.message[messageType]?.caption || "Keep Using *SHABAN-MD*";

        // میڈیا کو دوبارہ بھیجنا
        await conn.sendMessage(from, {
            mimetype: quotedMsg.message[messageType]?.mimetype || "",
            caption: caption,
            [messageType.replace("Message", "")]: media,
            contextInfo: { mentionedJid: [sender] }
        }, { quoted: mek });

        await mek.react("✅"); // کامیابی کا ری ایکشن

    } catch (error) {
        console.error("Error in sendme command:", error);
        await reply("❌ *Error:* " + error.message);
    }
});