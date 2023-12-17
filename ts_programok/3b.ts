class RandomStringSelector {
    static getRandomStrings(inputStrings: string[], count: number): string[] {
      if (count > inputStrings.length) {
        throw new Error('Count cannot be greater than the length of the input array.');
      }
  
      const selectedStrings: string[] = [];
  
      while (selectedStrings.length < count) {
        const randomIndex = Math.floor(Math.random() * inputStrings.length);
        const selectedString = inputStrings[randomIndex];
  
        if (selectedStrings.indexOf(selectedString) == -1) {
          selectedStrings.push(selectedString);
        }
      }
  
      return selectedStrings;
    }
  }

  function szamitas3b() {
      // Példa használat
      const inputStrings = ["abcde", "fghijk", "lmnopqr", "stuvwx", "yz12345", "67890ab", "cdefghi"];
  
      try {
        const selectedRandomStrings = RandomStringSelector.getRandomStrings(inputStrings, 3);
        
        const sztring = document.getElementById('sztring') as HTMLParagraphElement;
        const vksz = document.getElementById('vksz') as HTMLParagraphElement;

        sztring.textContent = `${inputStrings}`;
        vksz.textContent = `${selectedRandomStrings}`;
        //console.log('Véletlenszerűen kiválasztott sztringek:', selectedRandomStrings);
      } catch (error) {
        //console.error(error.message);
      }
    }
    