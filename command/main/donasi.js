export default {
  command: ["donation", "donasi", "donate"],
  description: "donate if you want",
  name: "donate",
  tags: "main",
  
  run: async (m) => {
    m.reply(`if you want to support this owner you can donate here\n\nTri: *${global.number.Tri}*\nAxis: ${global.number.Axis}\nDana: *${global.number.Axis}*\n\nSaweria: *${global.linkDonate.saweria || "Null"}*\nTrakteer: ${global.linkDonate.trakteer}\n\n*Note: I don't force you to donate, it's all up to you, if you want to donate sincerely, I would like to thank you very much.*`)
  }
}