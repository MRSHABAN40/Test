const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// video DL

cmd({ 
    pattern: "darama-dl", 
    alias: ["drm"], 
    react: "💫", 
    desc: "Download Youtube video", 
    category: "main", 
    use: '.mp4 < YT URL or Name >', 
    filename: __filename 
}, async (conn, mek, m, { from, prefix, quoted, q, reply }) => { 
    try { 
        if (!q) return await reply("Please provide a YouTube URL or video name.");
        
        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("No results found!");

        let yts = yt.results[0];  
        let apiUrl = `https://bandahealimaree-api-ytdl.hf.space/api/ytmp4?url=${encodeURIComponent(yts.url)}`;
        
        let response = await fetch(apiUrl);
        let data = await response.json();

        if (!data.status || !data.download || !data.download.downloadUrl) {
            return reply("Failed to fetch the video. Please try again later.");
        }

        // Clean and modern message look
        let ytmsg = `🎷 *SHABAN-MD VIDEO DOWNLOADER* 🎷

📌 *Title:* ${data.download.title}
⏱️ *Duration:* ${data.result.duration} seconds
📺 *Channel ID:* ${data.result.channel_id}
🔗 *Link:* ${yts.url}
⏳ *Expires In:* ${data.download.expiresIn}`;

        // Send video details
        await conn.sendMessage(from, { image: { url: yts.thumbnail || '' }, caption: ytmsg }, { quoted: mek });

        // Send video file
        await conn.sendMessage(from, { video: { url: data.download.downloadUrl }, mimetype: "video/mp4" }, { quoted: mek });

    } catch (e) {
        console.log(e);
        reply("An error occurred. Please try again later.");
    }
});
