export default {
  command: ["unbanchat", "ubnc"],
  name: "unbanchat",
  tags: "owner",

  owner: true,
  admin: true,

  run: async (m) => {
    try {
      let chat = db.data.chats[m.chat];
      chat.isBanned = false;

      m.reply("Chat has been unbanned.");
    } catch (error) {
      console.error(error);
      m.reply("An error occurred while trying to ban the chat.");
    }
  },
};
