export default {
    command: ["test"],
    name: "test",

    owner: true,

    run: async (m, { conn, args }) => {
        const txt = args[0];

        let apikeys = global.APIKeys.arifzyn

        let urlApi = `https://api.arifzyn.tech/ai/cai/search?query=${encodeURIComponent(txt)}&apikey=${apikeys}`

        let ress
        let txs = ''

        try {
            ress = await func.fetchJson(urlApi)
        } catch (error) {
            console.error(error)
        }

        let response = ress.result

        for (let iput of response) {
// txs += `name: ${iput.name}\n`
// txs += `id: ${iput.id}  *Copy this id*\n`
// txs += `gretting: ${iput.gretting}\n`
// txs += `score: ${iput.score}\n\n`
    const categories = new Set();

    for (const [filePath, command] of Object.entries(iput)) {
        const cmd = command.default || command;
        if (
          !cmd ||
          !cmd.command ||
          !Array.isArray(cmd.command) ||
          !cmd.command[0]
        ) {
          continue;
        }

        const category = cmd.tags || "General";
        categories.add(category);
      }


    const sections = [
        {
            title: "Pick the character ai",
            rows: Array.from(categories).map((iput) => ({
                title: category,
                id: `.menu ${category}`,
                description: `View commands in the ${category} category`,
        })),
        },
    ];

        }
 


    
    }
}