// 🔗 CHANGE THIS TO YOUR URL
const TARGET_URL = "https://youtu.be/5c5eXSArn28?si=Hwt8ixvI_rxeGYc8";

document.getElementById("openBtn").addEventListener("click", () => {
  
  try {
    // Best method for Discord / browsers
    const newWindow = window.open(TARGET_URL, "_blank");

    // Fallback if popup blocked
    if (!newWindow || newWindow.closed || typeof newWindow.closed === "undefined") {
      window.location.href = TARGET_URL;
    }

  } catch (err) {
    // Ultimate fallback
    window.location.href = TARGET_URL;
  }
});
