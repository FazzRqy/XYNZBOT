export default {
  command: ["instagram", "ig", "igdl", "igv", "igf"],
  description: "Download Instagram reel/video/image",
  example: `Contoh: %pigdl <Instagram URL>`, //%p = prefix, %cmd = command, %text = teks
  name: "instagram",
  tags: "download",

  run: async (m) => {
    const Url = m.args[0];

      const UrlApi = API("itzpire", "/download/instagram", { url: Url})

      let response

      try {
        response = await func.fetchJson(UrlApi)
      } catch (err) {
        console.error(err);
        m.reply("Sorry, an error occurred while carrying out the process")
      }

      if (!response || response.status !== "success" || !response.data) {
        return m.reply("Failed to fetch instagram video/photo.");
      }

      console.log(response)

      let sendFile = response.data

      console.log(sendFile)

      try {
        await m.reply( sendFile, "Done" )
      } catch (error) {
        m.reply("There was a slight problem while sending the video/photo")
        console.error(error);
      }
  },
};
