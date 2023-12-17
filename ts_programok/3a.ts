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

  function szamitas3a() {
        // Példa használat
        const angle = 40;
        const sideb = 8;
        const sidea = 10;
        const height = sideb * Math.sin(angle);
      
        const para = new Parallelogram()
        
        const areaWithHeightAndSide = para.calculateAreaWithHeightAndSide(height, sidea);
        const areaWithAngleAndSides = para.calculateAreaWithAngleAndSides(angle, sidea, sideb);

        const alfa = document.getElementById('alfa') as HTMLParagraphElement;
        const oldala = document.getElementById('oldala') as HTMLParagraphElement;
        const oldalb = document.getElementById('oldalb') as HTMLParagraphElement;
        const magas = document.getElementById('magas') as HTMLParagraphElement;
        const tma = document.getElementById('tma') as HTMLParagraphElement;
        const tsza = document.getElementById('tsza') as HTMLParagraphElement;
    
        alfa.textContent = `${angle}`; 
        oldala.textContent = `${sidea}`; 
        oldalb.textContent = `${sideb}`; 
        magas.textContent = `${height}`; 
        tma.textContent = `${areaWithHeightAndSide}`;
        tsza.textContent = `${areaWithAngleAndSides}`;
      }