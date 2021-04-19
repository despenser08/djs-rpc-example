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
  console.log(
    `Found ${RPC.user.username}#${RPC.user.discriminator} (${RPC.user.id})`
  );

  const startTimestamp = new Date();

  let options = {
    details: title,
    state: description,
    startTimestamp,
    largeImageKey: imageName,
    largeImageText: imageDescription,
  };

  if (timestamp) options.startTimestamp = startTimestamp;

  RPC.setActivity(options).then(() => console.log("RPC Changed"));
});

RPC.login({ clientId });
