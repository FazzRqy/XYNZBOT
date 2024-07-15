export default {
    command: ["blackbox", "bb"],
    description: "blackbox ai",
    name: "blackbox",
    tags: "ai",

    run: async (m, { text }) => {

        let msg = text

        // let mdivMsg = msg.replace(/\s+/g, "+")
        if (!text) m.reply(`try chat with ai/blackbox. \n\nexample: ${m.prefix + m.command} siapa pencipta bahasa pemrograman Cpp`)
        try {
            let urlApi =`https://api.agatz.xyz/api/blackboxAIChat?message=${encodeURIComponent(msg)}&webSearchMode=true`


            console.log(urlApi)
    
            let ress = await func.fetchJson(urlApi)
    
            
            let sendTxt = ress.data
            
            console.log(sendTxt)

            await m.reply(sendTxt)
        } catch (error) {
            console.error(error);
            m.reply('Sorry, there seems to be an error: ' + error)
        }
    }
}