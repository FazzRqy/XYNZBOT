export default {
  command: ["tomp3"],
  description: "Convert video to audio",
  name: "tomp3",
  tags: "convert",
  
  loading: true,
  
  run: async (m) => {
    const video = await m.quoted.download();
    
    if (!video || m.quoted.mime !== "video/mp4") return m.reply("\`\`\`Reply or send video not sticker or image\`\`\`");
    
    try {
      await m.reply(video, {mimetype: "audio/mpeg"});
    } catch (err) {
      m.reply("Error");
      console.log(err);
    };
  },
};