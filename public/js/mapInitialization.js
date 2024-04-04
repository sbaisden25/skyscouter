import { plotISS, plotAircraft } from './map.js';
import { setInitialCheckboxStates, toggleMarkers } from './markerManagement.js';
import { initializeUIHandlers } from './uiHandlers.js';

export const map = L.map('map', {
    center: [50, 30],
    zoom: 2,
    maxBounds: [[-90, -230], [90, 230]],
    minZoom: 2,
    maxBoundsViscosity: 0.6,
});

export function initializeMap() {
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { attribution: '' }).addTo(map);

    setInitialCheckboxStates();
    initializeUIHandlers();
    setupResetZoomButton();

    plotISS();
    plotAircraft().then(() => {
        toggleMarkers('helicopters', document.getElementById('heliCheckbox').checked);
        toggleMarkers('planes', document.getElementById('planeCheckbox').checked);
        toggleMarkers('unidentified', document.getElementById('unidentifiedCheckbox').checked);
        toggleMarkers('fighters', document.getElementById('fighterCheckbox').checked);
    });
}

function setupResetZoomButton() {
    const resetZoomBtn = document.getElementById('resetZoomBtn');
    map.on('zoomend', () => {
        resetZoomBtn.style.display = map.getZoom() > 3 ? 'block' : 'none';
    });

    resetZoomBtn.addEventListener('click', () => {
        map.setView([12, 9], 2);
    });
}