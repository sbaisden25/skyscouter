import { toggleMarkers } from '../map/markerManagement.js';

export function initializeUIHandlers() {
    
    document.getElementById('heliCheckbox').addEventListener('change', function() {
        toggleMarkers('helicopters', this.checked);
    });
    document.getElementById('planeCheckbox').addEventListener('change', function() {
        toggleMarkers('planes', this.checked);
    });
    document.getElementById('unidentifiedCheckbox').addEventListener('change', function() {
        toggleMarkers('unidentified', this.checked);
    });
    document.getElementById('fighterCheckbox').addEventListener('change', function() {
        toggleMarkers('fighters', this.checked);
    });

}

