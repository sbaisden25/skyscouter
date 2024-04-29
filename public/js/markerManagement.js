import { map } from './mapInitialization.js';
import { markers } from './map.js';

export function setInitialCheckboxStates() {
    document.getElementById('heliCheckbox').checked = true;
    document.getElementById('planeCheckbox').checked = true;
    document.getElementById('unidentifiedCheckbox').checked = false; // Unidentified markers hidden by default
    document.getElementById('fighterCheckbox').checked = true;
}

export function toggleMarkers(category, isVisible) {
    const categoryMarkers = markers[category];
    if (!categoryMarkers) return;

    categoryMarkers.forEach(marker => {
        if (isVisible) map.addLayer(marker);
        else map.removeLayer(marker);
    });
}