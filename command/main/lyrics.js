export default {
  command: ["lirik", "lyrics"],
  description: "search lyrics",
  name: "lyrics",
  tags: "tools",
  
  loading: true,
  
  run: async (m, { text }) => {
    if (!text) {
      setTimeout(() => {
        m.reply(`example: ${m.prefix + m.command} night changes`)
      }, 1000)
    } else {
      m.reply(global.msg.loading)

      const title = text
      
      const ApiUrl = `https://api.nyxs.pw/tools/lirik?title=${encodeURIComponent(title)}`
      
      let response
      
      try {
        response = await func.fetchJson(ApiUrl)
      } catch (err) {
        console.error(err)
      }
      
      let hasil = response.result

      if (hasil) {
        await m.reply(`lyrics of ${title}\n\n` + hasil)
      } else {
        await m.reply(response.message)
    }
    } 
  }
}