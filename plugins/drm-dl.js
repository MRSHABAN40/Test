const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js');

cmd({
    pattern: "darama",
    alias: ["drmdl"],
    react: "🐣",
    desc: "Download YouTube video",
    category: "main",
    use: '.mp4 <YouTube URL or Name>',
    filename: __filename
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
    try {
        if (!q) return await reply("Please provide a YouTube URL or song name.");

        let apiUrl = `https://bandahealimaree-api-ytdl.hf.space/api/ytmp4?url=${encodeURIComponent(q)}`;

        let response = await fetch(apiUrl);
        let data = await response.json();

        if (!data.status || !data.download.downloadUrl) {
            return reply("Failed to fetch the video. Please try again later.");
        }

        // Clean and modern message look
        let ytmsg = `🎬 *SHABAN-MD DARAMA DOWNLOADER* 🎬

📌 *Title:* ${data.download.title}
🕒 *Expires In:* ${data.download.expiresIn}
🔗 *Download URL:* ${data.download.downloadUrl}`;

        // Send video details
        await conn.sendMessage(from, {
            text: ytmsg
        }, { quoted: mek });

        // Send video as a document
        await conn.sendMessage(from, {
            document: { url: data.download.downloadUrl },
            mimetype: "video/mp4",
            fileName: `${data.download.title}.mp4`
        }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});