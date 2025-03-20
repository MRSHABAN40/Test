const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// Audio

cmd({ 
    pattern: "audio", 
    alias: ["aud", "audio1"], 
    react: "🕳️", 
    desc: "Download YouTube song",
    category: "main", 
    use: '.song <Yt url or Name>', 
    filename: __filename 
}, 
async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("❌ Please provide a YouTube URL or song name.");

        // Initial message
        await reply("🎶 Downloading Audio... Please wait for *SHABAN-MD* user!");

        // API Request
        let apiUrl = `https://api.genux.me/api/download/ytmp3?query=${encodeURIComponent(q)}`;
        console.log("🔗 API URL:", apiUrl); // Debugging

        let response = await fetch(apiUrl);
        let data = await response.json();

        console.log("📥 API Response:", data); // Debugging

        if (!data.status || !data.result || !data.result.dl_link) {
            return reply("❌ Failed to fetch the audio. Please try again later.");
        }

        let result = data.result;

        let ytmsg = `🎶 *SHABAN-MD MUSIC DOWNLOADER* 🎶

📀 *Title:* ${result.title}
⏳ *Duration:* ${result.duration.timestamp}
👤 *Channel:* ${result.author.name}
👁️ *Views:* ${result.views}
🔗 *YouTube Link:* ${result.url}
🕒 *Uploaded:* ${result.ago}

> *© Powered By Shaban-MD ♡*`;

        // Thumbnail selection
        let thumbnailUrl = result.thumbnail || result.image;

        // Send Thumbnail (if available)
        await conn.sendMessage(from, { 
            image: { url: thumbnailUrl }, 
            caption: ytmsg 
        }, { quoted: mek });

        console.log("🎼 Sending audio from URL:", result.dl_link); 

        // Send audio file
        await conn.sendMessage(from, { 
            audio: { url: result.dl_link }, 
            mimetype: "audio/mpeg" 
        }, { quoted: mek });

        console.log("✅ Audio sent successfully!");

    } catch (e) {
        console.log("❌ Error:", e); 
        reply("❌ An error occurred. Please try again later.");
    }
});