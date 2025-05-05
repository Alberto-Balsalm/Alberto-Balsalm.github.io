const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/The_Eeper.jpg") {
        myImage.setAttribute("src", "images/awake_cat.jpg");
        document.querySelector(".wake-req").textContent = `click on him to put him back to sleep`;
    } else {
        const storedName = localStorage.getItem("name");
        myImage.setAttribute("src", "images/The_Eeper.jpg");
        document.querySelector(".wake-req").textContent = `click on him to wake his ass up ${storedName}!`;
    }
};

const myButton = document.querySelector("button");
myButton.onclick = () => {
    setUserName();
};

const myH1 = document.querySelector("h1");
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myH1.textContent =  `hi ${storedName} :3`;
    document.querySelector(".wake-req").textContent = `click on him to wake his ass up ${storedName}!`;
}

function setUserName() {
    const userName = prompt("what's your name?");
    if (!userName) {
        setUserName();
    } else {
        localStorage.setItem("name", userName);
        myH1.textContent =  `haaaii ${userName} :3`;
        document.querySelector(".wake-req").textContent = `click on him to wake his ass up ${userName}!`;
    }
}