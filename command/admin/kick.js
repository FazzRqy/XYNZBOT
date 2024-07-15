export default {
    command: ["kick", "tendang"],
    example: "Example: %pkick *@tagUser*",
    description: "kick user from group",
    name: "kick",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, {text}) => {      

        let users = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

        await conn.groupParticipantsUpdate(m.chat, [users], 'remove')
    }
}