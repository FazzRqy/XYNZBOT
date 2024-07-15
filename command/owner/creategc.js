export default {
    command: ["creategc", "cgc"],
    description: "Create group with bot",
    name: "creategc",
    tags: "owner",


    run: async (m, { text }) => {
        if (!text) return m.reply(global.msg.noText)
        try {
            let group = await conn.groupCreate(text, [m.sender])
            let link = await conn.groupInviteCode(group.gid)
            let url = 'https://chat.whatsapp.com/' + link

            await m.reply('Success create group Link:' + url)
            
        } catch (error) {
            let [namegc, partici] = text.split('|')
            if (!namegc) throw global.msg.wFormat
            if (!partici) throw 'Tag the user as a new member'
            let memb = conn.parseMention(`@${parseInt(m.sender)} ${partici}`)
            let ha = await conn.groupCreate(namegc, memb).catch(console.error)
            console.log(JSON.stringify(ha))
            await m.reply('Success create group!!')
            conn.groupMakeAdmin(ha.gid, [m.sender])
            if (!global.owner) {
                await conn.modifyChat(ha.gid, 'delete', {
                    includeStarred: false
                }).catch(console.error)
                conn.groupLeave(ha.gid)
            }
        }
            
    }
}