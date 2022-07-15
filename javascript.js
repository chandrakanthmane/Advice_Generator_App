
async function exampleFetch() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();

    document.getElementById("adviceId").innerHTML= data.slip.id;
    document.getElementById("advice").innerHTML= data.slip.advice;
}

exampleFetch()
