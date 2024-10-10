export default {
    command: ["request"],
    description: "request something to owner",
    name: "request",
    tags: "main",

    run: async (m, { conn, text } ) => {
        let msg = text

        if (msg.length > 500) throw 'Sorry, the message is too log, maximum only 500 text!!'

        const sender = m.sender
        const number = sender.split("@s.whatsapp.net")[0]

        const rqst = `*[REQUEST]*\nNumber: wa.me/${number}\nMessage: ${msg}`

        const option = {
            text: rqst,
            contextinfo: {mentionedJid: [number]}
        }
        conn.sendMessage(global.owner + "@s.whatsapp.net", option, text, { quoted: m })
        m.reply("Request success send to owner bot!!")
    }
}