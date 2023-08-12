// Write your JavaScript code here!

const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, randomPlanet.name, randomPlanet.diameter, randomPlanet.star, randomPlanet.distance, randomPlanet.moons, randomPlanet.image);
    });

});

const launchForm = document.querySelector('#launchForm');
const shuttleStatus = document.querySelector('#launchStatus');
const pilotStatus = document.querySelector('#pilotStatus');
const copilotStatus = document.querySelector('#copilotStatus');
const fuelStatus = document.querySelector('#fuelStatus');
const cargoStatus = document.querySelector('#cargoStatus');

launchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const pilotName = document.querySelector('#pilotName').value;
    const coPilotName = document.querySelector('[name="copilotName"]').value;
    const fuelLevel = document.querySelector('[name= "fuelLevel"]').value;
    const cargoMass = document.querySelector('[name= "cargoMass"]').value;

    if (pilotName === '' || coPilotName === '' || fuelLevel === '' || cargoMass === '') {
        alert('All fields are required!');
        return;
    }

    //validation

    const pilotValidation = validateInput(pilotName);
    const coPilotValidation = validateInput(coPilotName);
    const fuelValidation = validateInput(fuelLevel);
    const cargoValidation = validateInput(cargoMass);

    if (pilotValidation !== 'Is a Number' && coPilotValidation !== 'Is a Number' &&
        fuelValidation !== 'Not a Number' && cargoValidation !== 'Not a Number') {
    // Update shuttle requirements based on validation and conditions
    if (fuelLevel < 10000 || cargoMass > 10000) {
        shuttleStatus.innerHTML = 'Shuttle not ready for launch';
        shuttleStatus.style.color = 'red';
        pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;
        copilotStatus.innerHTML = `Co-pilot ${coPilotName} Ready`;
        fuelStatus.innerHTML = 'Fuel level too low for launch';
        cargoStatus.innerHTML = 'Cargo mass too high for launch';

        faultyItems.style.visibility = 'visible';

        if (fuelLevel < 10000) {
            fuelStatus.innerHTML = 'Fuel level too low for launch';
        }

        if (cargoMass > 10000) {
            cargoStatus.innerHTML = 'Cargo mass too high for launch';
        }

        faultyItems.style.color = '#C7254E';
    } else {
        shuttleStatus.innerHTML = 'Shuttle is ready for launch';
        shuttleStatus.style.color = '#419F6A';
        pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;
        copilotStatus.innerHTML = `Co-pilot ${coPilotName} Ready`;
        fuelStatus.innerHTML = 'Fuel level high enough for launch';
        cargoStatus.innerHTML = 'Cargo mass low enough for launch';

        faultyItems.style.visibility = 'hidden';
    }
} else {
    alert('Please enter valid information for all fields.');
}
});
        // Alerts and shuttle status updates are handled above

function pickPlanet(planets) {
    const missionTarget = document.querySelector('#missionTarget');

    const randomIndex = Math.floor(Math.random() * planets.length);
    const selectedPlanet = planets[randomIndex];

    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${selectedPlanet.name}</li>
            <li>Diameter: ${selectedPlanet.diameter}</li>
            <li>Star: ${selectedPlanet.star}</li>
            <li>Distance from Earth: ${selectedPlanet.distance}</li>
            <li>Number of Moons: ${selectedPlanet.moons}</li>
        </ol>
        <img src="${selectedPlanet.image}" alt="Mission Destination Image">
    `;
}

