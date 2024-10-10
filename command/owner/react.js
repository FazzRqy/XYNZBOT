export default {
    command: ["react", "emoji"],
    name: "react",
    description: "React message with emoji",
    tags: "owner",

    owner: true,

    run: async (m) => {

        const emoji = m.args[0]

        try {
            m.quoted.react(`${emoji}`)
        } catch (error) {
            m.reply("Make sure it is a emoji")
        }
    }
}