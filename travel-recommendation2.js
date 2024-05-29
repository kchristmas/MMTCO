search_btn.addEventListener("click", function(event) {
    event.preventDefault();
    fetchData();
});

reset_btn.addEventListener("click", function(event) {
    event.preventDefault();
    clearData();
});

function fetchData() {
    var travel_destination = document.getElementById("search").value.toLowerCase().trim();
    fetch("travel-recommendation.json")
        .then(response => response.json())
        .then(data => displayData(data, travel_destination))
        .catch(error => console.error('Error fetching data:', error));
}

function displayData(data, travel_destination) {
    var container = document.getElementById("search_results");
    container.innerHTML = ""; // Clear previous results
    
    let reference;
    if (travel_destination === "temple" || travel_destination === "temples") {
        reference = data.temples;
    } else if (travel_destination === "beach" || travel_destination === "beaches") {
        reference = data.beaches;
    } else if (travel_destination === "japan" || travel_destination === "tokyo" || travel_destination === "kyoto") {
        reference = data.countries[1].cities;
    } else if (travel_destination === "australia" || travel_destination === "melbourne" || travel_destination === "sydney") {
        reference = data.countries[0].cities;
    } else if (travel_destination === "brazil" || travel_destination === "sao paulo" || travel_destination === "rio de janeiro" || travel_destination === "rio") {
        reference = data.countries[2].cities;
    } else {
        container.innerHTML = "No results found.";
        return;
    }

    displayResults(reference);
}

function displayResults(reference) {
    var container = document.getElementById("search_results");
    
    reference.forEach(destination => {
        var header = document.createElement("h3");
        header.textContent = destination.name;
        container.appendChild(header);

        var img = document.createElement("img");
        img.src = destination.imageUrl;
        container.appendChild(img);

        var description = document.createElement("p");
        description.textContent = destination.description;
        container.appendChild(description);
    });

    container.style.display = "block";
}

function clearData() {
    var container = document.getElementById("search_results");
    container.innerHTML = "";
}
