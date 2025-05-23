function calculateResults() {
    let Eng = parseInt(document.getElementById("eng").value) || 0;
    let maths = parseInt(document.getElementById("maths").value) || 0;
    let phy = parseInt(document.getElementById("phy").value) || 0;
    let com = parseInt(document.getElementById("com").value) || 0;
    let urdu = parseInt(document.getElementById("urdu").value) || 0;
    let bio = parseInt(document.getElementById("bio").value) || 0;

    let obtmarks = Eng + maths + phy + com + urdu + bio;
    let total = 600;
    let percn = (obtmarks * 100) / total;

    const Bushi = "Diya😂"
    
    document.getElementById("obtMarks").innerText = obtmarks;
    document.getElementById("percentage").innerText = percn.toFixed(2) + "%";

    let resultMessage = percn >= 50 ? "Pass" : "Fail";
    let resultColor = percn >= 50 ? "green" : "red";

//     result  show honey k lia
    let resultDisplay = document.getElementById("resultMessage");
    if (!resultDisplay) {
        resultDisplay = document.createElement("p");
        resultDisplay.id = "resultMessage";
        resultDisplay.style.fontSize = "20px";
        resultDisplay.style.fontWeight = "bold";
        document.body.appendChild(resultDisplay);
    }else{

    resultDisplay.innerText = `Result: ${resultMessage}`;
    resultDisplay.style.color = resultColor;
    }
}
