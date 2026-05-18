const form = document.getElementById('farmerForm');

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    document.getElementById("responseMessage").innerText =
        "Submitting...";

    try {

        await fetch(
            "https://script.google.com/macros/s/AKfycbwNYQNdQnyvDwTqYcUSOE9KzacsHEJU5_piHOHiOPCSzwpLOxm0V-V8Lsr4eK3WmH6ySw/exec",
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