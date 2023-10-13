const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function batteries(totalBatteries, batteryBatch){
    return totalBatteries + batteryBatch;
}
const totalBatteries = batteryBatches.reduce(batteries, 0);
console.log(totalBatteries);