const { Client } = require("discord-rpc");
const {
  clientId,
  title,
  description,
  timestamp,
  imageName,
  imageDescription,
} = require("../config");

const RPC = new Client({ transport: "ipc" });

RPC.on("ready", () => {
  const startTimestamp = new Date();

  let options = {
    details: title,
    state: description,
    startTimestamp,
    largeImageKey: imageName,
    largeImageText: imageDescription,
  };

  if (timestamp) options.startTimestamp = startTimestamp;

  RPC.setActivity(options);
});

RPC.login({ clientId });
