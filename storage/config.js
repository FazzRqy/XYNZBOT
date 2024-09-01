import fs from "fs";
import chalk from "chalk";
import { fileURLToPath } from "url";
import Function from "../system/lib/function.js";

//—————「 Setings your bot 」—————//
global.name = "Zaikky Farel Aldino Zahran";
global.wm = "XYNZBOT";

global.author = "Zaikky Farel Aldino Zahran";
global.packname = "Created Sticker By";
global.link = "https://github.com/fazzrqy";

global.owner = ["6289653007306"];
global.pairingNumber = "6283852515287";

global.prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|/~!?@#%^&.©^]/i;
global.thumbnail = fs.readFileSync("./storage/media/images.jpg");
global.ucapan = Function.timeSpeech();
global.func = Function;

global.msg = {
  owner: "Features can only be accessed owner!",
  group: "Features only accessible in group!",
  private: "Features only accessible private chat!",
  admin: "Features can only be accessed by group admin!",
  botAdmin: "Bot is not admin, can't use the features!",
  bot: "Features only accessible by me",
  premium: "Features only accessible by premium users",
  media: "Reply media...",
  query: "No Query?",
  wFormat: "Wrong Format!!",
  noText: "Input text",
  error:
    "Seems to have encountered an unexpected error, please repeat your command for a while again",
  quoted: "Reply message...",
  wait: "Wait a minute...",
  loading: "Loading...",
  searching: "Searching...",
  urlInvalid: "Url Invalid",
  notFound: "Result Not Found!",
  putLink: "where the link?",
  dlloading: "Downloading...",
};

global.number = { //using for donation, put your phone number here!
  Axis: "6283852515287", //your phone number 1
  Tri: "6289653007306", //your phone number 2 (opsional)
}

global.linkDonate = {  //using for donation, put your link donate here!
  saweria: "",
  trakteer: "https://trakteer.id/FazzRqy/tip",
}

global.APIs = {
  arifzyn: "https://api.arifzyn.tech",
  rose: "https://api.itsrose.rest",
  xyro: "https://api.xyro.fund",
  akane: "https://akane.my.id",
  itzpire: "https://itzpire.com",
  lolhuman: "https://api.lolhuman.xyz",
  nyxs: "https://api.nyxs.pw",
  agatz: "https://api.agatz.xyz",
  widipe: "https://widipe.com",
  neoxr: "https://api.neoxr.eu"
};

global.APIKeys = {
  arifzyn: process.env.APIKEY || "AR-ijOFnLz2WubH",
  itsrose: process.env.ROSE_KEY || "",
  lolhuman: "3739aad6ad06d7d171cf369b",
  xyro: "xyroKey",
  nyxs: process.env.APIKEY || "",
  agatz: process.env.APIKEY || "",
  neoxr: process.env.APIKEY || "RELLZBOT",
};

global.API = (name, path = "/", query = {}, apikeyqueryname) => {
  const baseUrl = name in global.APIs ? global.APIs[name] : name;
  const apiKey = apikeyqueryname ? global.APIKeys[baseUrl] : "";
  const queryParams = new URLSearchParams({
    ...query,
    ...(apikeyqueryname && apiKey ? { [apikeyqueryname]: apiKey } : {}),
  });

  return baseUrl + path + (queryParams.toString() ? "?" + queryParams : "");
};

//—————「 Don"t change it 」—————//
let file = fileURLToPath(import.meta.url);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright("Update config.js"));
  import(`${file}?update=${Date.now()}`);
});
