export default {
    command: ["otakus", "otks"],
    description: "search anime in otakudesu",
    name: "otakus",
    tags: "anime",

    loading: true,

    run: async (m,{ text }) => {
        let query = text

        if (!query) throw global.msg.noText

        const apiUrl = API("akane", "/api/otakudesu-search", { q: query })

        let response, ress

        let txt = ''

        try {
            ress = await func.fetchJson(apiUrl)
        } catch (error) {
            console.error(error)
        }

        if (ress.status !== 200) {
            m.reply("Sorry, Failed to fetch otakudesu")
        }

        response = ress.data

        for (let x of response) {
txt += `Title: ${x.title}\n`
txt += `Genres: ${x.genres}\n`
txt += `Status: ${x.status}\n`
txt += `Rating: ${x.rating}\n`
txt += `Link: ${x.link}\n\n`
        }

        try {
            await m.reply(txt)
        } catch (error) {
            console.error(error)
            m.reply('error')
        }
    }
}