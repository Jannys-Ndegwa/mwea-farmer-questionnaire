const form = document.getElementById('farmerForm');

form.addEventListener('submit', async (e) => {

    e.preventDefault();

    const formData = new FormData(form);

    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    try{

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbwNYQNdQnyvDwTqYcUSOE9KzacsHEJU5_piHOHiOPCSzwpLOxm0V-V8Lsr4eK3WmH6ySw/exec",
            {
                method:"POST",
                body:JSON.stringify(data)
            }
        );

        document.getElementById("responseMessage").innerText =
            "Questionnaire submitted successfully!";

        form.reset();

    }catch(error){

        document.getElementById("responseMessage").innerText =
            "Failed to submit.";

    }

});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}