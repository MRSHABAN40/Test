const config = require('../config');
const { cmd } = require('../command');
const { ytsearch, ytmp3, ytmp4 } = require('@dark-yasiya/yt-dl.js'); 

// Audio

cmd({ 
     pattern: "audio", 
     alias: ["audio2", "audio3"], 
     react: "🎶", 
     desc: "Download Youtube song",
     category: "main", 
     use: '.song < Yt url or Name >', 
     filename: __filename }, 
     async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
     
     try { 
         if (!q) return await reply("Please provide a YouTube URL or song name.");

         let apiUrl = `https://api.genux.me/api/download/ytmp3?query=${encodeURIComponent(q)}`;
         
         let response = await fetch(apiUrl);
         let data = await response.json();
         
         if (!data.status || !data.result.dl_link) {
             return reply("Failed to fetch the audio. Please try again later.");
         }
         
         let yts = data.result;
         let ytmsg = `╭━━━〔 *🎶 YOUTUBE MUSIC 🎶* 〕━━━⊷
┃  
┃ 🔹 *Title:*  ${yts.title}
┃ 🔹 *Duration:*  ${yts.duration.timestamp}
┃ 🔹 *Views:*  ${yts.views.toLocaleString()}
┃ 🔹 *Author:*  ${yts.author.name}
┃ 🔹 *Uploaded:*  ${yts.ago}
┃ 🔹 *Link:*  [Click Here](${yts.url})
┃  
╰━━━━━━━━━━━━━━━━━━━⊷
🎧 *Your song is ready! Download below* ⬇️  

> *© 𝙋𝙤𝙬𝙚𝙧𝙚𝙙 𝘽𝙮 𝙎𝙝𝙖𝙗𝙖𝙣-𝙈𝘿 ♡*`;

         // Send song details + image in a single message
         await conn.sendMessage(from, { image: { url: yts.image || yts.thumbnail }, caption: ytmsg }, { quoted: mek });
         
         // Send audio file
         await conn.sendMessage(from, { audio: { url: yts.dl_link }, mimetype: "audio/mpeg" }, { quoted: mek });
         
         // Send document file
         await conn.sendMessage(from, { 
             document: { url: yts.dl_link }, 
             mimetype: "audio/mpeg", 
             fileName: `${yts.title}.mp3`, 
             caption: ytmsg
         }, { quoted: mek });

     } catch (e) {
         console.log(e);
         reply("An error occurred. Please try again later.");
     }

});