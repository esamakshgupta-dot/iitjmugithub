const button = document.getElementById("runaway");
const message = document.getElementById("message");
const popupContainer = document.getElementById("popup-container");

const roasts = [
    "Certified Goofball 🏆",
    "CEO of Bad Decisions",
    "Professional Button Misclicker",
    "Loading Brain... 2%",
    "Suspicious Levels of Confusion Detected",
    "Skill Issue Found",
    "Operating on Pure Luck"
];

function randomPosition(){
    return {
        x: Math.random()*(window.innerWidth-200),
        y: Math.random()*(window.innerHeight-100)
    };
}

button.addEventListener("mouseover", () => {
    const pos = randomPosition();
    button.style.left = pos.x + "px";
    button.style.top = pos.y + "px";

    message.innerText =
        roasts[Math.floor(Math.random()*roasts.length)];
});

setInterval(() => {
    const popup = document.createElement("div");

    popup.className = "popup";

    popup.innerText =
        "⚠️ Warning: Excessive Silly Detected";

    popup.style.left =
        Math.random()*(window.innerWidth-250)+"px";

    popup.style.top =
        Math.random()*(window.innerHeight-100)+"px";

    popupContainer.appendChild(popup);

    setTimeout(() => popup.remove(), 3000);

}, 1000);

setInterval(() => {
    document.body.style.transform =
        `translate(${Math.random()*10-5}px,
                   ${Math.random()*10-5}px)`;

    setTimeout(() => {
        document.body.style.transform = "translate(0,0)";
    },100);

},1500);

button.style.left="50%";
button.style.top="60%";
