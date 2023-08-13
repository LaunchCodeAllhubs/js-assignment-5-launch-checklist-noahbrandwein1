// Write your JavaScript code here!

const { myFetch, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let selectedPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image);
        console.log(listedPlanets);
    });
});

document.getElementById("formSubmit").addEventListener("click", function (event) {
    event.preventDefault();

    const pilotName = document.querySelector("input[name='pilotName']").value;
    const copilotName = document.querySelector("input[name='copilotName']").value;
    const fuelLevel = document.querySelector("input[name='fuelLevel']").value;
    const cargoMass = document.querySelector("input[name='cargoMass']").value;

    if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
        alert("All fields are required!");
        return;

    }

    formSubmission(document, listedPlanets, pilotName, copilotName, fuelLevel, cargoMass);

});