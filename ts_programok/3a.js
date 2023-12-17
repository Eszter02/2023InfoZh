var Parallelogram = /** @class */ (function () {
    function Parallelogram() {
    }
    Parallelogram.prototype.calculateAreaWithHeightAndSide = function (height, side) {
        // Paralelogramma területének kiszámítása magasság és oldal hossza alapján
        return height * side;
    };
    Parallelogram.prototype.calculateAreaWithAngleAndSides = function (angle, side1, side2) {
        // Paralelogramma területének kiszámítása szög és két oldal hossza alapján
        //const radians = (angle * Math.PI) / 180; // Átváltás radiánba
        return side1 * side2 * Math.sin(angle);
    };
    return Parallelogram;
}());
// Példa használat
var angle = 40;
var sideb = 8;
var sidea = 10;
var height = sideb * Math.sin(angle);
var para = new Parallelogram();
var areaWithHeightAndSide = para.calculateAreaWithHeightAndSide(height, sidea);
var areaWithAngleAndSides = para.calculateAreaWithAngleAndSides(angle, sidea, sideb);
console.log("Ter\u00FClet magass\u00E1g \u00E9s oldal alapj\u00E1n: ".concat(areaWithHeightAndSide));
console.log("Ter\u00FClet sz\u00F6g \u00E9s k\u00E9t oldal alapj\u00E1n: ".concat(areaWithAngleAndSides));
