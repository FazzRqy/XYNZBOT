export default {
    command: ["otakud", "otkd"],
    description: "anime detail in otakudesu",
    example: "Contoh: %p%cmd otakudesu link", //%p = prefix, %cmd = command, %text = teks
    name: "otakud",
    tags: "anime",

    run: async (m) => {

        const url = m.args[0]

        const apiUrl = API("akane", "/api/otakudesu-detail", { url: url })

        console.log(apiUrl)
        let response

        try {
            response = await func.fetchJson(apiUrl)
        } catch (error) {
            console.error(error)
        }

        if (response.status !== 200) {
            m.reply('Sorry, Failed to fetch otakudesu')
        }

        console.log(response)

        const { judul, image, japanese, skor, produser, tipe, status, total_episode, durasi, tanggal_rilis, studio, genre, sinopsis, batch } = response.data

        const replyText = `
${judul || "Unknown"}\n
${japanese || "Unknown"}\n
${skor || "Unknown"}\n
${produser || "Unknown"}\n
${tipe || "Unknown"}\n
${status || "Unknown"}\n
${total_episode || "Unknown"}\n
${durasi || "Unknown"}\n
${tanggal_rilis || "Unknown"}\n
${studio || "Unknown"}\n
${genre || "Unknown"}\n
Sinopsis: ${sinopsis || "Unknown"}\n
Batch: ${batch || "Unknown"}\n
        `

        try {
            await m.reply( image, { caption: replyText })
        } catch (error) {
            m.reply('error')
            console.error(error)
        }

    }
}