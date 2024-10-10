export default {
    command: ["public"],
    description: "Make bot can use with any people",
    name: "public",
    tags: "owner",

    owner: true,

    run: async (m) => {
            try {
                global.db.data.system.self = false;
                m.reply("Success public bot, now bot can use with any people in whatsapp!!");
            } catch (err) {
                m.reply("Sorry there have some error");
                console.log(err);
            }
    }
}