// events.js

// Define an array with event details
const events = [
    { name: "Yoga Workshop", date: "2024-05-20", location: "Room A" },
    { name: "Cycling Marathon", date: "2024-06-15", location: "Gym Hall" },
    { name: "Pilates Intro", date: "2024-07-10", location: "Room B" }
];

// Function to display events on the webpage
function displayEvents() {
    const listElement = document.getElementById('eventsList');

    // Clear existing list items
    listElement.innerHTML = '';

    // Create and append each event as a list item
    events.forEach(event => {
        const item = document.createElement('li');
        item.textContent = `${event.name} - ${event.date} at ${event.location}`;
        listElement.appendChild(item);
    });
}

// Call the function to display events
displayEvents();
