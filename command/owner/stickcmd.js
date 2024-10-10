import crypto from "crypto";

export default {
  command: ["scmd", "stickcmd"],
  name: "scmd",
  tags: "owner",
  example: "Contoh: %p%cmd <command name>", // %p = prefix, %cmd = command

  owner: true,
  
  run: async (m, { conn }) => { // Menambahkan global untuk akses ke plugins

    try {
      // if (!m.isOwner) return;
      // if (m.isBaileys) return;
      if (m.message && m.isOwner && m.quoted && m.quoted.message.stickerMessage && m.quoted.message.stickerMessage.fileSha256) {
        const buffer = Buffer.from(m.quoted.message.stickerMessage.fileSha256);
        const sha256Hash = crypto.createHash('sha256').update(buffer).digest('hex');
        let db_stick = db.data.settings.sticker_cmd;
        
        // Cek apakah sticker_fileSha256 sudah ada dalam db_stick
        const exists = db_stick.some(cmd => cmd.sticker_fileSha256 === sha256Hash);
        if (exists) {
          m.reply("This sticker command already exists.");
          return;
        }
        
        // Periksa apakah cmd tersedia dalam global.plugins
        const isCmdValid = Object.values(global.plugins).some(plugin =>
          plugin.command && plugin.command.includes(m.args[0])
        );
        
        if (!isCmdValid) {
          m.reply("The command is not valid.");
          return;
        }
        
        let query = '';
        if (m.args.length > 1) {
          query = m.args.slice(1).join(' '); // Gabungkan sisa argumen sebagai query
        }
        
        // Jika tidak ada duplikat dan cmd valid, tambahkan sticker_cmd baru
        db_stick.push({
          sticker_fileSha256: sha256Hash,
          cmd: m.args[0], // Menggunakan command pertama yang dikirimkan
          query
        });
        m.reply("Sticker command added successfully.");
      } else {
        m.reply("Please reply to a sticker message.");
      }
    } catch (error) {
      console.error(error);
      m.reply("An error occurred while trying to add the sticker command.");
    }
  },
};
