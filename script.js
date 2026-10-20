const themeButton = document.createElement("button");

themeButton.textContent = "☀️ Light Mode";
themeButton.id = "theme-toggle";

document.body.prepend(themeButton);

themeButton.style.cssText = `
    position: fixed;
    top: 15px;
    right: 15px;
    padding: 10px 15px;
    border: none;
    border-radius: 8px;
    background: #38bdf8;
    color: #0f172a;
    cursor: pointer;
    z-index: 1000;
`;

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeButton.textContent = "🌙 Dark Mode";
    } else {
        themeButton.textContent = "☀️ Light Mode";
    }
});
const typingText = document.createElement("p");

typingText.id = "typing-text";
document.querySelector("#home").appendChild(typingText);

const words = ["Frontend Developer", "Web Developer", "JavaScript Learner"];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
    }
}

typeEffect();