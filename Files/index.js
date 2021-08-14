const button = document.querySelector('.btn')
button.addEventListener("click", randomColorGenerator)
randomColorGenerator()
function randomColorGenerator() {
    let colorArray = [];
    for (let i = 0; i < 2; i++) {
        let finalColor = "#";
        let randomHexa = Math.floor(Math.random() * 16777216).toString(16);
        finalColor += randomHexa;
        colorArray.push(finalColor);
    }
    document.querySelector(".actual-color").textContent = `${colorArray[0] + " " + colorArray[1]}`
    document.querySelector("body").style.backgroundImage = `linear-gradient(45deg, ${colorArray[0]}, ${colorArray[1]})`
}
