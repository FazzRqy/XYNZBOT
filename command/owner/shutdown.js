export default {
    command: ["shutdown"],
    name: "shutdown",

    owner: true,

    run: async (m) => {
        m.reply("shuting down...")

        setTimeout(() => {
            process.exit()
        }, 1500);
    }
}