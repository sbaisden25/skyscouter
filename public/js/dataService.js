export async function fetchAircraftData() {
    const response = await fetch('https://skyscouter.onrender.com//aircraft');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export async function fetchISSPosition() {
    const response = await fetch('https://skyscouter.onrender.com//issPosition');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}