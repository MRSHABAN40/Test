const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')

cmd({
    pattern: "add",
    alias: ["aja"],
    react: "➕",
    desc: "Adds a user to the group and welcomes them.",
    category: "group",
    filename: __filename,
    use: '<number>',
},           
async (conn, mek, m, { from, args, q, isGroup, isBotAdmins, reply }) => {
    try {
        if (!isGroup) return reply("❌ This command can only be used in groups.");

        if (!isBotAdmins) return reply("❌ I need to be an admin to add users.");

        if (!q || isNaN(q)) return reply("❌ Please provide a valid phone number to add.");

        if (q.length < 10) return reply("❌ Invalid phone number. Please provide a complete number with the country code.");

        const userToAdd = `${q}@s.whatsapp.net`;

        // Add user to the group
        let response = await conn.groupParticipantsUpdate(from, [userToAdd], "add");

        console.log("Add User Response:", response); // Debugging

        // Check if response exists and handle different status codes
        if (response && response[0]) {
            switch (response[0].status) {
                case 200:
                    reply(`✅ User *${q}* has been added to the group.`);

                    // Welcome message with tag
                    let welcomeMessage = `🎉 Welcome to the group, @${q}! 🎉\n\nWe're happy to have you here. Please follow the group rules and enjoy your stay! 😊`;
                    
                    await conn.sendMessage(from, { 
                        text: welcomeMessage, 
                        mentions: [userToAdd] // Tagging the new user
                    });
                    break;
                case 403:
                    reply("❌ I can't add this user. They might have their privacy settings enabled.");
                    break;
                case 409:
                    reply("❌ User is already in the group.");
                    break;
                case 408:
                    reply("❌ Failed to add user. Please make sure the number is active on WhatsApp.");
                    break;
                default:
                    reply("❌ Couldn't add the user. Unknown error occurred.");
            }
        } else {
            reply("❌ Failed to get a response from WhatsApp. Please try again.");
        }
    } catch (e) {
        console.error("Error adding user:", e);
        reply("❌ An unexpected error occurred. Please try again later.");
    }
});
