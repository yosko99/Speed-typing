const diffBetweenStrings = (strOne: string, strTwo: string): number => {
  let counter = 0;
  for (let i = 0; i < strOne.length; i++) {
    if (strOne[i] !== strTwo[i]) {
      counter++;
    } else if (strOne[i] === strTwo[i] && counter !== 0) {
      counter++;
    }
  }
  return counter;
};

export default diffBetweenStrings;
