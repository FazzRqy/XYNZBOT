export default {
    command: ["mediafire", "mfdl"],
    description: "Download file mediafire",
    name: "mfdl",
    tags: "download",

    loading: true,

    run: async (m) => {
        const Url = m.args[0]

        const ApiUrl = `https://api.agatz.xyz/api/mediafire?url=${Url}`

        let response

        try {
            response = await func.fetchJson(ApiUrl)
        } catch (error) {
            console.error(error)
        }

        const { nama, mime, size, link } = response.data
        
        const replyTxt = `
name: ${nama || "Unknown"}\n
mime: ${mime || "Unknown"}\n
size: ${size || "Unknown"}\n
        `

        const sendfile = link

        try {
            await m.reply(replyTxt)
            await m.reply( sendfile )
        } catch (error) {
            m.reply("error" + error)
            console.error(error)
        }
    }
}