document.getElementById("randomizer").onclick = function() {
    console.log("Woi")
    event.preventDefault();
        const filmArray = [
            "hereditary.html",
            "generic.html",
            "thewitch.html",
            "parasite.html",
            "rocketman.html",
            "goodtime.html",
            "midsommar.html",
            "gonegirl.html",
            "thelighthouse.html",
            "beforesunrise.html",
            "thegrandbudapesthotel.html",
            "therewillbeblood.html"
        ]
        const randomizedIndex = Math.floor(Math.random() * filmArray.length);
        window.location.href = filmArray[randomizedIndex]
        return false;

}