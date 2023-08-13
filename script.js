// Write your JavaScript code here!

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

    });
    let list = this.document.getElementById("faulty items");
    list.style.visibilty = "hidden";
    let form = document.querySelector("form");

    form.addEventListener("submit" , function(event){
        event.preventDefault();



        let pilotName = document.querySelector("input[name='pilotName']");
        let pilot = pilotInput.value;
        let copilotName = document.querySelector("input[name='copilotName']");
        let copilot = copilotInput.value;
        let fuelInput = document.querySelector("input[name='fuelLevel']");
        let fuelLevel = Number(fuelInput.value);
        let cargoInput = document.querySelector("input[name='cargoMass']");
        let cargoMass = Number(cargoInput.value);

        //if (pilotName === "" || copilotName === "" || fuelLevel === "" || cargoMass === "") {
          //  alert("All fields are required!");
           // return;

       // }

        formSubmission(document, listedPlanets, pilotName, copilotName, fuelLevel, cargoMass);

    });

});