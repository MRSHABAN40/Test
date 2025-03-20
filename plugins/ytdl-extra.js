const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 }

// Audio

cmd({ 
    pattern: "audio", 
    alias: ["aud", "audio1"], 
    react: "🎶", 
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

        const yt = await ytsearch(q);
        if (yt.results.length < 1) return reply("❌ No results found!");

        let yts = yt.results[0];  
        let apiUrl = `https://bandahealimaree-api-ytdl.hf.space/api/ytmp3?url=${encodeURIComponent(yts.url)}`;

        console.log("🔗 API URL:", apiUrl); // Debugging

        let response = await fetch(apiUrl);
        let data = await response.json();

        console.log("📥 API Response:", data); // Debugging

        if (!data.status || !data.download || !data.download.downloadUrl) {
            return reply("❌ Failed to fetch the audio. Please try again later.");
        }

        let ytmsg = `🎶 *SHABAN-MD MUSIC DOWNLOADER* 🎶

📀 *Title:* ${data.download.title}
⏳ *Duration:* ${data.result.duration} sec
🔗 *YouTube Link:* ${yts.url}
🕒 *Expires In:* ${data.download.expiresIn}

> *© Powered By Shaban-MD ♡*

Please select an option below:
1. Audio File
2. Document File
3. Cancel`;

        // Thumbnail URL selection
        let thumbnailUrl = data.result.thumbnail[0]?.url || yts.thumbnail;

        // Generate GIF Thumbnail
        let gifThumbnail = await getGifThumbnail(thumbnailUrl);
        if (gifThumbnail) {
            await conn.sendMessage(from, {
                video: { url: gifThumbnail },
                mimetype: "video/mp4",
                caption: ytmsg,
                gifPlayback: true
            }, { quoted: mek });
        } else {
            // If GIF fails, send normal image
            await conn.sendMessage(from, { 
                image: { url: thumbnailUrl }, 
                caption: ytmsg 
            }, { quoted: mek });
        }

        console.log("🎼 Sending audio from URL:", data.download.downloadUrl); 

        // Send audio file (as document)
        await conn.sendMessage(from, { 
            document: { url: data.download.downloadUrl }, 
            mimetype: "audio/mpeg",
            fileName: `${data.download.title}.mp3`
        }, { quoted: mek });

        console.log("✅ Audio sent successfully!");

    } catch (e) {
        console.log("❌ Error:", e); 
        reply("❌ An error occurred. Please try again later.");
    }
});
