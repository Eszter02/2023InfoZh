var RandomStringSelector = /** @class */ (function () {
    function RandomStringSelector() {
    }
    RandomStringSelector.getRandomStrings = function (inputStrings, count) {
        if (count > inputStrings.length) {
            throw new Error('Count cannot be greater than the length of the input array.');
        }
        var selectedStrings = [];
        while (selectedStrings.length < count) {
            var randomIndex = Math.floor(Math.random() * inputStrings.length);
            var selectedString = inputStrings[randomIndex];
            if (selectedStrings.indexOf(selectedString) == -1) {
                selectedStrings.push(selectedString);
            }
        }
        return selectedStrings;
    };
    return RandomStringSelector;
}());
function szamitas3b() {
    // Példa használat
    var inputStrings = ["abcde", "fghijk", "lmnopqr", "stuvwx", "yz12345", "67890ab", "cdefghi"];
    try {
        var selectedRandomStrings = RandomStringSelector.getRandomStrings(inputStrings, 3);
        var sztring = document.getElementById('sztring');
        var vksz = document.getElementById('vksz');
        sztring.textContent = "".concat(inputStrings);
        vksz.textContent = "".concat(selectedRandomStrings);
        //console.log('Véletlenszerűen kiválasztott sztringek:', selectedRandomStrings);
    }
    catch (error) {
        //console.error(error.message);
    }
}
