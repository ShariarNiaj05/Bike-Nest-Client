export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  // Adding the suffix (st, nd, rd, th) for the day
  const dayWithSuffix =
    day +
    (day % 10 === 1 && day !== 11
      ? "st"
      : day % 10 === 2 && day !== 12
      ? "nd"
      : day % 10 === 3 && day !== 13
      ? "rd"
      : "th");

  return `${dayWithSuffix} ${month}, ${year}`;
};

// Example usage:
const dateStr = "2024-06-10T09:00:00.000Z";
console.log(formatDate(dateStr)); // Output: 10th June, 2024
