export default {
    command: ["gh", "sgithub", "sgh", "gh", "stalkergh", "stalkergithub"],
    description: "stalker a github user",
    name: "sgh",
    tags: "stalker",

    loading: true,

    run: async (m, { text }) => {
        const qy = text

        if (!qy) throw global.msg.noText + `\n\n Example: ${ m.prefix + m.command } FazzRqy`

        const apikeys = global.APIKeys.arifzyn
        const urlApi = global.APIs.arifzyn

        const ApiUrl = `${urlApi + '/stalk/github?username=' + qy + '&apikey=' + apikeys}`

        console.log(ApiUrl);
        let response

        try {
            response = await func.fetchJson(ApiUrl)
        } catch (error) {
            console.error(error);
        }

        console.log(response)

        const { avatar_url, login, html_url, type, name, company, email, bio, twitter_username, public_repos, followers, following, created_at, updated_at } = response.result

        const replyTxt =
        `
Login: ${login || "Unknown"}
Name: ${name || "Unknown"}
Bio: ${bio || "Unknown"}
Url: ${html_url || "Unknown"}
Followers: ${followers || 0}
Following: ${following || 0}
Type: ${type}
Company: ${company || "Unknown"}
Email: ${email || "Unknown"}
Twitter username: ${twitter_username || "Unknown"}
Public repos: ${public_repos || 0}
Create at: ${created_at}
Updated at: ${updated_at}
        `

        try {
            await m.reply( avatar_url, { caption: replyTxt })
        } catch (error) {
            m.reply(global.msg.error + error)
            console.error(error);
        }
    }
}