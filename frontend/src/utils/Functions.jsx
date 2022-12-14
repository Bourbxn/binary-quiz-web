export const randomNumber = () => {
  const maxNum = 256;
  return Math.floor(Math.random() * maxNum);
};

export const randomNumBin = () => {
  const maxNum = 16;
  return Math.floor(Math.random() * maxNum);
};

export const randomOp = () => {
  const maxOp = 4;
  return Math.floor(Math.random() * maxOp);
};

export const operators = (op) => {
  const ops = ["-", "<<", "^", "+"];
  return ops[op];
};

export const setSubNumber = ([num1, num2], op) => {
  if (num1 < num2 && op === 0) {
    return [num2, num1];
  }
  return [num1, num2];
};

export const setShiftLeftNumber = (num) => {
  if (num > 255) {
    return num - 256;
  } else {
    return num;
  }
};

export const setNumber = (num, op) => {
  if (op === 1) {
    num = 1;
  }
  return num;
};

export const bin = (int) => {
  return (int.toString(2) + "").padStart(8, "0");
};

export const bin4 = (int) => {
  return (int.toString(2) + "").padStart(4, "0");
};

export const hex = (int) => {
  return int.toString(16).toUpperCase();
};

export const checkAns = (ans, res) => {
  const isCorrect1 = ans.toUpperCase().localeCompare(hex(res));
  const isCorrect2 = ans.toUpperCase().localeCompare(hex(res).padStart(2, "0"));
  if (isCorrect1 === 0 || isCorrect2 === 0) {
    return true;
  } else {
    return false;
  }
};

export const checkBinHex = (ans, num) => {
  const isCorrect = ans.toUpperCase().localeCompare(hex(num));
  console.log(isCorrect, ans, hex(num));
  if (isCorrect === 0) {
    return true;
  } else {
    return false;
  }
};

export const getResult = (num1, num2, op) => {
  const results = [num1 - num2, num1 << num2, num1 ^ num2, num1 + num2];
  let result = results[op];
  if (result > 255 && op === 1) {
    result = result - 256;
  }
  return result;
};
