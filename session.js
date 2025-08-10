//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME00ekorcG5xdEt2anZxaEtmS2Y5VjBCQ2FuLzJ3VjZZcWtSQkVmdWZIYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRG1mV0xIUy8yUktPZUNUUWVOMXJ2TUZtVHFnNzhXMmVFVFVNWVJDTzRnZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5TVRvTStvRG1GRGYwZEpJWVI2Q0x4NWtlL1ZjaWhLMHY1dDVURzNucTFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRzZocnFRUTFOWnFjK1p6bTVXWHpQejBOTThmbUd6K21TeDB0R3ZuUDFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldGNTlJV2plaTRFa2toM2xJYUdaSEVOZDdLS01mcVkra2gzajV5dWVnMDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImEwYmtXZHREeks5b0hOZFZUeVFWR2lMRWFBd0trZFN0UFl3V1ZsWlBvR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU01NWJNaGUvVkxHbW9KVEE3SUtFeUFPQit1RDQ3RGk2cTlCNWhYQkJXTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU080Yko4Zzh4Y0VLdTh2NVI0RzI5NkZxdnRBSVdKRDZURFNkRE5BZnFVUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imoyd0pzckJZUXhXcEg2aTlzRW1CQjd3cGs1ck5WRTgzeHo2Mlh6cVBiRE5lNHBSR3ZCc252cG5zNFh3MmVxS2c2S0Yydy90OU5rbyt2dEZZL2VBNGlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTExLCJhZHZTZWNyZXRLZXkiOiJSYUdTSTNaRmFlWVNVUW5qZkkvYmxhUE9rNmlJOERDd1NYY3F4aWtiV1lFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzEyNjY2MTk4NUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQTdGRjc1RTBBMDQ5RTI4Mzc4NUU0MjM0NUFFMTgyOSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU0ODA4OTkxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMjY2NjE5ODVAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzE4NEIyMURCNDQwOEI3MkM5Qzk3OENDNUIzRTExMjgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NDgwODk5MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidWF1M1AtUktSQjJzMmlNZWVqUGRFZyIsInBob25lSWQiOiIyYzRjMjI5Ny1kNGMxLTQ3NmEtOWVkZi1iODA2NjdmM2VhMmQiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1N6Y2JOc2pMR2NweEt0R3U4dFo1WFVLS3A4PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtajdpelN5RDQvY21Wb2w2d3B2NnBiOGRzanM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPK1N4dlVCRUptRjRjUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIeUFnbzk0TjFkdEtaT2E2VFJnVEN6U2t3eUdNcXhPVzZMa2N4ejZzZEJFPSIsImFjY291bnRTaWduYXR1cmUiOiJrcU9ERnFYZWhlbFl5TU5hV0MzS1ZUM2Z1ZUhLRkU0S0s4bUNvMjdJUWwrSE82Q0VvR1F5NWpaNEZLWXNYR1UxNy9TSXA2Q3U1L0c5dmxlVlc2aC9BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoialJ2SlpDY0NaRzdabVB4bm5LcWtKcmJIN2tuMmpDWWlGbjdFZ05pQk10Ym4vQVFJbytpcGxsUTllZThhUEYwL2ovOTQrcWdoQ0hlbUREWlZ5bjhJaUE9PSJ9LCJtZSI6eyJpZCI6IjkyMzEyNjY2MTk4NToyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjc1MTcwNTE4NDE3NTQzOjJAbGlkIiwibmFtZSI6IkFSSiJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMjY2NjE5ODU6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSOGdJS1BlRGRYYlNtVG11azBZRXdzMHBNTWhqS3NUbHVpNUhNYytySFFSIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTQ4MDg5ODgsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWlSIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "923126661985",
  PASSWORD: 
    process.env.PASSWORD || "0000",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["923126661985"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
