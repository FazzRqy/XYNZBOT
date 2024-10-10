export default {
    command: ["mediafire", "mfdl"],
    description: "Download file mediafire",
    name: "mfdl",
    tags: "download",

    loading: true,

    run: async (m) => {
        const Url = m.args[0]

        if (!Url) {
            m.reply(global.msg.putLink)
        } else {
            let cekUrl = /https:\/\/(www\.)?mediafire\.com\/.*/

            let match = Url.match(cekUrl)
            
            if (!match) throw "Make sure you put the url correcly!"

        const ApiUrl = `${global.APIs.neoxr + "/api/mediafire/?url=" + encodeURIComponent(Url) + "&apikey=" + global.APIKeys.neoxr}`

        let response

        try {
            response = await func.fetchJson(ApiUrl)
        } catch (error) {
            console.error(error)
        }

        const { filename, mime, extension, uploaded, size, link } = response.data
        
        const replyTxt = `
name: ${filename || "Unknown"}\n
Extension: ${extension || "Unknown"}\n
Size: ${size || "Unknown"}\n
Uploaded: ${uploaded || "Unknown"}
        `

        const sendfile = link

        try {
            await m.reply( sendfile, {caption: replyTxt, fileName: filename, mimetype: `${mime}`})
        } catch (error) {
            m.reply(error)
            console.error(error)
        }
    }
    }
}