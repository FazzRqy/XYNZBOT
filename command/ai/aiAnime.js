export default {
  command: ["aianime", "aanime", "ainime", "aanim", "anim"],
  description: "create picture anime with ai",
  name: "aianime",
  tags: "ai",
  
  loading: true,
  
  run: async (m, { text }) => {
    
    if (!text) {
      setTimeout(() => {
        m.reply(`input the query\nExample:\n\n ${m.prefix + m.command} AK-47`)
      }, 1000)
    } else {
    const q = text
    
    const apikey = global.APIKeys.neoxr
    
    const ApiUrl = `${global.APIs.neoxr}/api/ai-anime?q=${encodeURIComponent(q)}&apikey=${apikey}`
    
    let response
    
    try {
      response = await func.fetchJson(ApiUrl)
    } catch (err) {
      console.error(err)
    }
    
    const image = response.data.url
    
    try {
      await m.reply(image, { caption: "Done", mimetype: "image/jpeg" })
    } catch (err) {
      m.reply(err)
      console.error(err)
    }
    }
  }
}