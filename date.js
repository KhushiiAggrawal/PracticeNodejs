const uploadTimestamp = "2023-09-06T10:29:50.483+00:00";
const uploadDate = new Date(uploadTimestamp); // Convert the string to a Date object
const currentTimestamp = Date.now(); // Get the current timestamp in milliseconds

// Calculate the time difference in milliseconds
const timeDifference = currentTimestamp - uploadDate.getTime();

// Define the time threshold for 24 hours in milliseconds
const twentyFourHoursInMilliseconds = 24 * 60 * 60 * 1000;

// Check if the data was uploaded within the last 24 hours
if (timeDifference < twentyFourHoursInMilliseconds) {
  console.log(Date.now());
} else {
  console.log(timeDifference);
}
