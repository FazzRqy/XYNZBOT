export default {
  command: ["owner", "creator"],
  tags: "main",
  name: "owner",

  run: async (m, { conn }) => {
    try {
      await conn.sendContact(m.chat, global.owner, m);
    } catch (e) {
      console.error(e);
      m.reply("error");
    }
  },
};
