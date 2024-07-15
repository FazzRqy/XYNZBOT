export default {
    command: ["report"],
    description: "please report if u find some error in this bot",
    name: "report",
    tags: "main",

    run: async (m, { conn, text }) => {
        const msg = text

        if (msg.length > 500) throw 'Sorry, the message is too log, maximum only 500 text!!'

        const number = m.sender

        const rprt = `*[REPORT]*\nNumber: @${number.split('@s.whatsapp.net')[0]}\nMessage: ${msg}`

        const option = {
            text: rprt,
            contextinfo: {mentionedJid: [number]}
        }
        await conn.sendMessage(global.owner + "@s.whatsapp.net", option, text, { quoted: m })
        m.reply("Report success send to owner bot!!\n\n*If the report received is fake or just a joke then it will not be responded + your number will be blocked by the bot!!*")
    }
}