const checkRightString = (strOne: string, strTwo: string): number => {
  let counter = 0;
  for (let i = 0; i < strOne.length; i++) {
    if (strOne[i] === strTwo[i]) {
      counter++;
    }
  }
  return counter;
};

export default checkRightString;
