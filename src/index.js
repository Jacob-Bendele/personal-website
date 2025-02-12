function typeText(targetElement, text) {
    let idx = 0;
    for (let char of text) {
        idx++;
        setTimeout(() => { targetElement.textContent += char }, idx * 100);
    }
}

function loadHTML(path) {
    return fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .catch(error => {
            return 'Error loading content: ' + error.message;
        });
}

function launchCommandAnimation() {
    const targetId = "typed"
    const textToType = "./about-me --interactive"
    const typedTextElement = document.getElementById(targetId);

    typeText(typedTextElement, textToType)
}

function showAboutMe() {
    const path = "content/me.html"
    const targetId = "about-me"
    loadHTML(path)
        .then(data => {
            const typedTextElement = document.getElementById(targetId);
            typedTextElement.innerHTML = data
        })
}

function updateTime() {
    const now = new Date();
    const options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true // Use 12-hour format
    };
    
    const dateTimeString = now.toLocaleString('en-US', options);
    document.getElementById('system-time').textContent = dateTimeString;

}


function main() {
    setInterval(updateTime, 60000); // Update every minute
    setTimeout(launchCommandAnimation, 5000);
    setTimeout(showAboutMe, 12000);
    updateTime();
}

main()