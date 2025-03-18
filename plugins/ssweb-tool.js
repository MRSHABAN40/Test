const axios = require("axios");
const config = require('../config');
const { cmd } = require('../command');

cmd({
  pattern: "sss",
  alias: ["screenweb"],
  react: "💫",
  desc: "Download screenshot of a given link.",
  category: "other",
  use: ".ss <link>",
  filename: __filename,
}, 
async (conn, mek, m, { from, q, reply }) => {
  if (!q) {
    return reply("❗ براہ کرم اسکرین شاٹ لینے کے لیے ایک لنک فراہم کریں۔");
  }

  try {
    const screenshotUrl = `https://bk9.fun/tools/screenshot?url=${encodeURIComponent(q)}`;

    const imageMessage = {
      image: { url: screenshotUrl },
      caption: "*📸 WEB SCREENSHOT DOWNLOADER*\n\n> *© Powered By Shaban Md*",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
      },
    };

    await conn.sendMessage(from, imageMessage, { quoted: m });
  } catch (error) {
    console.error("Error:", error);
    reply("⚠️ اسکرین شاٹ لینے میں ناکامی۔ براہ کرم دوبارہ کوشش کریں۔");
  }
});