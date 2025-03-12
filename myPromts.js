const myPromt = () => {
  const number = prompt("Введите число");
  if (!Number.isInteger(Number(number))) {
    alert("Некорректный ввод!");
    return;
  }
  const base = prompt("Введите систему счисления");
  const baseNum = Number(base);
  if (!Number.isInteger(baseNum) || baseNum < 2 || baseNum > 36) {
    alert("Некорректный ввод!");
    return;
  }
  const result = Number(number).toString(baseNum);
  alert(`Ответ: число ${number} в ${base}-ой системе счисления = ${result}`);
};
