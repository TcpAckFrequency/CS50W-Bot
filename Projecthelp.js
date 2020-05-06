const Discord = require("discord.js");
const client = new Discord.Client();
require("dotenv").config();

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "Project 0") {
    msg.reply("#project-0 Project Homepage link:https://docs.cs50.net/web/2020/x/projects/0/project0.html");
  }
});

client.login(process.env.TOKEN);
// DONT USE THIS
