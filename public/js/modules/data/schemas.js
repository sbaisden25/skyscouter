import { knotsToMph, headingToCompassDirection } from '../utilities/utils.js';

export const aircraftSchema = [
    { label: "Flight", valueKey: "flight", formatter: (val) => val.trim() },
    { label: "Aircraft Type", valueKey: "t", formatter: (val) => val || "N/A" },
    { label: "Altitude", valueKey: "alt_baro", formatter: (val) => `${val} feet` },
    { label: "Speed", valueKey: "gs", formatter: (val) => `${knotsToMph(val).toFixed(2)} mph` },
    { label: "Direction", valueKey: "track", formatter: (val) => headingToCompassDirection(val) || "N/A" },
    { label: "Emergency", valueKey: "emergency", formatter: (val) => val || "No" },
    {
        label: "Last seen",
        valueKey: "seen",
        formatter: (val) => {
            const lastSeenDate = new Date(new Date().getTime() - (val * 1000));
            return lastSeenDate.toLocaleString();
        }
    }
];
