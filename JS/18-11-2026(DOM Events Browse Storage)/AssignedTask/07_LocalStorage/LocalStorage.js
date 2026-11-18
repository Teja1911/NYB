
const NameInput = document.getElementById("NameInput");
const Output = document.getElementById("Output");

const StorageKey = "PracticeEmployeeName";

// Save a value to Local Storage.
document.getElementById("SaveButton").addEventListener("click", () => {
    const Name = NameInput.value.trim();

    if (!Name) {
        Output.textContent = "Enter a name before saving.";
        return;
    }

    localStorage.setItem(StorageKey, Name);
    Output.textContent = "Name saved successfully.";
});

// Retrieve a value from Local Storage.
document.getElementById("ReadButton").addEventListener("click", () => {
    const SavedName = localStorage.getItem(StorageKey);

    Output.textContent = SavedName
        ? `Saved Name: ${SavedName}`
        : "No saved name found.";
});

// Delete one stored item.
document.getElementById("DeleteButton").addEventListener("click", () => {
    localStorage.removeItem(StorageKey);
    Output.textContent = "Saved name deleted.";
});

// Clear all Local Storage entries for this origin.
// Use carefully: this removes other practice data too.
document.getElementById("ClearButton").addEventListener("click", () => {
    localStorage.clear();
    Output.textContent = "All Local Storage data cleared.";
});

// Demonstrate storing an object as JSON.
const Employee = {
    Id: 101,
    Name: "Rahul",
    Department: "Frontend"
};

// Local Storage stores strings, so convert the object to JSON.
localStorage.setItem("PracticeEmployee", JSON.stringify(Employee));

// Convert the JSON string back into an object.
const SavedEmployee = JSON.parse(
    localStorage.getItem("PracticeEmployee")
);

console.log("Saved Employee Object:", SavedEmployee);