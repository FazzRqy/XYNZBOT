export default {
  command: ["tagall"],
  description: "tag all member",
  name: "tagall",
  tags: "main",
  
  group: true,
  
  run: async (m, { text }) => {
    let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || q.mtype || ''
	let teks = `⋙ *Message from Admin Group* ⋘ \n\n${text ? text : m.quoted?.text ? m.quoted.text : m.quoted?.caption ? m.quoted.caption : m.quoted?.description ? m.quoted.description : 'Nothing'}\n\n`
	teks += `┌─\n`
	for (let mem of participants) {
		teks += `│◦◈ @${mem.id.split('@')[0]}\n`
	}
	teks += `└────`
	if (/video|image|viewOnce/g.test(mime) && !/webp/g.test(mime)) {
		let media = await q.download?.()
		await conn.sendFile(m.chat, media, '', teks, null, false, { mentions: conn.participants.map(a => a.id), quoted: m })
	} else await conn.reply(m.chat, teks, fkontak, { mentions: conn.participants.map(a => a.id) })
  }
}