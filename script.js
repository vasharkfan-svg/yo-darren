// 🔗 CHANGE THIS TO YOUR URL
const TARGET_URL = "https://yo-darren-1gup5srim-yodarren-softwares.vercel.app/";

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
