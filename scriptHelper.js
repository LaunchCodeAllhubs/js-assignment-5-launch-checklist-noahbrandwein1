// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
}

function validateInput(testInput) {
    if (testInput.trim() === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    document.getElementById("pilotStatus").innerHTML = 'Pilot ${validateInput(pilot)}';
    document.getElementById("copilotStatus").innerHTML = 'Co-pilot ${validateInput(copilot)}';

    //Updating fuel status
    const fuelStatusElement = document.getElementById("fuelStatus");
    if (validateInput(fuelLevel) === "Is a Number" && fuelLevel >= 10000) {
        fuelStatusElement.innerHTML = "Fuel level high enough for launch";
    } else {
        fuelStatusElement.innerHTML = "Fuel Level too low for launch";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    }

    //Updating cargo status
    const cargoStatusElement = document.getElementById("cargoStatus");
    if (validateInput(cargoLevel) === "Is a Number" && cargoLevel <= 10000) {
        cargoStatusElement.innerHTML = "Cargo mass low enough for launch";
    } else {
        cargoStatusElement.innerHTML = "Cargo mass too high for launch";
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("cargoStatus").style.color = "red";
        document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch";
        document.getElementById("launchStatus").style.color = "red";
    }

    if (validateInput(pilot) === "Is a Number" &&
        validateInput(copilot) === "Is a Number" &&
        validateInput(fuelLevel) === "Is a Number" && fuelLevel >= 10000 &&
        validateInput(cargoLevel) === "Is a Number" && cargoLevel <= 10000) {
        document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch";
        document.getElementById("launchStatus").style.color = "green";
        document.getElementById("faultyItems").style.visibility = "hidden";
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;