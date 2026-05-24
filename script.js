const startScreen = document.querySelector(".start-screen");
const playBtn = document.querySelector(".play");
const game = document.querySelector(".game");

const contentBtns = document.querySelector(".btns");
const contentGuessWord = document.querySelector(".guess-word");
const img = document.querySelector("img");
const contentClue = document.querySelector(".clue");
const btnNew = document.querySelector(".new");
let indexImg;

btnNew.onclick = () => init();

playBtn.onclick = () => {
    startScreen.style.display = "none";
    game.style.display = "flex";
};

init();

function init() {
    indexImg = 1;

    img.src = `img/img1.png`;

    generateGuessSection();
    generateButtons();
}

function generateGuessSection() {
    contentGuessWord.textContent = "";

    const { word, clue } = getWord();

    const wordWithoutAccent = word
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

    Array.from(wordWithoutAccent).forEach((letter) => {
        const span = document.createElement("span");

        span.setAttribute("word", letter.toUpperCase());

        if (letter === " ") {
            span.textContent = " ";
            span.style.width = "20px";
        } else {
            span.textContent = "_";
        }

        contentGuessWord.appendChild(span);
    });

    contentClue.textContent = `Pergunta: ${clue}`;
}

function wrongAnswer() {
    indexImg++;

    img.src = `img/img${indexImg}.png`;

    if (indexImg === 7) {
        setTimeout(() => {
            alert("Você me deixou triste :(");
            init();
        }, 100);
    }
}

function verifyLetter(letter) {
    const arr = document.querySelectorAll(`[word="${letter}"]`);

    if (!arr.length) {
        wrongAnswer();
    }

    arr.forEach((e) => {
        e.textContent = letter;
    });

    const spans = document.querySelectorAll(".guess-word span");

    const won = !Array.from(spans).find(
        (span) => span.textContent === "_"
    );

    if (won) {
        setTimeout(() => {
            alert("Você arrasou!!!");
            init();
        }, 100);
    }
}

function generateButtons() {
    contentBtns.textContent = "";

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    chars.split("").forEach((char) => {
        const btn = document.createElement("button");

        btn.textContent = char;

        btn.onclick = () => {
            btn.disabled = true;
            btn.style.backgroundColor = "gray";

            verifyLetter(char);
        };

        contentBtns.appendChild(btn);
    });
}