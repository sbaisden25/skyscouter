export async function fetchAircraftData() {
    const response = await fetch('https://skyscouter-backend.onrender.com/aircraft');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}