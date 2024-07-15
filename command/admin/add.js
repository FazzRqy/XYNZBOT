export default {
    command: ["add", "tambahkan"],
    example: "Example: %padd 628XXXXXXXX",
    description: "add user to group",
    name: "add",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { text }) => {

        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

        await conn.groupParticipantsUpdate(m.chat, [users], 'add')
    }
}