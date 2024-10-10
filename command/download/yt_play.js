export default {
    command: ["play", "ytplay"],
    description: "Download youtube audio using query",
    name: "play",
    tags: "download",

    loading: false,

    run: async (m, { text }) => {
        const qy = text
        const Apikeys = global.APIKeys.neoxr
        const URLApi = global.APIs.neoxr

        if (!qy) {
            await m.reply(`Example: ${ m.prefix + m.command } Doja - Central Cee`)
        } else {
            m.reply(global.msg.searching)

        const urlApi = `${URLApi + '/api/play?q=' + encodeURIComponent(qy) + '&apikey=' + Apikeys}`

        console.log(urlApi)

        let response

        try {
            response = await func.fetchJson(urlApi)
        } catch (error) {
            console.log(error)
            m.reply("error", error)
        }

        if (response.status == false) throw 'Fetch Error/Failed'

        const { title, channel, thumbnail, duration, views, publish } = response

        let thumb = thumbnail

        console.log(response.data)

        let replyText = `
title: ${title || "Unknown"}
views: ${views || "Unknown"}
duration: ${duration || "Unknown"}
channel: ${channel || "Unknown"}
publish: ${publish || "Unknown"}
        `

        const sendFile = await response.data.url

        console.log(sendFile)

        try {
            m.reply( thumb,  { caption: replyText, mimetype: "image/jpeg" } )
            m.reply( sendFile, { caption: "Done", mimetype: "audio/mpeg" })
        } catch (err) {
            m.reply("Error: " + err)
            console.error(err);
        }
    }
    }
    }