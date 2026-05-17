const form = document.getElementById('farmerForm');

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    try {

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbwCPn-hHhckh6PDsNP53IF6wPD3HHhHtL8FWJ_bCO0WEzcaJ4t3i4q7U53polxPghu85g/exec",
            {
                method: "POST",
                body: formData
            }
        );

        document.getElementById("responseMessage").innerText =
            "Questionnaire submitted successfully!";

        form.reset();

    } catch(error) {

        console.error(error);

        document.getElementById("responseMessage").innerText =
            "Failed to submit.";

    }

});