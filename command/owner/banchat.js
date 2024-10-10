export default {
  command: ["banchat", "bnc"],
  name: "banchat",
  tags: "owner",

  group: true,

  run: async (m) => {
    if (m.isOwner == true) {
    try {
      let chat = db.data.chats[m.chat];
      chat.isBanned = true;

      m.reply("Chat has been banned.");
    } catch (error) {
      console.error(error);
      m.reply("An error occurred while trying to ban the chat.");
    }
  } else if (m.isAdmin == true) {
    try {
      let chat = db.data.chats[m.chat];
      chat.isBanned = true;

      m.reply("Chat has been banned.");
    } catch (error) {
      console.error(error);
      m.reply("An error occurred while trying to ban the chat.");
    }
  } else {
    m.reply("Sorry, this features only can access by admin and owner")
  };
  },
};
