const { cmd } = require("../command");

cmd({
    pattern: "sendme",
    alias: ["send", "snd", "snt", "sent", "send me", "sent me"],
    desc: "Forward media messages with caption",
    category: "utility",
    filename: __filename
}, async (conn, m, { from, sender, reply }) => {
    try {
        if (m.isGroup) return; // Ignore group messages
        if (!m.body) return; // Ignore empty messages

        const message = m.body.toLowerCase().trim();
        const keywords = ["send me", "sendme", "send", "snd", "snt", "sent", "sent me"];
        let detectedKeyword = keywords.find(keyword => message.includes(keyword));

        if (!detectedKeyword) return; // Ignore if no keyword matches

        // Function to forward message with caption
        const forwardWithCaption = async (msgToForward) => {
            const msgType = Object.keys(msgToForward.message)[0]; // Get the message type
            const caption = msgToForward.message[msgType]?.caption || 'Keep Using SHABAN-MD'; // Custom bot name

            await conn.sendMessage(from, {
                forward: msgToForward, // Forward the original message
                caption: caption,
                contextInfo: {
                    mentionedJid: [sender],
                    isForwarded: false,
                    forwardingScore: 999,
                }
            }, { quoted: m });

            await m.react('✅'); // React with success
        };

        // Check if the message has multimedia (video, audio, image, voice)
        const isMultimedia =
            m.message?.videoMessage || 
            m.message?.audioMessage || 
            m.message?.imageMessage || 
            m.message?.voiceMessage;

        if (isMultimedia) {
            await forwardWithCaption(m);
        } else {
            // If it's a reply, check if the quoted message is multimedia
            if (m.quoted?.message) {
                const quotedMessage = m.quoted.message;
                const isQuotedMultimedia =
                    quotedMessage.videoMessage || 
                    quotedMessage.audioMessage || 
                    quotedMessage.imageMessage || 
                    quotedMessage.voiceMessage;

                if (isQuotedMultimedia) {
                    await forwardWithCaption(m.quoted);
                } else {
                    await reply("⚠️ Please reply to a multimedia message.");
                    await m.react('❌');
                }
            } else {
                await reply("⚠️ Please reply to a WhatsApp status.");
                await m.react('❌');
            }
        }

    } catch (error) {
        console.error("Error in sendme command:", error);
        await reply("❌ *Error:* " + error.message);
    }
});