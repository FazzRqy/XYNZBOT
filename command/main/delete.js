export default {
    command: ["delete", "hapus", "d", "del"],
    description: "Delete message bot (only working to my msg)",
    name: "delete",
    tags: "main",

    run: async (m) => {
        if (!m.quoted) throw "Where msg do you want to delete? (only bot msg)";
        await m.quoted.delete()
    }
}