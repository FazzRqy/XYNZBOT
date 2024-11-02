export default {
  command: ["waifudiff", "waidiff", "widiff", "wiff"],
  description: "generate waifu using ai",
  name: "waifudiff",
  tags: "ai",
  
  loading: true,
  owner: true,
  
  run: async (m, { text }) => {
    if (!text) return setTimeout(() => { m.reply(`Input the query\n\nexample\n\n${ m.prefix + m.command } long hair`)}, 1000);
    const query = text;
    
    const apikey = global.APIKeys.neoxr;
    
    const apiUrl = `${global.APIs.neoxr}/api/waifudiff?q=${encodeURIComponent(query)}&apikey=${apikey}`;
    
    let response;
    
    try {
      response = await func.fetchJson(apiUrl);
    } catch (err) {
      console.error(err);
    }
    
    const url = response.data.url;
    
    try {
      await m.reply( url, { caption: "Prompt: " + response.data.prompt, mimetype: "image/jpeg"});
    } catch (err) {
      m.reply(err);
      console.error(err);
    };
    },
  };