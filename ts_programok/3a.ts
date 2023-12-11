class Parallelogram {
    public calculateAreaWithHeightAndSide(height: number, side: number): number {
      // Paralelogramma területének kiszámítása magasság és oldal hossza alapján
      return height * side;
    }
  
    public calculateAreaWithAngleAndSides(angle: number, side1: number, side2: number): number {
      // Paralelogramma területének kiszámítása szög és két oldal hossza alapján
      //const radians = (angle * Math.PI) / 180; // Átváltás radiánba
      return side1 * side2 * Math.sin(angle);
    }
  }
  
  // Példa használat
  const angle = 40;
  const sideb = 8;
  const sidea = 10;
  const height = sideb * Math.sin(angle);

  const para = new Parallelogram()
  
  const areaWithHeightAndSide = para.calculateAreaWithHeightAndSide(height, sidea);
  const areaWithAngleAndSides = para.calculateAreaWithAngleAndSides(angle, sidea, sideb);
  
  console.log(`Terület magasság és oldal alapján: ${areaWithHeightAndSide}`);
  console.log(`Terület szög és két oldal alapján: ${areaWithAngleAndSides}`);