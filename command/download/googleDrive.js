export default {
    command: ["gdr"],
    description: "Download Google drive",
    name: "gdr",
    tags: "download",

    owner: true,

    run: async (m) => {
        const url = m.args[0];

        m.reply(global.msg.dlloading)

        setTimeout(() => {
            if (!url) throw `Example: ${m.prefix + m.command} *url google drive*`
        }, 1000);

        const ApiUrl = `${global.APIs.neoxr + "/api/gdrive?url=" + encodeURIComponent(url) + "&spikey=" + global.APIKeys.neoxr}`

        let response;

        try {
            response = await func.fetchJson(ApiUrl); 
        } catch (error) {
            console.log(error)
            m.reply(error)
        }

        if (!response.data) throw "Error"

        const file = response.data.url ? response.data.url : "Not Found"; 

        await m.reply(file)

    }
}