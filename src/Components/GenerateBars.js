export const GenerateBars = (number) => {
    const num = Number(number);
    const newBars = [];
    for (let i = 0; i < num; i++) {
      let p = Math.floor(Math.random() * 500 + 1);
      newBars.push(p);
    }
    return newBars;
  };
  
 