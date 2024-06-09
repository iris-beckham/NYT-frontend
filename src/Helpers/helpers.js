// Function for formatting the date
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = months[date.getMonth()];
  const day = date.getDate();

  return `${month} ${day}, ${year}`;
};
export const writeOutMonth = (n) => {
  return months[n - 1];
};

export const convertTempToF = (temp) => {
  return Math.floor((9 / 5) * temp + 32);
};

export const getNYTKey = () => {
  const keysArray = import.meta.env.NYT_API_KEY.split(" ");
  return Math.keysArray[Math.floor(Math.random() * keysArray.length)];
};
