export default {
    command: ["readviewonce", "rvo", "getsw", "gsw"],
    description: "get video/photo in read view once", //%p = prefix, %cmd = command, %text = teks
    name: "readviewonce",
    tags: "tools",

    run: async (m) => {
        let msg = m.quoted.message

        msg[Object.keys(msg)[0]].viewOnce = false

        conn.relayMessage(m.chat, msg, {})
    }
}