//---------------------------------------------------------------------------
const { cmd, commands } = require('../command');
const config = require('../config');
const prefix = config.PREFIX;
const fs = require('fs');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../lib/functions');
const { writeFileSync } = require('fs');
const path = require('path');

let antilinkAction = "off"; // Default state
let warnCount = {}; // Track warnings per user

//--------------------------------------------
//  AUTO-TYPING COMMANDS
//--------------------------------------------
cmd({
    pattern: "auto_typing",
    alias: ["faketyping"],
    desc: "enable or disable auto-typing.",
    category: "settings",
    filename: __filename
},    
async (conn, mek, m, { from, args, isOwner, reply }) => {
    if (!isOwner) return reply("*📛 ᴏɴʟʏ ᴛʜᴇ ᴏᴡɴᴇʀ ᴄᴀɴ ᴜsᴇ ᴛʜɪs ᴄᴏᴍᴍᴀɴᴅ!*");

    const status = args[0]?.toLowerCase();
    // Check the argument for enabling or disabling the anticall feature
    if (args[0] === "on") {
        config.AUTO_TYPING = "true";
        return reply("*auto_typing  is now enabled.*");
    } else if (args[0] === "off") {
        config.AUTO_TYPING = "false";
        return reply("fake_typing feature is now disabled.");
    } else {
        return reply(`*🫟 Example: . Auto_Typing On*`);
    }
});