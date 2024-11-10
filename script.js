let noClickCount = 0;
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const messageDiv = document.getElementById('message');
const imageContainer = document.getElementById('imageContainer');
const videoContainer = document.getElementById('videoContainer');
const audioButton = document.getElementById('playAudioButton');

noButton.addEventListener('mousemove', () => {
    noClickCount++;

    // Move the "No" button randomly
    const container = document.querySelector('.container');
    const maxX = container.clientWidth - noButton.clientWidth;
    const maxY = container.clientHeight - noButton.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;

    // Show images after three "No" button clicks
    if (noClickCount === 3) {
        imageContainer.style.display = 'block';
        messageDiv.textContent = "Bakit ka No ng No? Yung yes button naman" ;
    }
});

yesButton.addEventListener('click', () => {
    // Reset the noClickCount and hide images
    noClickCount = 0;
    imageContainer.style.display = 'none';
    videoContainer.style.display = 'block';
    messageDiv.textContent = "HALA NAG YES NGA, THANKYOU";
    messageDiv. textContent = "loves it, baby. pakiss nga, isa lang (⁠≧⁠▽⁠≦⁠)"
});

// Play audio when the button is clicked
audioButton.addEventListener('click', () => {
    const audio = new Audio('audio.mp3');
    audio.play();
});
