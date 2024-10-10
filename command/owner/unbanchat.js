export default {
  command: ["unbanchat", "ubnc"],
  name: "unbanchat",
  tags: "owner",

  group: true,
  
  run: async (m) => {
    if (m.isOwner == true) {
    try {
      let chat = db.data.chats[m.chat];
      chat.isBanned = false;

      m.reply("Chat has been unbanned.");
    } catch (error) {
      console.error(error);
      m.reply("An error occurred while trying to ban the chat.");
    }
  } else if (m.isAdmin == true) {
    try {
      let chat = db.data.chats[m.chat];
      chat.isBanned = false;

      m.reply("Chat has been unbanned.");
    } catch (error) {
      console.error(error);
      m.reply("An error occurred while trying to ban the chat.");
    }
  } else {
    m.relpy("Sorry, this features only can access by admin and owner")
  }
  },
};
