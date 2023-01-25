let answerScreen = document.getElementById("screen");

function Clear() {
    answerScreen.value = "";
}

function del() {
    answerScreen.value = answerScreen.value.slice(0,-1);
}

function display(num) {
    answerScreen.value += num;
}

function Calculate() {
    try {
        answerScreen.value = eval(answerScreen.value);
    }
    catch(err)
    {
        answerScreen.value = "Invalid";
    }
}
