





function timeFunction(time) {
    var days = time.getDay(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
        millSeconds = time.getMilliseconds();

    document.querySelector(".days").innerHTML = `<h1>${days}</h1>`;
    document.querySelector(".hours").innerHTML = `<h1>${hours}</h1>`;
    document.querySelector(".minutes").innerHTML = `<h1>${minutes}</h1>`;
    document.querySelector(".seconds").innerHTML = `<h1>${seconds}</h1>`;
    document.querySelector(".millseconds").innerHTML = `<h1>${millSeconds}</h1>`;
};



setInterval(() => {
    timeFunction(new Date());
}, 1);

console.log(new Date().getMilliseconds)