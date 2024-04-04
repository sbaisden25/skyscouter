import { initializeMap } from './mapInitialization.js';
import {updateMarkers} from './map.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log("Application initialized");
    initializeMap();
});

