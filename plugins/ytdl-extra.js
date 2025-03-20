const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// Audio

cmd({
  'pattern': "audio",
  'alias': "audio2",
  'desc': "To download songs.",
  'react': '🎵',
  'category': "download",
  'filename': __filename
}, async (conn, mek, m, { from, quoted, reply, q }) => {
  try {
    if (!q) {
      return reply("Please provide a song name or YouTube URL.");
    }

    const searchResults = await yts(q);
    if (!searchResults.videos.length) {
      return reply("No results found.");
    }
    
    const video = searchResults.videos[0]; 
    const videoUrl = video.url;
    const videoTitle = video.title;
    
    let messageText = `
   ┏┻━━━━━━━━━━━━━
   ┃ *Shaban-MD Song Download*
   ┗━━━━━━━━━━━━━━
   ╭────────────────❖
   │ ℹ️ *SHABAN-MD* 
   │
   │🎵 *Title:* ${videoTitle} 
   ╰────────────────❖
   ❖──────────────────❖
   ╭──────────────────❖
   │ 🛠 *Choose format:*  
   │  
   │ *1* - Audio File 🎶
   │ *2* - Document File 📂
   ╰──────────────────❖
   ⚡ Powered by *Shaban-MD*`;

    const msg = await conn.sendMessage(from, { text: messageText }, { quoted: mek });

    // Fetching the audio download link from new API
    try {
      const apiResponse = await fetchJson(`https://bandahealimaree-api-ytdl.hf.space/api/ytmp3?url=${videoUrl}`);
      if (!apiResponse.status || !apiResponse.download.downloadUrl) {
        return reply("⚠️ Failed to fetch the download link.");
      }

      const downloadUrl = apiResponse.download.downloadUrl;

      // Listening for user response
      conn.ev.once('messages.upsert', async (msgUpdate) => {
        const responseMsg = msgUpdate.messages[0];
        if (!responseMsg.message || !responseMsg.message.extendedTextMessage) return;

        const selectedOption = responseMsg.message.extendedTextMessage.text.trim();
        const contextInfo = responseMsg.message.extendedTextMessage.contextInfo || {};

        if (contextInfo.stanzaId === msg.key.id) {
          if (selectedOption === '1') {
            await conn.sendMessage(from, {
              audio: { url: downloadUrl },
              mimetype: "audio/mpeg"
            }, { quoted: mek });
          } else if (selectedOption === '2') {
            await conn.sendMessage(from, {
              document: { url: downloadUrl },
              mimetype: "audio/mpeg",
              fileName: `${videoTitle}.mp3`,
              caption: "\n*© Created by Shaban-MD*"
            }, { quoted: mek });
          } else {
            reply("❌ Invalid option! Please select *1* or *2*.");
          }
        }
      });

    } catch (err) {
      reply("⚠️ Failed to fetch the download link.");
      console.error(err);
    }

  } catch (error) {
    console.error(error);
    reply("⚠️ An error occurred.");
  }
});