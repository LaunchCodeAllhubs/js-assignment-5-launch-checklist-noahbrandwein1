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

        const pilotValidation = validateInput(pilotName);
        const coPilotValidation = validateInput(coPilotName);
        const fuelValidation = validateInput(fuelLevel);
        const cargoValidation = validateInput(cargoMass);

        if (pilotValidation !== 'Is a Number' && coPilotValidation !== 'Is a Number' &&
            fuelValidation !== 'Not a Number' && cargoValidation !== 'Not a Number') {
        } else {
            alert('Please enter valid information for all fields.');
        }

        const shuttleStatus = document.querySelector('#shuttleStatus');
        const launchStatus = document.querySelector('#launchStatus');

        if (fuelLevel < 10000 || cargoMass > 10000) {
            shuttleStatus.innerHTML = 'Shuttle not ready for launch';
            shuttleStatus.style.color = 'red';
            pilotStatus.innerHTML = 'Pilot Ready';
            copilotStatus.innerHTML = 'Co-pilot Ready';
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        } else {
            shuttleStatus.innerHTML = 'Shuttle is ready for launch';
            shuttleStatus.style.color = 'green';
            pilotStatus.innerHTML = `Pilot ${pilotName} Ready`;
            copilotStatus.innerHTML = `Co-pilot ${coPilotName} Ready`;
            fuelStatus.innerHTML = 'Fuel level high enough for launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
        }
    })

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

});