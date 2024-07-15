export default {
    command: ["openai", "chatgpt"],
    description: "gtw mau isi apaan ini bjir",
    name: "openai",
    tags: "ai",

    run: async (m, { text }) => {
        if (!text) m.reply(`try chat with ai/openai. \n\nexample: ${m.prefix + m.command} apa nama rumus kimia dari besi`)
        try {
            const data = API("widipe","/gpt4", { text: text })
            let response

            console.log(data)
    
            response = await func.fetchJson(data)
    
            console.log(response)
            
            await m.reply(response.result)
        } catch (error) {
            console.error(error);
            m.reply('Sorry, there seems to be an error: ' + error)
        }
    }
}