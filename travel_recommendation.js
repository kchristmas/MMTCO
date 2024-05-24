

/* async function fetchData(){

    try {
        let travel_destination = document.getElementById("search").value.trim().toLowerCase();
        const search_response = await fetch('jsondoc/${travel_destination}'); /*json doc only I think?*/

       /* if(!search_response.ok){
            throw new Error("Could not fetch resource");
        }

        if travel_destination == "beach" {
            travel_destination = "beaches";
        } else if travel_destination == "temple" {
            travel_destination = "temples";
        }

        const data = await search_response.json(); /* since I'm using a json file, I don't think I need this part? */
        
        /*img search set up */
     /*   const destination_picture = /* data . img or something */
     /*   const imgElement = document.getElementById("destination_picture");
        imgElement.src = destination_picture;
        imgElement.style.dsiplay = "block";
        
        const destination_place 
        const destination_about
    }
    catch(error){
        console.error(error);
    }
}*/

async function fetchData() {
    var travel_destination = document.getElementById("search").value;

    try {
        const response = await fetch('travel_recommendation.json');
        const data = await response.json();

        var results = data.filter(destination => {
            if (travel_destination == "country"){
                travel_destination = "countries"
            }
            return destination.category.toLowerCase().includes(travel_destination.trim().toLowerCase());
        });

        displayResults(results);
    } catch (error) {
        console.error('Error:', error);
    }
}

var container = document.getElementById("search_results");

function displayResults(results) {

    container.innerHTML = "";

    results.forEach(result => {
        var resultElement = document.createElement("div");
        var header = document.createElement("h3");
        header.textContent = result.name;
        resultElement.appendChild(header);

        var image = document.createElement("img");
        image.src = result.imgUrl;
        resultElement.appendChild(image);

        var description = document.createElement("p");
        description.textContent = result.description;
        resultElement.appendChild(description);

        container.appendChild(resultElement);
    /*results.forEach(result => {
        var resultElement = document.createElement("div");
        resultElement.textHeader = result.name;
        resultElement.img = result.imgUrl;
        resultElement.description = result.description;
        container.appendChild(resultElement);*/
    });

    if (results.length === 0) {
        var noResultsMessage = document.createElement("div");
        noResultsMessage.textContent = "No results found.";
        container.appendChild(noResultsMessage);
    }
}

function clearData() {

    container.innerHTML = "";

}