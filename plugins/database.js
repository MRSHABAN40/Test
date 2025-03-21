//---------------------------------------------------------------------------
const { cmd, commands } = require('../command');
const config = require('../config');
const prefix = config.PREFIX;
const fs = require('fs');
const axios = require('axios')
const os = require("os")
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../lib/functions');
const { writeFileSync } = require('fs');
const path = require('path');


let antilinkAction = "off"; // Default state
let warnCount = {}; // Track warnings per user


cmd({ 
  pattern: "setprefix", 
  alias: ["prefix"], 
  desc: "Change bot prefix.", 
  category: "settings", 
  filename: __filename 
}, async (conn, mek, m, { 
  from, 
  args, 
  isOwner, 
  reply 
}) => { 
  if (!isOwner) return reply("*📛 Only the owner can use this command!*"); 
  if (!args[0]) return reply("❌ Please provide a new prefix."); 
  const newPrefix = args[0]; 
  config.PREFIX = newPrefix; 
  // Save config to file 
  fs.writeFileSync('./config.json', JSON.stringify(config, null, 2)); 
  reply(`*Prefix changed to:* ${newPrefix}`); 
  const { exec } = require("child_process"); 
  reply("*_DATABASE UPDATE SHABAN-MD RESTARTING NOW...🚀_*"); 
  await sleep(1500); 
  exec("pm2 restart all"); 
  reply("*_SHABAN-MD STARTED NOW...🚀_*"); 
});

// MODE

cmd({
    pattern: "mode",
    desc: "Set bot mode to private or public.",
    category: "settings",
    filename: __filename,
}, async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 Only the owner can use this command!*");

    // Si aucun argument n'est fourni, afficher le mode actuel et l'usage
    if (!args[0]) {
        return reply(`📌 Current mode: *${config.MODE}*\n\nUsage: .mode private OR .mode public`);
    }

    const modeArg = args[0].toLowerCase();

    if (modeArg === "private") {
        config.MODE = "private";
        return reply("*_BOT MODE IS NOW SET TO PRIVATE ✅_*.");
    } else if (modeArg === "public") {
        config.MODE = "public";
        return reply("*_BOT MODE IS NOW SET TO PUBLIC ✅_*.")
        const {exec} = require("child_process")
reply("*_DATABASE UPDATE SHABAN-MD RESTARTING NOW...🚀_*")
await sleep(1500)
exec("pm2 restart all")
reply("*_SHABAN-MD STARTED NOW...🚀_*");
    } else {
        return reply("❌ Invalid mode. Please use `.mode private` or `.mode public`.");
    }
});

//  AUTO_TYPING

cmd({
    pattern: "auto_typing",
    alias: ["autotyping"],
    desc: "Enable or disable auto-reply.",
    category: "settings",
    filename: __filename
},    
(conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 Only the owner can use this command!*");

    const mode = args[0] ? args[0].toLowerCase() : null;

    if (!mode) {
        return reply(`*🫟 Usage: .auto_typing on/off*\n\n📌 Current Status: *${config.AUTO_TYPING ? "Enabled ☑️" : "Disabled ❌"}*`);
    }

    if (mode === "on") {
        reply("*✅ Auto-Typing feature is now ENABLED.*");
        config.AUTO_TYPING = true; // Fast execution
    } 
    
    else if (mode === "off") {
        reply("*❌ Auto-Typing feature is now DISABLED.*");
        config.AUTO_TYPING = false;
    } 
    
    else {
        return reply("*🫟 Invalid option! Use: .auto_typing on OR .auto_typing off*");
    }
});

//--------------------------------------------
// ALWAYS_ONLINE COMMANDS
//--------------------------------------------
//  AUTO-REPLY COMMANDS
//--------------------------------------------
cmd({
    pattern: "always_online",
    alias: ["alwaysonline"],
    desc: "enable or disable auto-reply.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.ALWAYS_ONLINE = "true";
        return reply("*_ALWAYSONLINE  IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.ALWAYS_ONLINE = "false";
        return reply("*_ALWAYSONLINE FEATURE IS NOW DISABLED._*❌");
    } else {
        return reply(`*🫟 ᴇxᴀᴍᴘʟᴇ: . ᴀʟᴡᴀʏs_ᴏɴʟɪɴᴇ ᴏɴ*`);
    }
});
//  AUTO-REPLY COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto_reacording",
    alias: ["autorecording"],
    desc: "enable or disable auto-reply.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_RECORDING = "true";
        return reply("*_FAKEREACORDING IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.AUTO_RECORDING = "false";
        return reply("*_FAKEREACORDING FEATURE IS NOW DISABLED._*❌");
    } else {
        return reply(`*🫟 ᴇxᴀᴍᴘʟᴇ: . ғᴀᴋᴇ_ʀᴇᴀᴄᴏʀᴅɪɴɢ ᴏɴ*`);
    }
});
//--------------------------------------------
// AUTO_VIEW_STATUS COMMANDS
//--------------------------------------------
cmd({
    pattern: "status_view",
    alias: ["auto_status_seen"],
    desc: "Enable or disable auto-viewing of statuses",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Default value for AUTO_VIEW_STATUS is "false"
    if (args[0] === "on") {
        config.AUTO_STATUS_SEEN = "true";
        return reply("*_AUTOREADSTATUS IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.AUTO_STATUS_SEEN = "false";
        return reply("*_AUTOREADSTATUS IS NOW DISABLED._*❌");
    } else {
        return reply(`*🫟 ᴇxᴀᴍᴘʟᴇ:  .ᴀᴜᴛᴏ-sᴇᴇɴ ᴏɴ*`);
    }
}); 
//--------------------------------------------
// AUTO_LIKE_STATUS COMMANDS
//--------------------------------------------
cmd({
    pattern: "status_react",
    alias: ["statusreact"],
    desc: "Enable or disable auto-liking of statuses",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Default value for AUTO_STATUS_REACT is "false"
    if (args[0] === "on") {
        config.AUTO_STATUS_REACT = "true";
        return reply("*_AUTOLIKESTATUS IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.AUTO_STATUS_REACT = "false";
        return reply("*_AUTOLIKESTATUS IS NOW DISABLED._*❌");
    } else {
        return reply(`Example: . status_react on`);
    }
});

//--------------------------------------------
//  READ-MESSAGE COMMANDS
//--------------------------------------------
cmd({
    pattern: "read_message",
    alias: ["autoread"],
    desc: "enable or disable readmessage.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.READ_MESSAGE = "true";
        return reply("*_READ MESSAGE FEATURE IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.READ_MESSAGE = "false";
        return reply("*_READ MESSAGE FEATURE IS NOW DISABLED._*❌");
    } else {
        return reply(`_example:  .READ_MESSAGE on_`);
    }
});
//--------------------------------------------
//  ANI-BAD COMMANDS
//--------------------------------------------
cmd({
    pattern: "anti_bad",
    alias: ["antibad"],
    desc: "enable or disable antibad.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.ANTI_BAD = "true";
        return reply("*_ANTI BAD WORD IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.ANTI_BAD = "false";
        return reply("*_ANTI BAD WORD FEATURE IS NOW DISABLED._*❌");
    } else {
        return reply(`_example:  .ANTI_BAD_WORD on_`);
    }
});
//--------------------------------------------
//  AUTO-STICKER COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto_sticker",
    alias: ["autosticker"],
    desc: "enable or disable auto-sticker.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_STICKER = "true";
        return reply("*_AUTO-STICKER FEATURE IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.AUTO_STICKER = "false";
        return reply("*_AUTO-STICKER FEATURE IS NOW DISABLED._*❌");
    } else {
        return reply(`_example:  .auto-sticker on_`);
    }
});
//--------------------------------------------
//  AUTO-REPLY COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto_reply",
    alias: ["autoreply"],
    desc: "enable or disable auto-reply.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_REPLY = "true";
        return reply("*_AUTO-REPLY  IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.AUTO_REPLY = "false";
        return reply("*_AUTO-REPLY FEATURE IS NOW DISABLED._*❌");
    } else {
        return reply(`*🫟 ᴇxᴀᴍᴘʟᴇ: . ᴀᴜᴛᴏ-ʀᴇᴘʟʏ ᴏɴ*`);
    }
});

//--------------------------------------------
//  AUTO-REPLY COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto_voice",
    alias: ["autovoice"],
    desc: "enable or disable auto-reply.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_VOICE = "true";
        return reply("*_AUTO-VOICE  IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.AUTO_VOICE = "false";
        return reply("*_AUTO-VOICE FEATURE IS NOW DISABLED._*❌");
    } else {
        return reply(`*🫟 ᴇxᴀᴍᴘʟᴇ: . ᴀᴜᴛᴏ_ᴠᴏɪᴄᴇ ᴏɴ*`);
    }
});

//--------------------------------------------
//   AUTO-REACT COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto_react",
    alias: ["autoreact","areact"],
    desc: "Enable or disable the autoreact feature",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_REACT = "true";
        await reply("*_AUTOREACT FEATURE IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.AUTO_REACT = "false";
        await reply("*_AUTOREACT FEATURE IS NOW DISABLED._*❌");
    } else {
        await reply(`*🫟 ᴇxᴀᴍᴘʟᴇ: .ᴀᴜᴛᴏ_ʀᴇᴀᴄᴛ ᴏɴ*`);
    }
});

//   AUTO-REACT COMMANDS
//--------------------------------------------
cmd({
    pattern: "custom_reacts",
    alias: ["heartreact","dillreact"],
    desc: "Enable or disable the autoreact feature",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.CUSTOM_REACT = "true";
        await reply("*_HEARTREACT FEATURE IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.CUSTOM_REACT = "false";
        await reply("*_HEARTREACT FEATURE IS NOW DISABLED._*❌");
    } else {
        await reply(`*🫟 ᴇxᴀᴍᴘʟᴇ: .ʜᴇᴀʀᴛ_ʀᴇᴀᴄᴛ ᴏɴ*`);
    }
});

//   AUTO-REACT COMMANDS
//--------------------------------------------
cmd({
    pattern: "anti_link",
    alias: ["antilink","anti"],
    desc: "Enable or disable the autoreact feature",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.ANTI_LINK = "true";
        await reply("*_OWNERREACT FEATURE IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.ANTI_LINK = "false";
        await reply("*_ANTI_LINK FEATURE IS NOW DISABLED._*❌");
    } else {
        await reply(`*🫟 ᴇxᴀᴍᴘʟᴇ: .Antilink_on/off*`);
    }
});
//--------------------------------------------
//  STATUS-REPLY COMMANDS
//--------------------------------------------
cmd({
    pattern: "status_reply",
    alias: ["autostatusreply"],
    desc: "enable or disable status-reply.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_STATUS_REPLY = "true";
        return reply("*_STATUS-REPLY FEATURE IS NOW ENABLED._*☑️");
    } else if (args[0] === "off") {
        config.AUTO_STATUS_REPLY = "false";
        return reply("*_STATUS-REPLY FEATURE IS NOW DISABLED._*❌");
    } else {
        return reply(`*🫟 ᴇxᴀᴍᴘʟᴇ:  .ᴀᴜᴛᴏ_ʀᴇᴘʟʏ_sᴛᴀᴛᴜs ᴏɴ*`);
    }
});

// databases created by @silentlover432 🚀📄♥️
