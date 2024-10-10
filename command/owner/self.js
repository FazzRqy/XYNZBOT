export default {
    command: ["self"],
    description: "Make bot only owner can access",
    name: "self",
    tags: "owner",

    owner: true,

    run: async (m) => {
        try {
            global.db.data.system.self = true;
            m.reply("Success self bot, now bot only can use by owner!!");
        } catch (err) {
            m.reply("Sorry there have some error");
            console.log(err);
        }
    }
}