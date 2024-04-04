// Import necessary icons and configurations from icons.js
import {
    fighterIcon,
    unidentifiedAircraftIcon,
    planeIcon,
    helicopterIcon,
    uavIcon,
    plottedAsHelicopterIcon,
    plottedAsPlaneIcon,
    plottedAsUAVIcon,
    // Make sure to import any other necessary configurations or constants
  } from './icons.js';
  
  /**
   * Classifies an aircraft, determining its icon and category.
   * @param {Object} aircraft - The aircraft object to classify.
   * @returns {Object} An object containing both the icon and the category for the aircraft.
   */
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
      
      return { icon, category };
  }
  