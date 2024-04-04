export async function fetchAircraftData() {
    const response = await fetch('http://localhost:3000/aircraft');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}

export async function fetchISSPosition() {
    const response = await fetch('http://localhost:3000/issPosition');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
}