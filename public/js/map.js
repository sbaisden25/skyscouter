import { issIcon } from './icons.js';
import { fetchAircraftData, fetchISSPosition} from './dataService.js';
import { aircraftSchema, issSchema } from './schemas.js';
import { map } from './mapInitialization.js';
import { determineIcon } from './icons.js';
import { civAircraftTypes, planeTypes, heliTypes, fighterTypes, uavTypes } from './icons.js';

export const markers = {
    planes: [],
    helicopters: [],
    uav: [],
    fighters: [],
    unidentified: []
};

export async function plotAircraft() {
    try {
        const data = await fetchAircraftData();
        if (data.ac && Array.isArray(data.ac)) {
            data.ac.forEach(aircraft => {
                if (aircraft.lat && aircraft.lon && !civAircraftTypes.includes(aircraft.t)) {
                    const popupContent = createPopupContent(aircraft, aircraftSchema);
                    const selectedIcon = determineIcon(aircraft);
                    const marker = L.marker([aircraft.lat, aircraft.lon], { icon: selectedIcon }).bindPopup(popupContent).addTo(map);

                    const category = getCategory(aircraft);

                    // Store marker by category
                    if (!markers[category]) markers[category] = [];
                    markers[category].push(marker);
                }
            });
        } else {
            console.error("Unexpected data structure", data);
        }
    } catch (error) {
        console.error("Failed to fetch aircraft data:", error.message);
    }
}

export async function plotISS() {
    try {
        const data = await fetchISSPosition();
        
        if(data && data.positions.length > 0) {
            const issInfo = data.positions[0];
            const popupContent = createPopupContent(issInfo, issSchema);

            L.marker([issInfo.satlatitude, issInfo.satlongitude], { icon: issIcon })
                .bindPopup(popupContent)
                .addTo(map);
        }
    } catch (error) {
        console.error("Failed to fetch ISS position:", error);
    }
}

function getCategory(aircraft) {
    if (!aircraft.t || aircraft.t === "N/A") return 'unidentified';
    if (heliTypes.includes(aircraft.t)) return 'helicopters';
    if (planeTypes.includes(aircraft.t)) return 'planes';

    return 'fighters';
}

function flagMarkersForRemoval() {
    Object.keys(markers).forEach(category => {
        markers[category].forEach(marker => {
            marker.flagForRemoval = true;
        });
    });
}

function removeOldMarkers() {
    Object.keys(markers).forEach(category => {
        markers[category] = markers[category].filter(marker => {
            if (marker.flagForRemoval) {
                map.removeLayer(marker);
                return false;
            }
            return true;
        });
    });
}

export async function updateMarkers() {
    flagMarkersForRemoval();

    await plotAircraft();
    await plotISS();

    removeOldMarkers();
}


function createPopupContent(data, schema) {
    return schema
        .map(({ label, valueKey, formatter }) => {
            
            if (label === "Header" && !valueKey) {
                return formatter();
            }

            const value = data[valueKey];
            if (value !== undefined && value !== null && value !== "") {
                return `<strong>${label}:</strong> ${formatter(value)}<br>`;
            }
            return null;
        })
        .filter(line => line !== null) // Remove null entries
        .join('');
}

