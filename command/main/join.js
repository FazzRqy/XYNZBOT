export default {
    command: ["joingc", "join"],
    description: "Join group chat",
    example: "example: %p%cmd (_link group_)",
    name: "Join",
    tags: "main",

    run: async (m) => {
        const url = m.args[0]

        const waRegex = /^https:\/\/chat\.whatsapp\.com\/([a-zA-Z0-9]+)$/;

        const match = url.match(waRegex)

        if (!url.startsWith(`https://chat.whatsapp.com/`)) {
            m.reply("Error or wrong url")
        } else {
            try {
            const code = match[1]
            const response = await conn.groupAcceptInvite(code)
            console.log('this bot has been join to', response)
            m.reply("Success to join using link group!!")

            const option = {
                text: `Bot telah masuk ke grup seseorang, berikut linknya:\n\n` + m.args[0],
                contextinfo: {mentionedJid: [global.owner]}
            }
                await conn.sendMessage(global.owner + "@s.whatsapp.net", option)
            } catch {
                m.reply('Failed to join to this group, make sure the bot you want to invite has never been kicked before')
            }
        }
    },
}