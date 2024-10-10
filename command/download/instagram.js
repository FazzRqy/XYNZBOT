export default {
  command: ["igv", "igf", "igi", "ig", "igdl", "dlig"],
  description: "Download Instagram reel/video/image",
  name: "igv / igi",
  tags: "download",

  run: async (m) => {
    const Url = m.args[0];

    if (!Url) {
        m.reply(`Example: ${m.prefix + m.command} <Instagram Url>`)
    } else {
      let cekUrl = /https:\/\/(www\.)?instagram\.com\/.*/

      let match = Url.match(cekUrl)

      if (!match) throw "Make sure you put the url correcly!"

      if (m.command == 'igv') {
        m.reply(global.msg.dlloading)
      const UrlApi = `${global.APIs.neoxr + "/api/ig?url=" + encodeURIComponent(Url) + "&apikey=" + global.APIKeys.neoxr}`;

      let response

      try {
        response = await func.fetchJson(UrlApi)
      } catch (err) {
        console.error(err);
        m.reply("Sorry, an error occurred while carrying out the process")
      }

      console.log(response)

      let sendFile = response.data[0].url

      console.log(sendFile)

      try {
        await m.reply( sendFile, {caption: "DONE", mimetype: "video/mp4"})
      } catch (error) {
        m.reply("There was a slight problem while sending the video/photo")
        console.error(error);
      }
    }
    if (m.command == 'igf' || m.command == 'igi') {
      m.reply(global.msg.dlloading)
      const UrlApi = `${global.APIs.neoxr + "/api/ig?url=" + encodeURIComponent(Url) + "&apikey=" + global.APIKeys.neoxr}`;

      let response

      try {
        response = await func.fetchJson(UrlApi)
      } catch (err) {
        console.error(err);
        m.reply("Sorry, an error occurred while carrying out the process")
      }

      if (!response || response.status !== "success" || !response.data) {
        m.reply("Failed to fetch instagram video/photo.");
      }

      console.log(response)

      let sendFile = response.data[0].url

      console.log(sendFile)

      try {
        await m.reply( sendFile, {caption: "DONE", mimetype: "image/jpeg"})
      } catch (error) {
        m.reply("There was a slight problem while sending the video/photo")
        console.error(error);
      }
    }
    if (m.command == "ig" || m.command == "igdl" || m.command == "dlig") {
      m.reply('use igv (video) or igf/igi (foto/image)')
    }
    }
  }
};
