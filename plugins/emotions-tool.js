const { cmd } = require('../command');

cmd({
    pattern: "happy",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "😂",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '😂' });
        const emojiMessages = [
            "😃", "😄", "😁", "😊", "😎", "🥳",
            "😸", "😹", "🌞", "🌈", "😃", "😄",
            "😁", "😊", "😎", "🥳", "😸", "😹",
            "🌞", "🌈", "😃", "😄", "😁", "😊"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "heart",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "❤️",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🖤' });
        const emojiMessages = [
            "💖", "💗", "💕", "🩷", "💛", "💚",
            "🩵", "💙", "💜", "🖤", "🩶", "🤍",
            "🤎", "❤️‍🔥", "💞", "💓", "💘", "💝",
            "♥️", "💟", "❤️‍🩹", "❤️"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "angry",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🤡",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '👽' });
        const emojiMessages = [
            "😡", "😠", "🤬", "😤", "😾", "😡",
            "😠", "🤬", "😤", "😾"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "sad",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "😶",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '😔' });
        const emojiMessages = [
            "🥺", "😟", "😕", "😖", "😫", "🙁",
            "😩", "😥", "😓", "😪", "😢", "😔",
            "😞", "😭", "💔", "😭", "😿"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "shy",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🧐",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🧐' });
        const emojiMessages = [
            "😳", "😊", "😶", "🙈", "🙊",
            "😳", "😊", "😶", "🙈", "🙊"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "moon",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🌚",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🌝' });
        const emojiMessages = [
            "🌗", "🌘", "🌑", "🌒", "🌓", "🌔",
            "🌕", "🌖", "🌗", "🌘", "🌑", "🌒",
            "🌓", "🌔", "🌕", "🌖", "🌗", "🌘",
            "🌑", "🌒", "🌓", "🌔", "🌕", "🌖",
            "🌗", "🌘", "🌑", "🌒", "🌓", "🌔",
            "🌕", "🌖", "🌝🌚"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "confused",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🤔",
    filename: __filename
},
async (conn, mek, m, { from, reply }) => {
    try {
        const loadingMessage = await conn.sendMessage(from, { text: '🤔' });
        const emojiMessages = [
            "😕", "😟", "😵", "🤔", "😖", 
            "😲", "😦", "🤷", "🤷‍♂️", "🤷‍♀️"
        ];

        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay for 1 second
            await conn.relayMessage(
                from,
                {
                    protocolMessage: {
                        key: loadingMessage.key,
                        type: 14,
                        editedMessage: {
                            conversation: line,
                        },
                    },
                },
                {}
            );
        }
    } catch (e) {
        console.log(e);
        reply(`❌ *Error!* ${e.message}`);
    }
});

cmd({
    pattern: "hot",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "💋",
    filename: __filename
},
async (conn, mek, m, { from, isGroup }) => {
    try {
        // Check if command is used in a group
        if (!isGroup) {
            return await conn.sendMessage(from, { 
                text: "❌ *Error:* Yeh command sirf group mein kaam karti hai!" 
            }, { quoted: mek });
        }

        let loadingMessage;
        for (let i = 0; i < 3; i++) { // Try sending message up to 3 times
            loadingMessage = await conn.sendMessage(from, { text: '💋' });
            if (loadingMessage.key) break;
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait and retry
        }

        if (!loadingMessage?.key) {
            return await conn.sendMessage(from, { text: "❌ *Error:* Message key not found, try again." }, { quoted: mek });
        }

        // 🔥 New Animated Emoji Messages 🔥
        const emojiMessages = [
            "🔥🥵 *Too Hot to Handle!* 🥵🔥",
            "💋 *Kisses Incoming!* 💋",
            "❤️ *Full of Love & Passion!* ❤️",
            "👅 *Feeling Naughty?* 👅",
            "🤤 *Aag Laga Di!* 🤤",
            "🥶 *Thoda Cool Bhi Raho!* 🥶"
        ];

        // Send emoji animations with retry
        for (const line of emojiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay increased
            let success = false;

            for (let i = 0; i < 3; i++) { // Try editing up to 3 times
                try {
                    await conn.relayMessage(
                        from,
                        {
                            protocolMessage: {
                                key: loadingMessage.key,
                                type: 14,
                                editedMessage: {
                                    conversation: line,
                                },
                            },
                        },
                        {}
                    );
                    success = true;
                    break;
                } catch (error) {
                    console.log(`Retry ${i + 1}: ${error.message}`);
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }

            if (!success) {
                return await conn.sendMessage(from, { text: "❌ *Error:* Message edit failed." }, { quoted: mek });
            }
        }
    } catch (e) {
        console.log(e);
        return await conn.sendMessage(from, { text: `❌ *Error!* ${e.message}` }, { quoted: mek });
    }
});

// Nikal

cmd({
    pattern: "nikal",
    desc: "Displays a dynamic edit msg for fun.",
    category: "tools",
    react: "🗿",
    filename: __filename
},
async (conn, mek, m, { from, isGroup }) => {
    try {
        // Check if command is used in a group
        if (!isGroup) {
            return await conn.sendMessage(from, { 
                text: "❌ *Error:* Yeh command sirf group mein kaam karti hai! Kisi member ko tag karke use kare."
            }, { quoted: mek });
        }

        let loadingMessage;
        for (let i = 0; i < 3; i++) { // Try sending message up to 3 times
            loadingMessage = await conn.sendMessage(from, { text: '🔄 Loading...' });
            if (loadingMessage.key) break;
            await new Promise(resolve => setTimeout(resolve, 500)); // Wait and retry
        }

        if (!loadingMessage?.key) {
            return await conn.sendMessage(from, { text: "❌ *Error:* Message key not found, try again." }, { quoted: mek });
        }

        // 🔥 New ASCII Art Messages 🔥
        const asciiMessages = [
            "🚀 *Nikal Pehli Fursat Mein!* 🚀",
            "🔥 *Beta Mazak Ho Gaya?* 🔥",
            "💨 *Udhar Se Nikal!* 💨",
            "😆 *Ja Beta Ja...* 😆",
            "👋 *Bye Bye Tata!* 👋"
        ];

        // Send ASCII animations with retry
        for (const asciiMessage of asciiMessages) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // Delay increased
            let success = false;
            
            for (let i = 0; i < 3; i++) { // Try editing up to 3 times
                try {
                    await conn.relayMessage(
                        from,
                        {
                            protocolMessage: {
                                key: loadingMessage.key,
                                type: 14,
                                editedMessage: {
                                    conversation: asciiMessage,
                                },
                            },
                        },
                        {}
                    );
                    success = true;
                    break;
                } catch (error) {
                    console.log(`Retry ${i + 1}: ${error.message}`);
                    await new Promise(resolve => setTimeout(resolve, 500));
                }
            }

            if (!success) {
                return await conn.sendMessage(from, { text: "❌ *Error:* Message edit failed." }, { quoted: mek });
            }
        }
    } catch (e) {
        console.log(e);
        return await conn.sendMessage(from, { text: `❌ *Error!* ${e.message}` }, { quoted: mek });
    }
});