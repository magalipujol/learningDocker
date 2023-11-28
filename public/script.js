// Function to fetch and display the list of names
function getNames() {
    fetch("/names")
        .then((response) => response.json())
        .then((names) => {
            const nameList = document.getElementById("nameList");
            nameList.innerHTML = names
                .map((name) => `<li>${name}</li>`)
                .join("");
        })
        .catch((error) => console.error("Error fetching names:", error));
}

// Function to add a name
function addName() {
    const newNameInput = document.getElementById("newNameInput");
    const newName = newNameInput.value;

    fetch("/names", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log("Name added successfully:", data.message);
            getNames(); // Refresh the list of names
        })
        .catch((error) => console.error("Error adding name:", error));

    // Clear the input field
    newNameInput.value = "";
}

// Function to delete a name
function deleteName() {
    const deleteNameInput = document.getElementById("deleteNameInput");
    const nameToDelete = deleteNameInput.value;

    // Clear any previous error message
    const errorMessageSpan = document.getElementById("deleteErrorMessage");
    errorMessageSpan.textContent = "";

    fetch(`/names/${nameToDelete}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `Error deleting name: ${response.status} - ${response.statusText}`
                );
            }
            return response.json();
        })
        .then((data) => {
            console.log("Name deleted successfully:", data.message);
            getNames(); // Refresh the list of names
        })
        .catch((error) => {
            console.error(error.message);
            // Display the error in the front end using the span
            errorMessageSpan.textContent = `Error: ${error.message}`;
        });

    // Clear the input field
    deleteNameInput.value = "";
}

// Initial fetch to load names on page load
getNames();
