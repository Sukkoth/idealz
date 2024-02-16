export function calculateSecondsDifference(targetDateString) {
    const targetDate = new Date(targetDateString);
    const currentDate = new Date();
    return Math.floor((targetDate - currentDate) / 1000);
  }