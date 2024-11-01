const fs = require("fs");

const lines = fs.readFileSync("_txt/target.txt").toString().split("\r\n");

for(let i = 0; i < lines.length; i++){
	let data = lines[i].split(":");

	let accs = {
  		AcceptGifts: true,
  		BotBehaviour: 63,
  		Enabled: true,
  		FarmingPreferences: 128,
  		GamesPlayedWhileIdle: [
  		  730
  		],
  		OnlineStatus: 2,
  		RemoteCommunication: 2,
  		SendTradePeriod: 12,
  		SteamLogin: data[0],
  		SteamPassword: data[1],
  		SteamTradeToken: "56rOxi4R",
  		SteamUserPermissions: {
  		  "76561198843862670": 3
  		},
  		TradingPreferences: 1
	}

	fs.writeFileSync("config/" + accs.SteamLogin + ".json", JSON.stringify(accs));
}