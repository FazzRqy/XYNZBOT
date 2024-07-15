import fetch from "node-fetch";
import { format } from "util";
import path from "path";

export default {
    command: ["get"],
    name: "tools",
    tags: "tools",

    run: async (m) => {
        let text = m.args[0]
        if (!text) {
            m.reply('Use http:// or https://')
        }

  // ngecek dulu nih si user make https:// atau http:// atau gada keduanya
    if (!/^https?:\/\//.test(text)) {
    // tambah http:// sebagai default jika user lupa
    text = "http://" + text;
    } else if (/^https:\/\//.test(text)) {
    // jika gada https:// langsung tambahin
    text = text;
    }

/*  let _url = new URL(text);
  let url = global.API(
    _url.origin,
    _url.pathname,
    Object.fromEntries(_url.searchParams.entries()),
    "APIKEY",
  );
  */

    let _url = new URL(text);
    let url = _url.href;

  // mengkonfigurasi seberapa banyak melakukan redirect, misal url di short sebanyak 1000 maka melakukan redirect 1000 kali (optional: 999999)

    let maxRedirects = 999999;
    let redirectCount = 0;
    let redirectUrl = url;

    while (redirectCount < maxRedirects) {
    let res = await fetch(redirectUrl);

    if (res.headers.get("content-length") > 100 * 1024 * 1024 * 1024) {
      // menghapus respons server
        res.body.destroy();
        throw `Content-Length: ${res.headers.get("content-length")}`;
    }

    // const contentType = res.headers.get('content-type')

    // // ekstrak nama dari url yang gunanya buat ekstensi
    // let filename = path.basename(new URL(redirectUrl).pathname);

    const contentType = res.headers.get("content-type");
    const contentDisposition = res.headers.get("content-disposition");
    let filename;

            if (contentDisposition && contentDisposition.includes("filename=")) {
                // Jika 'filename=' ada, gunakan split
                filename = contentDisposition.split("filename=")[1].trim();
                } else if (contentDisposition) {
                // Jika 'filename=' tidak ada tapi content-disposition ada, hapus 'filename='
                filename = contentDisposition.replace(/^filename=/i, "").trim();
                } else {
                // Jika tidak ada content-disposition, ekstrak nama dari URL yang gunanya untuk ekstensi
                filename = path.basename(new URL(redirectUrl).pathname);
                }

              // ngendaliin konten tipe yang bisa aja berbeda
                if (/^image\//.test(contentType)) {
                try {
                  conn.sendFile(m.chat, redirectUrl, filename, text, m); // m.reply(`Result for ${text}`)
                } catch (err) {
                    console.error(err)
                    conn.sendFile(m.chat, redirectUrl, filename, text, m);
                }
                } else if (/^text\//.test(contentType)) {
                try {
                    let txt = await res.text();
                    m.reply(txt.slice(0, 65536) + "");
                    conn.sendFile(m.chat, Buffer.from(txt), "file.txt", null, m);
                } catch (e) {
                    console.error(e)
                }
                } else if (/^application\/json/.test(contentType)) {
                try {
                    let txt = await res.json();
                    txt = format(JSON.stringify(txt, null, 2));
                    m.reply(txt.slice(0, 65536) + "");
                    conn.sendFile(m.chat, Buffer.from(txt), "file.json", null, m);
                } catch (error) {
                    console.error(error)
                }
                } else if (/^text\/html/.test(contentType)) {
                try {
                    let html = await res.text();
                    conn.sendFile(m.chat, Buffer.from(html), "file.html", null, m);
                } catch (error) {
                    console.error(error)
                }
                } else {
                // mengirim file sesuai ekstensi
                conn.sendFile(m.chat, redirectUrl, filename, text, m);
                }

              // melakukan pengeceka dulu cuy kalo ada redirect
                if (
                res.status === 301 ||
                res.status === 302 ||
                res.status === 307 ||
                res.status === 308
                ) {
                let location = res.headers.get("location");
                if (location) {
                    redirectUrl = location;
                    redirectCount++;
                } else {
                  // ga nemu location header ? berhenti redirect
                break;
                }
                } else {
                // No redirect ? berhenti redirect
                break;
                }
            }

            if (redirectCount >= maxRedirects) {
                throw `Too many redirects (max: ${maxRedirects})`;
            }
    },
}