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
function szamitas3a() {
    // Példa használat
    var angle = 40;
    var sideb = 8;
    var sidea = 10;
    var height = sideb * Math.sin(angle);
    var para = new Parallelogram();
    var areaWithHeightAndSide = para.calculateAreaWithHeightAndSide(height, sidea);
    var areaWithAngleAndSides = para.calculateAreaWithAngleAndSides(angle, sidea, sideb);
    var alfa = document.getElementById('alfa');
    var oldala = document.getElementById('oldala');
    var oldalb = document.getElementById('oldalb');
    var magas = document.getElementById('magas');
    var tma = document.getElementById('tma');
    var tsza = document.getElementById('tsza');
    alfa.textContent = "".concat(angle);
    oldala.textContent = "".concat(sidea);
    oldalb.textContent = "".concat(sideb);
    magas.textContent = "".concat(height);
    tma.textContent = "".concat(areaWithHeightAndSide);
    tsza.textContent = "".concat(areaWithAngleAndSides);
}
