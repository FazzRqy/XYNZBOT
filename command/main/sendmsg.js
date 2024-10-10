export default {
    command: ["sms", "msg", "sendmsg", "msgsend"],
    description: "Send Message To someone (Not anonymous chat)",
    name: "sms",
    tags: "main",

    run: async (m, {conn, text}) => {
        const infrm = `\n\n> If you want to reply this msg, type command: ${m.prefix + m.command} ${global.owner} Hello owner`;
        const number = m.args[0];
        const sender = `\'\'\'${m.pushName} with number ${number} send you a massage:\'\'\'\n\n`;
        const msg = text.replace(`${ m.prefix + m.command, number}`, '');
        const numself = m.sender;

        if (typeof number != 'number') { m.reply("there's not a number"); };

        if (!m.args[1]) { m.reply("Where the text?"); };

        if (number == numself.replace("@s.whatsapp.net", "")) { m.reply("Hahaha there's not funny"); };

        try {
            const option = {
                text: sender + "*" + msg + "*" + infrm,
                contextinfo: {mentionedJid: [number]},
            };

            await conn.sendMessage(number + '@s.whatsapp.net', option)
            
            m.reply("Done sanding message to @" + number);
        } catch (err) {
            m.reply("Error when sending a message, try again, and if the error repeat again, please contact the owner or you can use the report feature")
        }
    }
}