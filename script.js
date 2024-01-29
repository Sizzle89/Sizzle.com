document.addEventListener("DOMContentLoaded", function () {
    const webhookUrl = 'https://discord.com/api/webhooks/1201653254073614456/8-ykJwjJmAcn5pnqpMJzmGtvWbbK5UkKr4hM5LbFazPe1W3HOuOZtY2gH1yPQIh4Mh2q';
    
    let visitCount = parseInt(localStorage.getItem('visitCount')) || 0;

    visitCount++;

    localStorage.setItem('visitCount', visitCount);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", webhookUrl, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    const message = {
        content: `Someone visited the website! ${visitCount}`,
    };

    const jsonData = JSON.stringify(message);
    xhr.send(jsonData);
});
