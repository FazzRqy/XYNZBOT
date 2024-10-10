export default {
    command: ["unblock", "ublk", "unblokir", "unblok"],
    description: "Unlocking user and unbanned user",
    name: "unblock",
    tags: "owner",

    owner: true,

    run: async (m, {conn}) => {
        const number = m.args[0];
        const numberWa = number + "@s.whatsapp.net"; 
        const user = numberWa.replace("@", "");
        const msg = "You unblock by owner, now you can use this bot again";

        if (!number) { m.reply("where the number"); };
        if (typeof number != 'number') { m.reply("number only"); };

        try {
            await conn.updateBlockStatus(user, "unblock");
            global.db.data.users[user].banned = false;
            global.db.data.users[user].bannedReason = "";
            m.reply(`Succes unbanned and unblock @${number}`);
            
            const option = {
                text: msg,
                contextinfo: {mentionedJid: [number]},
            };
            await conn.sendMessage(user, option);
        } catch (err) {
            m.reply("Error, make sure the number have registered on whatsapp");
            console.log(err);
        };
    },
};