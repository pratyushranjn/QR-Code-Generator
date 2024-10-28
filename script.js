let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrText.value);
        imgBox.classList.add("show-img");
        qrText.classList.remove("error");
    } else {
        qrText.classList.add("error");
        setTimeout(() => qrText.classList.remove("error"), 1000);
    }
    
    setTimeout(() => {
        imgBox.classList.add("gayab");
    }, 15000);
}

let btn = document.querySelector("button");
btn.addEventListener("click", () => {
    imgBox.classList.remove("gayab"); // For Reset visibility each click
    generateQR();
});

