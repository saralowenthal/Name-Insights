// Sara Lowenthal 3/31/25 

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("predictBtn").addEventListener("click", async function(){

        // Getting the value of firstName
        let firstName = document.getElementById("nameInput").value;
        
        // Validate the user input
        if (!firstName.length){
            alert("Please enter your first name.");
            return;
        }
    
        // GENDER:
        let genderUrl = "https://api.genderize.io?name=" + firstName;

        const genderResponse = await fetch(genderUrl);
        if (!genderResponse.ok) {
            alert("An error occurred while getting the gender.")
            throw new Error(`Response status: ${genderResponse.status}`);
        }
    
        const genderJson = await genderResponse.json();
        console.log(genderJson);

        let gender = genderJson.gender;
        document.getElementById("genderResult").innerHTML = gender ?? "Unknown";
        
        // AGE:
        let ageUrl = "https://api.agify.io?name=" + firstName;

        const ageResponse = await fetch(ageUrl);
        if (!ageResponse.ok) {
            alert("An error occurred while getting the age.")
            throw new Error(`Response status: ${ageResponse.status}`);
        }
    
        const ageJson = await ageResponse.json();
        console.log(ageJson);

        let age = ageJson.age;
        document.getElementById("ageResult").innerHTML = age ?? "Unknown";
         
        // Display results box by removing the 'hidden' class
        document.getElementsByClassName('result')[0].classList.remove('hidden');
    });
});
