export default {
    command: ["add", "tambahkan"],
    description: "add user to group",
    name: "add",
    tags: "admin",

    admin: true,
    botAdmin: true,
    group: true,

    run: async (m, { text }) => {

        if (!m.quoted || m.args[0]) return m.reply(`Example: ${m.prefix + m.command} *62XXXXXXXXX*\n\nOr you can reply to a message from someone you want to kick`);

        let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';

        await conn.groupParticipantsUpdate(m.chat, [users], 'add');
    }
}