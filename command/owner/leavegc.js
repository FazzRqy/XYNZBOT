export default {
    command: ["leavegc", "leave", "out"],
    description: "Leave group chat",
    name: "LeaveGc",
    tags: "owner",

    owner: true,
    group: true,

    run: async (m) => {
        await m.reply('Adios Amigos')

        await conn.groupLeave(m.chat)
    },
}