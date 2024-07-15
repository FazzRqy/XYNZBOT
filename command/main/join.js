export default {
    command: ["joingc", "join"],
    description: "Join group chat",
    example: "example: %p%cmd (_link group_)",
    name: "Join",
    tags: "main",

    premium: true,

    run: async (m) => {
        const url = m.args[0]

        const waRegex = /^https:\/\/chat\.whatsapp\.com\/([a-zA-Z0-9]+)$/;

        const match = url.match(waRegex)

        if (!url.startsWith(`https://chat.whatsapp.com/`)) {
            m.reply("Error or wrong url")
        } else {
            const code = match[1]
            const response = await conn.groupAcceptInvite(code)
            console.log('this bot has been join to', response)
            m.reply("Success to join using link group!!")
        }
    },
}