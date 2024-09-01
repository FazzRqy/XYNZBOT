export default {
  command: ["ssweb", "ssw"],
  description: "screenshot web (Only desktop mode is available)",
  name: "ssweb",
  tags: "tools",
  
  loading: true,
  
  run: async (m) => {
    const webLink = m.args[0]
    
    if (!webLink) {
      setTimeout(() => {
        m.reply(`Where the url u want to screenshot?\nExample:\n\n${m.prefix + m.command} https://itch.io`)
      }, 500)
    } else {
    
    const ApiUrl = `https://api.nyxs.pw/tools/ssweb?url=${webLink}&tampilan=web`
    
    let response
    
    try {
      response = await func.fetchJson(ApiUrl)
    } catch (err) {
      console.error(err)
      m.reply(err)
    }
    
    const ssWeb = response.result
    
    try {
      await m.reply(ssWeb, { caption: "Done Screenshot webside: " + webLink, mimetype: "image/jpeg"})
    } catch (err) {
      m.reply(err)
    }
  }
  }
}