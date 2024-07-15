import fs from "fs";

export default {
    command: ["sp", "sendplugins"],
    example: "%psendplugins ./command/download/facebook.js",
    name: "sendplugins",
    tags: "owner",

    owner: true,
    loading: true,

    run: async (m) => {
        let path = `${m.text}`;

    try {
        if (fs.existsSync(path)) {
        let text = fs.readFileSync(path, "utf8");
        await m.reply(text, { mimetype: "text/plant"});
        } else {
        await m.reply(`File ${path} tidak ditemukan.`);
        }
    } catch (error) {
        console.error(`Error reading file: ${error}`);
        m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
    }
    }
}