"use strict";

function runExperiment(sampleSize) {
    const valueCounts = [0, 0, 0, 0, 0, 0];

     for(let i = 0; i < sampleSize; i++) {
        const randomNumber = getRandomNumber(1,6);
        valueCounts[randomNumber - 1]++
    }

    return valueCounts;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function convertToPercentages(valueCounts) {
    const total = valueCounts.reduce((sum, count) => sum + count, 0);

    const percentages = valueCounts.map(valueCount => ((valueCount / total) * 100).toFixed(2));
    return percentages;
}

function main() {
    const sampleSizes = [100, 1000, 1000000];

    for (const size of sampleSizes) {
        const valueCounts = runExperiment(size);
        const percentages = convertToPercentages(valueCounts);
        console.log(percentages, `${size}:`);
    }
}

main();