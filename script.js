function openEnvelope() {
    document.querySelector('.envelope').style.transform = 'translateY(-80px)';
    document.querySelector('.flap').style.transform = 'rotateX(180deg)';
    document.querySelector('.message').style.opacity = '1';
    setTimeout(() => {
        document.querySelector('.button-container').style.display = 'block';
    }, 600);
}


function happyMode() {
    document.body.classList.remove('sad-mode');
    document.body.classList.add('happy-mode');

    // Change text
    document.querySelector('h1').innerText = "Ti cav dire non la! 😏❤️  Je badine bb thank you for blessing me with this opportunity in life i promise you will never regret it shona I LOVE YOU!";
    document.querySelector('.envelope-container').style.display = "none";
    document.querySelector('.button-container').style.display = "none";

    // Display floating hearts
    let heartContainer = document.querySelector('.heart-container');
    heartContainer.style.display = "block";

    for (let i = 0; i < 50; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
        heartContainer.appendChild(heart);
    }
}

function sadMode() {
    document.body.classList.remove('happy-mode');
    document.body.classList.add('sad-mode');

    // Change text
    document.querySelector('h1').innerText = "How could you... 😔💔";
    document.querySelector('.envelope-container').style.display = "none";
    document.querySelector('.button-container').style.display = "none";

    // Display rain
    let rainContainer = document.querySelector('.rain-container');
    rainContainer.style.display = "block";

    for (let i = 0; i < 100; i++) {
        let rainDrop = document.createElement('div');
        rainDrop.classList.add('rain');
        rainDrop.style.left = Math.random() * 100 + "vw";
        rainDrop.style.animationDuration = (Math.random() * 0.5 + 0.5) + "s";
        rainContainer.appendChild(rainDrop);
    }
}
