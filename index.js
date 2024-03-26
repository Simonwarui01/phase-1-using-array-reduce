// index.js
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Calculate the total number of batteries
const totalBatteries = batteryBatches.reduce((acc, curr) => acc + curr, 0);

// Export the totalBatteries variable
module.exports = {
  totalBatteries
};
