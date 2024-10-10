export default {
    command: ["block", "blk", "blokir", "blok"],
    description: "Blocking user and banned user",
    name: "block",
    tags: "owner",

    owner: true,

    run: async (m, {conn}) => {
        const msg = m.args[1];
        const number = m.args[0];
        const user = number.replace("@", "");

        if (!number) throw "where the number";
            if (typeof number != 'number') throw "Tag user or type manually";
                try{
                    const option = {
                        text: `You have been blocked by owner, with reason: ${msg || "Unknown"}\n\n and if you want to unblock + unbanned, chat owner with this link:\nwa.me/6289653007306`,
                        contextinfo: {mentionedJid: [number]}
                    };
                    await conn.sendMessage(user + "@s.whatsapp.net", option);
            
                    await conn.updateBlockStatus(user, "block");
                    global.db.data.users[user].banned = true;
                    global.db.data.users[user].bannedReason = msg || "";

                    m.reply(`Succes banned and block @${number}, with reason: *${msg || "Unknown"}*`);
                } catch (err) {
                    m.reply("Error");
                    console.log(err);
                }
    } 
}
