export default {
  command: ["githubowner", "ghowner", "ghow"],
  description: "show github owner this bot",
  name: "ghowner",
  tags: "main",
  
  loading: true,
  
  run: async (m) => {
    if (m.args[0]) {
      m.reply("don't add any text for this command!")
    } else {
      setTimeout(() => {
        m.reply("https://github.com/FazzRqy")
      }, 500)
      setTimeout(() => {
        m.reply("This my owner github, dont forget to give a star")
      }, 550)
    }
  }
}