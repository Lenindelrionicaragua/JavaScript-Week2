"use strict";

const trafficLightStates = ['green', 'orange', 'red'];

function getCurrentState(trafficLight) {
    const currentStateIndex = trafficLight.stateIndex;
    const currentState = trafficLight.possibleStates[currentStateIndex];
    return currentState;
}

    function getNextStateIndex(trafficLight) {
    const currentStateIndex = trafficLightStates.indexOf(trafficLight.color);
    const nextStateIndex = (currentStateIndex + 1) % trafficLightStates.length;

    return nextStateIndex;
}

function waitSync(secs) {
    const start = Date.now();
    while (Date.now() - start < secs * 1000) {
    }
  }

  function main() {
    const trafficLight = {
      possibleStates: ["green", "orange", "red"],
      stateIndex: 0,
    };
  
    for (let cycle = 0; cycle < 6; cycle++) {
      const currentState = getCurrentState(trafficLight);
      console.log(cycle, "The traffic light is now", currentState);
  
      waitSync(1); // Wait a second before going to the next state
      trafficLight.stateIndex = getNextStateIndex(trafficLight);
    }
  }
  
  main();
