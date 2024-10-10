export default {
    command: ["add", "tambahkan"],
    description: "add user to group",
    name: "add",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { text }) => {

        if (!m.args[0]) throw `Example: ${m.prefix + m.command} *62XXXXXXXXX*`

        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

        await conn.groupParticipantsUpdate(m.chat, [users], 'add')
    }
}