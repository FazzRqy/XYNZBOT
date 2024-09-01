export default {
    command: ["wpr", "wattpadread"],
    description: "read story Wattpad in whatsapp",
    name: "wpr",
    tags: "wattpad",

    run: async (m) => {
        const url = m.args[0];

        setTimeout(() => {
            if (!url) {
                m.reply(global.msg.putLink);
            }
        }, 1000);

        if (url) {
            m.reply(global.msg.loading)

            const urlApi = `${global.APIs.neoxr + "/api/wpread?part=" + url + "&apikey=" + global.APIKeys.neoxr}`;

            let response;

            try {
                response = await func.fetchJson(urlApi);
            } catch (error) {
                console.error(error);
            }

            const {title, category, part, reads, by, content } = response.data;

            let txt =
            `
    Title: ${title || "Unknown"}
    Category: ${category || "Unknown"}
    Part: ${part || "Unknown"}
    Reads: ${reads || "Unknown"}
    By: *${by || "Unknown"}*\n
Content:\n\n${content || "Undefined"}
            `;

            try {
                await m.reply(thumbnail, {caption: txt});
            } catch (error) {
                console.error(error);
                m.reply(error);
            };
        };
    },
};