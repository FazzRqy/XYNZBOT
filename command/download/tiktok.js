export default {
  command: ["tt", "tiktok"],
  name: "tiktok",
  tags: "download",
  
  run: async (m) => {

    const url = m.args[0]
    const qy = m.args[1]
    if (!url) {
        m.reply(`example: ${m.prefix + m.command} https://vm.tiktok.com/ZSYWAJDRP/ video`)
    } else {

      let cekUrl = /https:\/\/(www\.|vm\.|vt\.)?tiktok\.com\/.*/
      let match = url.match(cekUrl)
      if (!match) {
        m.reply("Make sure you put the url correcly!")
    } else {
    
    if (qy == "audio") {
      m.reply(global.msg.dlloading)
      const apikeys = global.APIKeys.neoxr
      
      const ApiUrl = `${global.APIs.neoxr}/api/tiktok?url=${url}&apikey=${apikeys}`
      
      let response
      
      try {
        response = await func.fetchJson(ApiUrl)
      } catch (err) {
        console.log(err)
      }
      
      if (!response.data) throw "Sorry error, please make sure you put the correct link!"
      
      const audio = response.data.audio
      const txt = response.caption
      
      try {
        await m.reply(audio, { mimetype: "audio/mpeg" })
        m.reply(txt + "\n\n\n```If you want to download TikTok images or video, add the image/video after you paste the TikTok link that you copied earlier.```")
      } catch (e) {
        m.reply(e)
        console.log(e)
      }
    } else if (qy == "image") {
      
      const apikeys = global.APIKeys.neoxr
      
      const ApiUrl = `${global.APIs.neoxr}/api/tiktok?url=${url}&apikey=${apikeys}`
      
      let response
      
      try {
        response = await func.fetchJson(ApiUrl)
      } catch (err) {
        console.log(err)
      }
      
      if (!response.data) throw "Sorry error, please make sure you put the correct link!"
      
      const image = response.data.image
      const txt = response.caption
      
      try {
        await m.reply(image, { caption: txt + "\n\n\nIf you want to download TikTok audio or video, add the audio/video after you paste the TikTok link that you copied earlier." })
      } catch (e) {
        m.reply(e)
        console.log(e)
      }
    } else if (qy == "video") {
      const apikeys = global.APIKeys.neoxr
      
      const ApiUrl = `${global.APIs.neoxr}/api/tiktok?url=${url}&apikey=${apikeys}`
      
      let response
      
      try {
        response = await func.fetchJson(ApiUrl)
      } catch (err) {
        console.log(err)
      }
      
      if (!response.data) throw "Sorry error, please make sure you put the correct link!"
      
      const video = response.data.video
      const txt = response.caption
      
      try {
        await m.reply(video, { caption: txt + "\n\n\nIf you want to download TikTok images or audio, add the image/audio after you paste the TikTok link that you copied earlier." })
      } catch (e) {
        m.reply(e)
        console.log(e)
      }
    } else {
      
      const apikeys = global.APIKeys.neoxr
      
      const ApiUrl = `${global.APIs.neoxr}/api/tiktok?url=${url}&apikey=${apikeys}`
      
      let response
      
      try {
        response = await func.fetchJson(ApiUrl)
      } catch (err) {
        console.log(err)
      }
      
      if (!response.data) throw "Sorry error, please make sure you put the correct link!"
      
      const video = response.data.video
      const txt = response.caption
      
      try {
        await m.reply(video, { caption: txt + "\n\n\nIf you want to download TikTok images or audio, add the image/audio after you paste the TikTok link that you copied earlier." })
      } catch (e) {
        m.reply(e)
        console.log(e)
      }
    }
  }
  }
  }
}