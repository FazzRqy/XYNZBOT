export default {
  command: ["tt", "tiktok"],
  name: "tiktok",
  tags: "download",
  
  run: async (m) => {
    
    if (!m.args[0]) {
      setTimeout(() => {
        m.reply(`download tiktok video, audio & image",
  example: "Please put tiktok link\n\nIf you want to download TikTok audio or images, add the words audio/image after you paste the link\n\n example:\n${m.prefix + m.command} https://vm.tiktok.com/ZSYWAJDRP/ video`)
      }, 1500)
    }
    
    if (m.args[1] == "audio") {
      const url = m.args[0]
      
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
        m.reply("*" + txt + "*" + "\n\n\nIf you want to download TikTok images or video, add the image/video after you paste the TikTok link that you copied earlier.")
      } catch (e) {
        m.reply(e)
        console.log(e)
      }
    } else if (m.args[1] == "image") {
      const url = m.args[0]
      
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
        await m.reply(image, { caption: "*" + txt + "*" + "\n\n\nIf you want to download TikTok audio or video, add the audio/video after you paste the TikTok link that you copied earlier." })
      } catch (e) {
        m.reply(e)
        console.log(e)
      }
    } else if (m.args[1] == "video") {
      const url = m.args[0]
      
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
        await m.reply(video, { caption: "*" + txt + "*" + "\n\n\nIf you want to download TikTok images or audio, add the image/audio after you paste the TikTok link that you copied earlier." })
      } catch (e) {
        m.reply(e)
        console.log(e)
      }
    } else {
      const url = m.args[0]
      
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
        await m.reply(video, { caption: "*" + txt + "*" + "\n\n\nIf you want to download TikTok images or audio, add the image/audio after you paste the TikTok link that you copied earlier." })
      } catch (e) {
        m.reply(e)
        console.log(e)
      }
    }
  }
}