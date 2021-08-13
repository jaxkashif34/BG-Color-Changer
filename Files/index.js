const button = document.querySelector('.btn')
button.addEventListener("click", colorGenerator)

function colorGenerator() {
    let finalColor1 = "#";
    var randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
    finalColor1 += randomColor1
    let finalColor2 = "#";
    var randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
    finalColor2 += randomColor2
    document.querySelector("body").style.backgroundImage = `linear-gradient(45deg, ${finalColor1}, ${finalColor2})`
    document.querySelector(".actual-color").textContent = `${finalColor1 + " " + finalColor2}`
}
colorGenerator()