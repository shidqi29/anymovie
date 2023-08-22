export function getYearFromDate(date) {
  return new Date(date).getFullYear();
}
export function getDuration(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours > 0 ? hours + "h " : "";
  const formattedMinutes = remainingMinutes > 0 ? remainingMinutes + "m" : "";
  return formattedHours + formattedMinutes;
}

export function formattedDate(input) {
  const date = new Date(input);
  const formatted = date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  if (formatted === "Invalid Date") return "-";
  return formatted;
}
