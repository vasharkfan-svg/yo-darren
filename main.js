const clientId = "YOUR_CLIENT_ID"; // replace this

const discordSdk = new window.DiscordSDK(clientId);

async function init() {
  await discordSdk.ready();

  document.getElementById("status").innerText = "Connected to Discord ✅";

  // Enable participants / activity features
  await discordSdk.commands.authorize({
    client_id: clientId,
    response_type: "code",
    state: "",
    prompt: "none",
    scope: ["identify"]
  });

  console.log("Authorized!");
}

init();

// Button click → open link
document.getElementById("openBtn").addEventListener("click", () => {
  window.open("https://youtu.be/5c5eXSArn28?si=YxEjEWTSuDc2atVi", "_blank");
});
