export function formatTimeDifference(targetTime) {
    // Convert target time to Date object
    const targetDate = new Date(targetTime);

    // Get the current time
    const currentDate = new Date();

    // Calculate the time difference in seconds
    const timeDifferenceInSeconds = Math.floor((targetDate - currentDate) / 1000);

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    const minutes = Math.floor((timeDifferenceInSeconds % 3600) / 60);
    const seconds = timeDifferenceInSeconds % 60;

    // Format the result
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
}