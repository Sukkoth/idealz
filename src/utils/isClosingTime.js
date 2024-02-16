export function isClosingTime(closingTime) {
    // Convert closing time to Date object
    const closingDate = new Date(closingTime);

    // Get the current time
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = closingDate - currentDate;

    // Calculate the time difference in hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    // Check if the closing time is within the next 6 hours
    return hoursDifference <= 96 && hoursDifference >= 0;
}