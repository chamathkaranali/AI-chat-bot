function sendPrompt() {
    document.getElementById("output").innerHTML = '<div>Loading...</div>';
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("X-goog-api-key", "AIzaSyAhMRK5TzkdAnk37ma6iXWIIq6VjVO96e8");
    let txtpromt=document.getElementById("txtpromt").value



    const raw = JSON.stringify({
    "contents": [
        {
        "parts": [
            {
            "text": txtpromt
            }
        ]
        }
    ]
    });

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
    };

    fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent", requestOptions)
    .then((response) => response.json())
    .then((result) => {
            document.getElementById("output").innerHTML = result.candidates[0].content.parts[0].text;


}).catch((error) => console.error(error));
}