export default {
    command: ["wpget", "wpg", "wattpadget"],
    description: "Get Information about author, description etc",
    name: "wpget",
    tags: "wattpad",

    loading: true,

    run: async (m) => {
        const url = m.args[0];

        setTimeout(() => {
            if (!url) {
                m.reply(`${global.msg.putLink}`)
            };
        }, 1000);

        if (url) {

            const apiUrl = `${global.APIs.neoxr + "/api/wpget?url=" + encodeURIComponent(url) + "&apikey=" + global.APIKeys.neoxr}`;
        
            let response;

            try {
                response = await func.fetchJson(apiUrl);
            } catch (error) {
                console.error(error);
            };

            if (response.status !== true) throw "Something error in API";

            if (m.args[1] == "parts") {

                const ress = response.data.parts;
                let tx = '';

                for (let j of ress) {
                    tx += `Title: ${j.title}\n`;
                    tx += `Url: ${j.url}\n\n`;
                };

                try {
                    await m.reply(thumbnail, {caption: tx});
                } catch (error) {
                    cosnole.error(error);
                    m.reply(error);
                };
            } else {

            const { title, description, author } = response.data;

            let txt =
            `
Title: ${title || "Unknown"}
Author: *${author || "Unknown"}*\n
Description: ${description || "Unknown"}\n
            `;

            try {
                await m.reply(response.data.thumbnail, {caption: txt + "\n*If you wanna see a parts, you can type parts after you paste link wattpad!*"});
            } catch (error) {
                console.error(error);
                m.reply(error);
            }
            }
        }
    }
}