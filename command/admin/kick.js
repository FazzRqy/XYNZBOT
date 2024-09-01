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
        if (m.args[0] === `@${global.owner}`) {
          m.reply("Sorry you can't kick my owner")
        } else if (m.args[0] === `@${global.pairingNumber}`) {
          m.reply(`Sorry, you can't kick this bot using the ${m.prefix + m.command} feature!\n\n instead you can use ${m.prefix}leave to kick this bot out of the group!`)
        } else {
          let users = m.mentionedJid ? m.mentionedJid : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
          await conn.groupParticipantsUpdate(m.chat, [users] || m.quoted.sender, 'remove')
        }
    }
}