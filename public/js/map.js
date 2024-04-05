import { issIcon } from './icons.js';
import { fetchAircraftData, fetchISSPosition} from './dataService.js';
import { aircraftSchema, issSchema } from './schemas.js';
import { map } from './mapInitialization.js';
import { classifyAircraft } from './aircraftClassifier.js';
import { doNotPlot, plottedAsPlaneIcon, plottedAsHelicopterIcon, plottedAsFighterJetIcon, plottedAsUAVIcon } from './icons.js';

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
                if (aircraft.lat && aircraft.lon && !doNotPlot.includes(aircraft.t)) {
                    const popupContent = createPopupContent(aircraft, aircraftSchema);
                    const classification = classifyAircraft(aircraft); // Use the function to classify each aircraft

                    if (!markers[classification.category]) markers[classification.category] = []; // Initialize category array if it doesn't exist
                    
                    // Create marker with the selected icon
                    const marker = L.marker([aircraft.lat, aircraft.lon], { icon: classification.icon }).bindPopup(popupContent).addTo(map);

                    // Store marker by category
                    markers[classification.category].push(marker);
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

