function giveTheDate() {
    const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  const currentTime12h = `${hours}:${minutes}:${seconds} ${ampm}`;
  return currentTime12h;
}

function giveCurrentDate() {
  return now.toLocaleDateString("en-US", {
    month: "short", // "Feb"
    day: "numeric", // "28"
    year: "numeric", // "2025"
  });
}
