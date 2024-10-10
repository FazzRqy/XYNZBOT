export default {
    command: ["leavegc", "leave", "out"],
    description: "Leave group chat",
    name: "LeaveGc",
    tags: "owner",

    group: true,

    run: async (m) => {
        if (global.owner) {
            await m.reply('```GoodBye, see you next Time!```')
            conn.groupLeave(m.chat)
        
        } else if (m.isAdmin == true) {
        await m.reply('```GoodBye, see you next Time!```')

            conn.groupLeave(m.chat)
    } else throw "Sorry, this features only can access by admin and owner";
    }
}