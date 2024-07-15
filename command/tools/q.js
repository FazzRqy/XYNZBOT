export default {
    command: ["q"],
    description: "get quoted message", //%p = prefix, %cmd = command, %text = teks
    name: "q",
    tags: "tools",

    owner: true,

    run: async (m) => {
        if (!m.quoted) throw 'reply message!'
        let awikwok = await conn.serializeM(await m.getQuotedObj())
        if (!awikwok.quoted) throw 'The message you reply does not contain a reply!!'
        await awikwok.quoted.copyNForward(m.chat, true)
    }
}