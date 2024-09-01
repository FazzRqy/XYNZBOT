export default {
    command: ["wps", "wattpads"],
    desacription: "search story wattpad",
    name: "wps",
    tags: "wattpad",

    loading: true,

    run: async (m, { text }) => {
        const qy = text;

        setTimeout(() => {
            if (!qy) {
                m.reply(`${global.msg.noText}`);
            };
        }, 1000);

        if (qy) {

            m.reply(`${global.msg.searching}`);

            const apiUrl = `${global.APIs.neoxr + "/api/wattpad?q=" + encodeURIComponent(qy) + "&apikey=" + global.APIKeys.neoxr}`;

            let ress;
            let txt = '';

            try {
                ress = await func.fetchJson(apiUrl);
            } catch (error) {
                console.error(error);
            };

            let response = ress.data;

            for (let i of response) {
                txt += `Title: ${i.title || "Unknown"}\n`;
                txt += `Parts: ${i.parts || "Unknown"}\n`;
                txt += `Status: ${i.status || "Unknown"}\n`;
                txt += `Author: ${i.author.name || "Unknown"}\n`;
                txt += `Reads: ${i.reads || "Unknown"}\n`;
                txt += `Url: ${i.url || "Unknown"}\n\n`;
            };

            try {
                await m.reply(txt);
            } catch (error) {
                console.error(error)
                m.reply(error);
            };
        }
    }
}