import { initializeMap } from './mapInitialization.js';
import {updateMarkers} from './map.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Application initialized");
    initializeMap();
    setInterval(updateMarkers, 15000); // 5000 ms = 5 seconds
});

