// Task 1
const isSerializableObject = (value) =>
  typeof value === "object" &&
  value !== null &&
  !(value instanceof Date) &&
  !(value instanceof Map) &&
  !(value instanceof Set) &&
  !(value instanceof RegExp);

const deepCopy = (value) => {
  if (!isSerializableObject(value) && !Array.isArray(value)) {
    return value;
  }
  const result = Array.isArray(value) ? [] : {};
  const entries = Object.entries(value);
  for (const [key, val] of entries) {
    result[key] = deepCopy(val);
  }
  return result;
};

//------------------------------------------------------------------
// Task 2
const selectFromInterval = (arr, a, b) => {
  if (!Array.isArray(arr)) {
    throw new Error("first parameter must be an array!");
  }
  if (!arr.every(Number.isFinite)) {
    throw new Error("There are not only numbers in the array!");
  }
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("incorrect input parameters!");
  }
  const [min, max] = a < b ? [a, b] : [b, a];
  return arr
  .filter((num) => num >= min && num <= max)
  .sort((x, y) => x - y);
};

//---------------------------------------------------
// Task 3
const fn = (key) => {
    const values = arr.map((item) => item[key]);
    console.log(values.join(', '));
};

//----------------------------------------------------
// Task 5
function reverseStr(str) {
  return str.split("").reverse().join("");
}
