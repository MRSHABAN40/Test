const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const axios = require('axios');

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `
<🔥 *${config.BOT_NAME}* 🔥>
│👑 *Owner:* ${config.OWNER_NAME}
│🌀 *Baileys:* Multi Device
│💻 *Type:* NodeJs
│☁️ *Platform:* Heroku
│🌐 *Mode:* [${config.MODE}]
│⚡ *Prefix:* [${config.PREFIX}]
│🛠 *Version:* 3.0.0 Bᴇᴛᴀ
└───────────────

*🐣MENU LIST🐣*

➤ 🔄 Convertmenu
➤ 🕌 Quranmenu
➤ 🕋 Prayertime
➤ 🤖 Aimenu
➤ 📝 List
➤ ⬇️ Dlmenu
➤ 🗂 Mainmenu
➤ 👥 Groupmenu
➤ 👑 Ownermenu
➤ 🧩 Othermenu
➤ 🎉 Funmenu
➤ 💬 Reactions
➤ 🖼️ animemenu
-------------------------------------

➤ 🕌 *Quranmenu*
➤ 🕌 .surah1
➤ 🕌 .surah2
➤ 🕌 .surah3
➤ 🕌 .surah4
➤ 🕌 .surah5
➤ 🕌 .surah6
➤ 🕌 .surah7
➤ 🕌 .surah8
➤ 🕌 .surah9
➤ 🕌 .surah10
_________________________
➤ 🕋 *Prayertime*
➤ 🕋 .Prayertime
_________________________
➤ 🤖 *Aimenu*
➤ 🤖 .ai
➤ 🤖 .fluxai
➤ 🤖 .imagine2
➤ 🤖 .imagine3
➤ 🤖 .wallpaper
➤ 🤖 .image
_________________________
➤ 🖼️ *AnimeIMGE*
➤ 🖼️ .anime
➤ 🖼️ .anime1
➤ 🖼️ .anime2
➤ 🖼️ .anime3
➤ 🖼️ .anime4
➤ 🖼️ .anime5
➤ 🖼️ .garl
➤ 🖼️ .waifu
➤ 🖼️ .neko
➤ 🖼️ .maid
➤ 🖼️ .awoo
➤ 🖼️ .animegirl
➤ 🖼️ .animegirl1
➤ 🖼️ .animegirl2
➤ 🖼️ .animegirl3
➤ 🖼️ .animegirl4
➤ 🖼️ .animegirl5
➤ 🖼️ .dog
_________________________
➤ 💬 Reactions
➤ 😍 .cry
➤ 😍 .cuddle
➤ 😍 .bully
➤ 😍 .hug
➤ 😍 .awoo
➤ 😍 .lick
➤ 😍 .pat
➤ 😍 .smug
➤ 😍 .bonk
➤ 😍 .yeet
➤ 😍 .blush
➤ 😍 .handhold
➤ 😍 .highfive
➤ 😍 .nom
➤ 😍 .wave
➤ 😍 .smile
➤ 😍 .wink
➤ 😍 .happy
➤ 😍 .glomp
➤ 😍 .bite
➤ 😍 .poke
➤ 😍 .cringe
➤ 😍 .dance
➤ 😍 .kill
➤ 😍 .slap
➤ 😍 .kiss
_________________________
➤ 🔄 *Convertmenu*
➤ 🔄 .sticker
➤ 🔄 .topdf
➤ 🔄 .gif
➤ 🔄 .attp
➤ 🔄 .tts2
➤ 🔄 .tts3
➤ 🔄 .tts
➤ 🔄 .trt
➤ 🔄 .fancy
➤ 🔄 .gitclone
➤ 🔄 .url
➤ 🔄 .logo
➤ 🔄 .fetch
➤ 🔄 .emoji
_________________________
➤ 🎉 *Funmenu*
➤ 🎉 .define
➤ 🎉 .emix 😀,🤣
➤ 🎉 .happy
➤ 🎉 .heart
➤ 🎉 .angry
➤ 🎉 .sad
➤ 🎉 .shy
➤ 🎉 .moon
➤ 🎉 .confused
➤ 🎉 .hot
➤ 🎉 .nikal
➤ 🎉 .compatibility
➤ 🎉 .aura
➤ 🎉 .roast
➤ 🎉 .8ball
➤ 🎉 .compliment
➤ 🎉 .lovetest
➤ 🎉 .joke
➤ 🎉 .hack
_________________________
➤ ⬇️ *Dlmenu*
➤ 🎬 .capcut
➤ 🎵 .ringtone
➤ 📲 .tiktok2
➤ 🎥 .tiktok
➤ 🔍 .tiktoksearch
➤ 📸 .Instagram
➤ 🌀 .facebook
➤ 👻 .snapchat
➤ 🐦 .twitter
➤ 📂 .mediafire
➤ 📂 .gdrive  
➤ 📥 .apk
➤ ⬇️ .gdrive
➤ 💡 .likee
➤ 📌 .pinterest
➤ 🔎 .spotifysearch
➤ 🔎 .yts
➤ 🎥 .mp4
➤ 🎼 .mp3
➤ 📹 .video
➤ 🎥 .video2
➤ 🎞️ .video3
➤ 🎥 .video5
➤ 🎧 .play
➤ 🎶 .play2
➤ 🖼️ .img
_________________________
➤ 👥 *Groupmenu*
➤ 👥 .tagall
➤ 👥 .tag
➤ 👥 .taggp
➤ 👥 .hidetag
➤ 👥 .unmute
➤ 👥 .unlockgc
➤ 👥 .kickall
➤ 👥 .kickall2
➤ 👥 .kick
➤ 👥 .removeadmins
➤ 👥 .leave
➤ 👥 .join
➤ 👥 .invite
➤ 👥 .resetglink
➤ 👥 .jid1
➤ 👥 .gjid

_________________________
➤ 🧩 *Othermenu*
➤ 🧩 .ytsearch
➤ 🧩 .githubstalk
➤ 🧩 .tiktokstalk
➤ 🧩 .wikipedia
➤ 🧩 .movie
➤ 🧩 .srepo
➤ 🧩 .screenweb
➤ 🧩 .weather
➤ 🧩 .rcolor
➤ 🧩 .roll
➤ 🧩 .coinflip
➤ 🧩 .time
➤ 🧩 .date
➤ 🧩 .count
➤ 🧩 .shapar
_________________________
➤ 👑 *Ownermenu*
➤ 👑 .alive
➤ 👑 .version
➤ 👑 .antidelete
➤ 👑 .vv
➤ 👑 .env
➤ 👑 .allvar
➤ 👑 .pair
➤ 👑 .repo
➤ 👑 .sc
➤ 👑 .script
➤ 👑 .update
➤ 👑 .menu
➤ 👑 .list
➤ 👑 .owner
➤ 👑 .shutdown
➤ 👑 .broadcast
➤ 👑 .ping
➤ 👑 .speed
➤ 👑 .fetch
➤ 👑 .report
_________________________

*${config.DESCRIPTION}*`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/BpvTK6g/shaban-md.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/MRSHABAN40/SHABAN-MD_DATABASE/raw/refs/heads/main/Menu_Data/bot-menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// reaction Menu

cmd({
    pattern: "reactions",
    desc: "✨ 𝐒𝐡𝐨𝐰𝐬 𝐭𝐡𝐞 𝐫𝐞𝐚𝐜𝐭𝐢𝐨𝐧 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬 ✨",
    category: "🎭 𝙈𝙚𝙣𝙪",
    react: "💫",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `╔══════════════════╗
      *🌟 𝑹𝒆𝒂𝒄𝒕𝒊𝒐𝒏𝒔 𝑴𝒆𝒏𝒖 🌟*
  ╚══════════════════╝

╭──❍ *𝐀𝐜𝐭𝐢𝐨𝐧𝐬:* ❍──╮
┃ ◈ 💢 *𝑩𝒖𝒍𝒍𝒚* @tag  
┃ ◈ 🤗 *𝑪𝒖𝒅𝒅𝒍𝒆* @tag  
┃ ◈ 😢 *𝑪𝒓𝒚* @tag  
┃ ◈ 🤗 *𝑯𝒖𝒈* @tag  
┃ ◈ 🐺 *𝑨𝒘𝒐𝒐* @tag  
┃ ◈ 😘 *𝑲𝒊𝒔𝒔* @tag  
┃ ◈ 😋 *𝑳𝒊𝒄𝒌* @tag  
┃ ◈ 👋 *𝑷𝒂𝒕* @tag  
┃ ◈ 😏 *𝑺𝒎𝒖𝒈* @tag  
┃ ◈ 🔨 *𝑩𝒐𝒏𝒌* @tag  
┃ ◈ 🚀 *𝒀𝒆𝒆𝒕* @tag  
┃ ◈ 😊 *𝑩𝒍𝒖𝒔𝒉* @tag  
┃ ◈ 😁 *𝑺𝒎𝒊𝒍𝒆* @tag  
┃ ◈ 👋 *𝑾𝒂𝒗𝒆* @tag  
┃ ◈ 🙌 *𝑯𝒊𝒈𝒉𝒇𝒊𝒗𝒆* @tag  
┃ ◈ 🤝 *𝑯𝒂𝒏𝒅𝒉𝒐𝒍𝒅* @tag  
┃ ◈ 🍽 *𝑵𝒐𝒎* @tag  
┃ ◈ 🦷 *𝑩𝒊𝒕𝒆* @tag  
┃ ◈ 🤗 *𝑮𝒍𝒐𝒎𝒑* @tag  
┃ ◈ 👋 *𝑺𝒍𝒂𝒑* @tag  
┃ ◈ 🔪 *𝑲𝒊𝒍𝒍* @tag  
┃ ◈ 😄 *𝑯𝒂𝒑𝒑𝒚* @tag  
┃ ◈ 😉 *𝑾𝒊𝒏𝒌* @tag  
┃ ◈ 👉 *𝑷𝒐𝒌𝒆* @tag  
┃ ◈ 💃 *𝑫𝒂𝒏𝒄𝒆* @tag  
┃ ◈ 😬 *𝑪𝒓𝒊𝒏𝒈𝒆* @tag  
╰───────────✧

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/0rt9jy.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 144
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `❰ 📥 *DOWNLOAD MENU* 📥 ❱
┃ 🌀 *Facebook*  
┃ 📂 *Mediafire*  
┃ 🎥 *TikTok*  
┃ 🔍 *TikTok Search*  
┃ 📲 *TikTok 2*  
┃ 🐦 *Twitter*  
┃ 📸 *Instagram*  
┃ 👻 *Snapchat*  
┃ 💡 *Likee*  
┃ 🎬 *Capcut*  
┃ 📥 *APK*  
┃ 🖼️ *IMG*  
┃ 📌 *Pinterest*  
┃ 🎶 *Spotify-dl* 
┃ 🪩 *spotifysearch*
┃ 🔎 *YTS*  
┃ 🎧 *Play*  
┃ 🎶 *Play2*  
┃ 📹 *Video*  
┃ 🎥 *Video2*  
┃ 🎞️ *Video3*  
┃ 🎥 *Video5*  
┃ 🎼 *MP3*  
┃ 🎥 *MP4*  
┃ 📂 *Google Drive*  
┃ 🌐 *Web Screenshot*  
┃ 🎵 *Ringtone*
┃ 📸 *randomwall*
┃ 🧠 *FluxAI* 

╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/cimssc.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "📜 𝐌𝐞𝐧𝐮 𝐭𝐡𝐞 𝐁𝐨𝐭",
    category: "📂 𝙈𝙚𝙣𝙪",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `*🌟 𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮 🌟*

💠 *grouplink*
💠 *kickall*
💠 *kickall2*
💠 *removeadmins*
💠 *add*
💠 *remove*
💠 *left*
💠 *kick*
💠 *tag*
💠 *taggp*
💠 *hidetag*
💠 *tagall*
💠 *join*
💠 *invite*
💠 *resetglink*

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/lkfanv.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "😎",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        let dec = `𝗙𝘂𝗻 𝗠𝗲𝗻𝘂 😎\n
        ➤ *shapar*  
        ➤ *hack*  
        ➤ *joke*  
        ➤ *heart*  
        ➤ *happy*  
        ➤ *angry*  
        ➤ *sad*  
        ➤ *shy*  
        ➤ *moon*  
        ➤ *confused*  
        ➤ *hot*  
        ➤ *nikal*  
        ➤ *joke*  

        _${config.DESCRIPTION}_`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/c7m306.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• time
┃◈┃• date
┃◈┃• count
┃◈┃• coinflip
┃◈┃• rcolor
┃◈┃• roll
┃◈┃• fact
┃◈┃• rw
┃◈┃• fancy
┃◈┃• define
┃◈┃• news
┃◈┃• movie
┃◈┃• weather
┃◈┃• srepo
┃◈┃• wikipedia
┃◈┃• tiktokstalk
┃◈┃• githubstalk
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/faws7o.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• update
┃◈┃• version 
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/3ructm.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🔰",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• list
┃◈┃• antidelete
┃◈┃• vv
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• pair
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid1
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/5ein5e.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🥀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker
┃◈┃• gif
┃◈┃• emix 🤩,😀
┃◈┃• emoji
┃◈┃• fancy
┃◈┃• take
┃◈┃• tts
┃◈┃• trt
┃◈┃• tts2
┃◈┃• tts3
┃◈┃• attp
┃◈┃• url
┃◈┃• topdf
┃◈┃• fetch
┃◈┃• define
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/rk54m2.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "animemenu",
    desc: "menu the bot",
    category: "menu",
    react: "🧚",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `╭━━〔 *Anime Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fack
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• megnumin
┃◈┃• neko
┃◈┃• maid
┃◈┃• loli
┃◈┃• animegirl
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈┃• animenews
┃◈┃• foxgirl
┃◈┃• naruto
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/01rv4n.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━〔 *Ai Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ai
┃◈┃• gpt3
┃◈┃• gpt2
┃◈┃• gptmini
┃◈┃• gpt
┃◈┃• meta
┃◈┃• blackbox
┃◈┃• luma
┃◈┃• dj 
┃◈┃• khan
┃◈┃• jawad
┃◈┃• gpt4
┃◈┃• hack
┃◈┃• imagine 
┃◈┃• imagine2
┃◈┃• stablediffusion
┃◈┃• stabilityai
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/s5srbo.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
