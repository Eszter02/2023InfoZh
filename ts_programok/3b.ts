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
  
  // Példa használat
  const inputStrings = ["abcde", "fghijk", "lmnopqr", "stuvwx", "yz12345", "67890ab", "cdefghi"];
  
  try {
    const selectedRandomStrings = RandomStringSelector.getRandomStrings(inputStrings, 3);
    console.log('Véletlenszerűen kiválasztott sztringek:', selectedRandomStrings);
  } catch (error) {
    console.error(error.message);
  }
  