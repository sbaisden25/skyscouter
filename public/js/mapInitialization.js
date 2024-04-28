import { plotAircraft } from './map.js';
import { setInitialCheckboxStates, toggleMarkers } from './markerManagement.js';
import { initializeUIHandlers } from './uiHandlers.js';

export const map = L.map('map', {
    center: [38, 12],    //EU
    //center: [39, -98], //USA
    zoom: 3,
    maxBounds: [[-90, -250], [90, 250]],
    minZoom: 3,
    maxBoundsViscosity: 0.7,
});

export function initializeMap() {
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { 
        attribution: '',
        noWrap: true,
    }).addTo(map);

    setInitialCheckboxStates();
    initializeUIHandlers();
    setupResetZoomButton();

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
        map.setView([30, 50], 3);
    });
}

let terminator = L.terminator();
document.getElementById('terminatorToggle').checked = false;
document.getElementById('terminatorToggle').addEventListener('change', function(event) {
    if (event.target.checked) {
        terminator.addTo(map);
    } else {
        map.removeLayer(terminator);
    }
});
