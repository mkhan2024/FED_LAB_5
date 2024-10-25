// Function to display cat facts when the button is clicked
async function displayCatFacts() {
    const numberOfFacts = document.getElementById("factCount").value; // Get the selected value from the dropdown

    try {
        const response = await fetch(`https://catfact.ninja/facts?limit=${numberOfFacts}`);
        const data = await response.json(); // Parse the JSON response

        const factsContainer = document.getElementById("factsContainer");
        factsContainer.innerHTML = ""; // Clear previous facts

        // Display each fact from the fetched data
        data.data.forEach((fact, index) => {
            const factElement = document.createElement("p");
            factElement.textContent = `${index + 1}. ${fact.fact}`;
            factsContainer.appendChild(factElement);
        });
    } catch (error) {
        console.error("Error fetching cat facts:", error);
        const factsContainer = document.getElementById("factsContainer");
        factsContainer.innerHTML = `<p>Error loading facts. Please try again later.</p>`;
    }
}

// Adding the event listener to the button once the page is loaded
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("getFactsButton");
    button.addEventListener("click", displayCatFacts);
});
