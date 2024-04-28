import {
    fighterIcon,
    unidentifiedAircraftIcon,
    planeIcon,
    helicopterIcon,
    uavIcon,
    plottedAsHelicopterIcon,
    plottedAsPlaneIcon,
    plottedAsUAVIcon
} from './icons.js';

export function classifyAircraft(aircraft) {
    let icon, category;

    if (!aircraft.t || aircraft.t === "N/A") {
         icon = unidentifiedAircraftIcon;
         category = 'unidentified';
    } else if (plottedAsHelicopterIcon.includes(aircraft.t)) {
         icon = helicopterIcon;
         category = 'helicopters';
    } else if (plottedAsPlaneIcon.includes(aircraft.t)) {
         icon = planeIcon;
         category = 'planes';
    } else if (plottedAsUAVIcon.includes(aircraft.t)) {
         icon = uavIcon;
         category = 'uav';
    } else {
         icon = fighterIcon;
         category = 'fighters';
    }

    incrementAircraftCount(category);

    return { icon, category };
}
  
  const aircraftCounts = {
    unidentified: 0,
    helicopters: 0,
    planes: 0,
    uav: 0,
    fighters: 0
};

function incrementAircraftCount(category) {
    if (aircraftCounts.hasOwnProperty(category)) {
        aircraftCounts[category]++;
        updateCounterUI(category);
    } else {
        console.error("Invalid aircraft category:", category);
    }
}

function updateCounterUI(category) {
    const elementId = `${category}Counter`;
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = `(${aircraftCounts[category]})`;
    } else {
        console.error("Counter element not found for category:", category);
    }
}