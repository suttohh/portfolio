const copy = document.querySelector(".about-technical-skills-slider").cloneNode(true);
document.querySelector(".about-technical-skills-container").appendChild(copy);

const devTitleNode = document.querySelector(".typewriter-text");
const devTitleArray = ["Fullstack Developer", "Appian Developer"];

typewriterAnimation(devTitleNode, devTitleArray, 0, 0);

function typewriterAnimation(node, textArray, textArrayIndex, index) {
    if(index == textArray[textArrayIndex].length) {
        setTimeout(() => {
            node.textContent = "";
            typewriterAnimationReverse(node, textArray, textArrayIndex, index - 1);
        }, 2000);
        return;
    }

    node.textContent += textArray[textArrayIndex][index];
    setTimeout(() => typewriterAnimation(node, textArray, textArrayIndex, index + 1), 100);
}

function typewriterAnimationReverse(node, textArray, textArrayIndex, index) {
    if(index == -1) {
        //Change the dev title and mod it by length to ensure index stays within bounds
        textArrayIndex = (textArrayIndex + 1) % textArray.length;
        typewriterAnimation(node, textArray, textArrayIndex, index + 1);
        return;
    }
    node.textContent = textArray[textArrayIndex].slice(0, index);
    setTimeout(() => typewriterAnimationReverse(node, textArray, textArrayIndex, index - 1), 50);
}