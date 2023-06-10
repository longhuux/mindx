const btnNums = document.getElementsByClassName("btn-number");
const btnOperators = document.getElementsByClassName("action--operator");
const logRes = document.getElementById("result");
const btnEqual = document.getElementById("equal");
const btnAC = document.getElementById("clear");

// console.dir(btnEqual);
for (let i = 0; i < btnNums.length; i++) {
    btnNums[i].addEventListener("click", (event) => {
        logRes.innerText += event.target.innerText;
        // console.log(event.target.innerText);
        // console.log(logRes.innerText);
    })
}

for (let j = 0; j < btnOperators.length; j++) {
    btnOperators[j].addEventListener("click", (event) => {
        logRes.innerText += event.target.innerText;
        // console.log(event.target.innerText);
        // console.log(logRes.innerText);
    })
}

btnEqual.addEventListener("click", () => {
    try {
        logRes.innerText = eval(logRes.innerText);
    } catch (error) {
        logRes.innerText = "Lỗi";
    }
})

btnAC.addEventListener("click", () => {
    logRes.innerText = "0";
})

