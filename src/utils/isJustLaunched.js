export function isJustLaunched(createdAt) {
    // Convert createdAt time to Date object
    const createDate = new Date(createdAt);

    // Get the current time
    const currentDate = new Date();

    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - createDate;

    // Calculate the time difference in hours
    const hoursDifference = timeDifference / (1000 * 60 * 60);

    // Check if the product was created within the last 6 hours
    return hoursDifference <= 6 && hoursDifference >= 0;
}