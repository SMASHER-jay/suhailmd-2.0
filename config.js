const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_04_12_12_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDgxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTE0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDksXG4gICAgICAgIDE2OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDkzLFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDM4LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDcwLFxuICAgICAgICA4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAzNSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQsXG4gICAgICAgIDQwLFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjksXG4gICAgICAgIDI0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDUxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDEyLFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDE4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMSxcbiAgICAgICAgMTMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDksXG4gICAgICAgIDc4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA3LFxuICBcImFkdlNlY3JldEtleVwiOiBcInlZelpkeXBVN3FkTlNRUXMyU1RIYWg0T1BCNjhUbmhka2t4b3VVU0dvTUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzA0NzY5MjgxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGNDJDMDUxNUM1QThDM0VGMDdGMURFMDZBRkQ0QkQ1MFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzMxMTI3NDlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib3NEWEVxYnRTM0NQbjhSX2wyZFhmZ1wiLFxuICBcInBob25lSWRcIjogXCJmOWQ1MmZhOC0zNzQxLTRjYmEtYTBkOC04Y2RmN2QwN2RmMDlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTYsXG4gICAgICAyMzgsXG4gICAgICAxMTIsXG4gICAgICAyMTYsXG4gICAgICAyMTksXG4gICAgICA5OCxcbiAgICAgIDExNCxcbiAgICAgIDEyOSxcbiAgICAgIDEzMixcbiAgICAgIDE2OSxcbiAgICAgIDI1MSxcbiAgICAgIDE4NyxcbiAgICAgIDU0LFxuICAgICAgMTEyLFxuICAgICAgMjM5LFxuICAgICAgMTYwLFxuICAgICAgMzcsXG4gICAgICA2MCxcbiAgICAgIDQsXG4gICAgICAxNDRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMjQyLFxuICAgICAgNjUsXG4gICAgICAxNzgsXG4gICAgICA0NSxcbiAgICAgIDQ3LFxuICAgICAgMTIxLFxuICAgICAgNjAsXG4gICAgICAyNDEsXG4gICAgICAxNjAsXG4gICAgICAxOTQsXG4gICAgICAxMTAsXG4gICAgICA1NixcbiAgICAgIDE5OCxcbiAgICAgIDI0OSxcbiAgICAgIDIyLFxuICAgICAgMTU4LFxuICAgICAgMTI2LFxuICAgICAgNTAsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNFpaWEpQNExcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwNDc2OTI4MTozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjMyMDQ0NzM0OTg4NDUyOjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05IL3ZOZ0RFS1hudExvR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicXVoUklhVmlFYlJ5RFhXU3hXUnNmQVRWNGt3bHpBU1lJMjhhZ0c2U29Ydz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIzM2ppYnlnY0pERjIrdXQ5NEJqdnlXMExaK1JkSHE0ZVkyRTV0Kytpcko2OElWdjBwWStlcGJYNkFyWmlqM2dIVUJrMytsT2l3eURnZWdZV0pTcHlCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtdE0xdFVYQ3VEVTdLZ3pTRVpmcHZ0b2ErTG5TSTVzS3hIcnQ3MXUzUzNERGJBSHBNOWExZmEybE5aRkxXZzU2cGNlM2hPckFSWFFLcnljN3dKajhpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3MDQ3NjkyODE6MzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMzExMjc0NSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZMNlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRkw2Lmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
