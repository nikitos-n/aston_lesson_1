// Task 1
function memoize(callback) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify([...args].sort((a, b) => a - b));
    if (cache[key] !== undefined) {
      return cache[key];
    }
    const result = callback(...args);
    cache[key] = result;
    return result;
  };
}

//------------------------------------------------------------------------------------------------
//Task 2
function add(...args) {
  const sum = args.reduce((acc, num) => acc + (Number(num) || 0), 0);

  const curried = (...nextArgs) =>
    nextArgs.length ? add(sum, ...nextArgs) : sum;

  curried.valueOf = () => sum;
  return curried;
}

//------------------------------------------------------------------------------------------------
//Task 3
function logger() {
  console.log(`I output only external context: ${this.item}`);
}
const obj = { item: "some value" };
const boundLogger = logger.bind(obj);
boundLogger();

logger.call(obj);

logger.apply(obj);

//-----------------------------------------------------------------------------------------------
//Task 4
Function.prototype.myBind = function (context, ...boundArgs) {
  if (typeof this !== "function") {
    throw new TypeError("myBind must be called on a function");
  }
  const originalFunc = this;
  function boundFunction(...args) {
    const isNewCall = this instanceof boundFunction;
    const thisContext = isNewCall ? this : context;
    return originalFunc.apply(thisContext, [...boundArgs, ...args]);
  }
  boundFunction.prototype = Object.create(originalFunc.prototype);
  return boundFunction;
};
