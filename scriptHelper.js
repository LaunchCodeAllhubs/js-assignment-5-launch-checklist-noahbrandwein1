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
            // Update other status elements
        } else {
            // Update shuttle requirements for successful launch
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
