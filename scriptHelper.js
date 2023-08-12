// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.querySelector('#missionTarget');
    // Here is the HTML formatting for our mission target div.

    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}" alt="Mission Destination Image">
    `;
}

function validateInput(testInput) {
    if (testInput === '') {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';

    }
}
    



function formSubmission(document, list, pilot, coPilot, fuelLevel, cargoLevel) {
        const pilotValidation = validateInput(pilot);
        const coPilotValidation = validateInput(coPilot);
        const fuelValidation = validateInput(fuelLevel);
        const cargoValidation = validateInput(cargoLevel);

        if (pilotValidation === 'Not a Number' || coPilotValidation === 'Not a Number' || fuelValidation !== 'Is a Number' || cargoValidation !== 'Is a Number') {
            const shuttleStatus = document.querySelector('#launchStatus');
            shuttleStatus.innerHTML = 'Shuttle not ready for launch';
            shuttleStatus.style.color = 'red';
        } else {

        }
    }



async function myFetch() {
    const url = 'https://handlers.education.launchcode.org/static/planets.json';
    const response = await fetch(url);
    const planetsReturned = await response.json();

    return planetsReturned;
}

function pickPlanet(planets) {
    const randomIndex = Math.floor(Math.random() * planets.length);
    return planets[randomIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
