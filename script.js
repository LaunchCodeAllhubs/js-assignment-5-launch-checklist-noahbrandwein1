// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        pickPlanet(listedPlantets);
    })

    const launchForm = document.querySelector('#launchForm');

    launchForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const pilotName = document.querySelector('#pilotName').value;
        const coPilotName = document.querySelector('#copilotName').value;
        const fuelLevel = document.querySelector('#fuelLevel').value;
        const cargoMass = document.querySelector('#cargoMass').value;

        if (pilotName === '' || coPilotName === '' || fuelLevel === '' || cargoMass === '') {
            alert('All fields are required!');
            return;
        }

        if (!isNaN(pilotName) || !isNaN(coPilotName) || isNaN(fuelLevel) || isNaN(cargoMass)) {
            alert('Please enter valid information for all field.');
            return;
        }

    })
});