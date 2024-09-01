import axios from "axios"

export default {
  command: ["roastgh", "ghroast"],
  description: "roasting your github",
  name: "roastgh",
  tags: "fun",
  
  loading: true,
  owner: true,
  
  run: async (m, { text }) => {
    const gh = text
    
    const ApiUrl = "https://github-roast.pages.dev/llama"
    
    let response
    
    try {
      response = await axios.post(ApiUrl, { username : `${gh}`, language : "indonesian"}).data
    } catch (err) {
      console.error(err)
    }
    
    let roasting = response.roast
    
    try {
      m.reply(roasting)
    } catch (err) {
      m.reply("Error: " + err)
      console.error(err)
    }
  }
}