function preloader() {
    const imagesList = [
        "./img/widget-shopping-basket.jpg",
        "./img/widget-shopping-basket.jpg",
        "./img/widget-shopping-basket.jpg"
    ];

        const images = [];
        for (let i = 0; i < imagesList.length; i++) {
            images[i] = new Image();
            images[i].src = imagesList[i];
        }

        console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
    };
    window.addEventListener("load", preloader);


const btn1 = document.querySelector(".buttons button:nth-child(1)");
const btn2 = document.querySelector(".buttons button:nth-child(2)");
const btn3 = document.querySelector(".buttons button:nth-child(3)");

const content = document.getElementById("content");

function removeActive() {
    btn1.removeAttribute("id");
    btn2.removeAttribute("id");
    btn3.removeAttribute("id");
}

btn1.addEventListener("click", function() {

    removeActive();
    btn1.setAttribute("id", "active-button");

    content.innerHTML = `
        <h1>Solution: Solar Panels</h1>
        <img src="img/widget-shopping-basket.jpg" alt="solar panels">
        <p>Solar Panels: They are now affordable for the average home.</p>
    `;
});

btn2.addEventListener("click", function() {

    removeActive();
    btn2.setAttribute("id", "active-button");

    content.innerHTML = `
        <h1>Solution: Heat Pumps</h1>
        <img src="img/widget-shopping-basket.jpg" alt="heat pumps">
        <p>Lowers electricity bills by switching from inefficient heating sources..</p>
    `;
});

btn3.addEventListener("click", function() {

    removeActive();
    btn3.setAttribute("id", "active-button");

    content.innerHTML = `
        <h1>Solution: Insulation & Sealing</h1>
        <img src="img/widget-shopping-basket.jpg" alt="insulatiom">
        <p> Reduces heating loads, improve energy efficiency, and lower utility bills..</p>
    `;
});