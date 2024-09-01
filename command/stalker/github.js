import axios from "axios"
export default {
  command: ["ghs", "sgh"],
  description: "Stalker account github",
  name: "ghs",
  tags: "stalker",
  
  loading: true,
  
  run: async (m, { text }) => {
    if (!m.args[0]) {
      setTimeout(() => {
        m.reply(`Example: ${m.prefix + m.command} FazzRqy`)
      }, 1000)
    } else {
    const user = text

    const apiUrl = `https://api.github.com/users/${user}`
   
 let response 
      
    try {
  response = await axios.get(apiUrl);
} catch (err) {
console.error(err)
}

const { avatar_url, login, html_url, type, name, location, bio, public_repos, followers, following, created_at, updated_at } = response.data;

const txt = `
Username: ${login || "Unknown"}
Url: ${html_url || "Not Found"}
Type: ${type || "Unknown"}
Name: ${name || "Unknown"}
Location: ${location || "Unknown"}
Bio: ${bio || "Unknown"}
Public Repos: ${public_repos || "Not Found"}
Followers: ${followers || "0"}
Following: ${following || "0"}
Created At: ${created_at || "Not Available"}
Updated Atv ${updated_at || "Not Available"}`;

try {
await m.reply(avatar_url, { caption: txt});
} catch (err) {
console.error(err)
m.reply("Err: " + err)
}
    }
  }
}