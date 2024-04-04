import { knotsToMph, headingToCompassDirection } from './utils.js';

export const aircraftSchema = [
    { label: "Flight", valueKey: "flight", formatter: (val) => val.trim() },
    { label: "Type", valueKey: "t", formatter: (val) => val || "N/A" },
    { label: "Altitude", valueKey: "alt_baro", formatter: (val) => `${val} feet` },
    { label: "Speed", valueKey: "gs", formatter: (val) => `${knotsToMph(val).toFixed(2)} mph` },
    { label: "Direction", valueKey: "track", formatter: (val) => headingToCompassDirection(val) || "N/A" },
    { label: "Emergency", valueKey: "emergency", formatter: (val) => val || "No" },
    {
        label: "Last seen",
        valueKey: "seen",
        formatter: (val) => {
            // Convert 'seen' seconds ago to a Date object and format
            const lastSeenDate = new Date(new Date().getTime() - (val * 1000));
            return lastSeenDate.toLocaleString();
        }
    }
];

export const issSchema = [
    { label: "Header", formatter: () => "<strong>International Space Station</strong><br>" },
    { label: "Latitude", valueKey: "satlatitude", formatter: (val) => val.toFixed(2) },
    { label: "Longitude", valueKey: "satlongitude", formatter: (val) => val.toFixed(2) },
    { label: "Altitude", valueKey: "sataltitude", formatter: (val) => `${(val * 0.621371).toFixed(2)} miles` },
    { label: "Azimuth", valueKey: "azimuth", formatter: (val) => `${val.toFixed(2)}°` },
    { label: "Elevation", valueKey: "elevation", formatter: (val) => `${val.toFixed(2)}°` },
    { label: "Right Ascension", valueKey: "ra", formatter: (val) => `${val.toFixed(2)}` },
    { label: "Declination", valueKey: "dec", formatter: (val) => `${val.toFixed(2)}` },
    { label: "Timestamp", valueKey: "timestamp", formatter: (val) => new Date(val * 1000).toLocaleString() },
];