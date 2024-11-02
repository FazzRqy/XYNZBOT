export default {
  command: ["aianime", "aanime", "ainime", "aanim", "anim"],
  description: "create picture anime with ai",
  name: "aianime",
  tags: "ai",
  
  loading: true,
  
  run: async (m, { text }) => {
    
    if (!text) return setTimeout(() => { m.reply(`Example:\n\n ${m.prefix + m.command} blue sky view with lost of hills`); }, 1000);
    const query = text
    
    const apikey = global.APIKeys.neoxr;
    
    const ApiUrl = `${global.APIs.neoxr}/api/ai-anime?q=${encodeURIComponent(query)}&apikey=${apikey}`;
    
    let response;
    
    try {
      response = await func.fetchJson(ApiUrl);
    } catch (err) {
      console.error(err);
    }
    
    const image = response.data.url;
    
    try {
      await m.reply(image, { mimetype: "image/jpeg" });
    } catch (err) {
      m.reply(err);
      console.error(err);
    };
    },
  };