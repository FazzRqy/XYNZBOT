export default {
    command: ["openai", "chatgpt", "ai"],
    description: "Search some informasion using chatgpt (GPT-4 Mini)",
    name: "openai",
    tags: "ai",

    run: async (m, { text }) => {
        if (!text) return m.reply(`example use: ${m.prefix + m.command} list of snipers`);

            const data = API("neoxr","/ai/gpt4-mini", { text: text }, { apikey: globalThis.APIKeys.neoxr});
            let response;

            console.log(data);
    
            try {
                response = await func.fetchJson(data);
            } catch (error) {
                console.error(error);
            };
    
            console.log(response);
            
            try {
                await m.reply(response.result);
            } catch (error) {
                console.error(error);
                m.reply("Error");
            };
    },
};