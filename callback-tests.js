// Callback functions used as arguments in tests
const echo = function (val) {
  console.log(val);
};
const addTwo = function (val) {
  return val + 2;
};
const negate = function (val) {
  return val * -1;
};
const isAbove10 = function (val) {
  return val > 10;
};
const isAbove678 = function (val) {
  return val > 678;
};
const isNegative = function (val) {
  return val < 0;
};
const isPositive = function (val) {
  return val > 0;
};
const isNumber = function (val) {
  return typeof val === "number";
};

// Array used as argument in tests
let nums = [-3, -1, 0, 1, 2, 30, 45, 678];
console.log("nums array: ", nums);
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
console.log("letters array: ", letters);
// Tests
console.groupCollapsed("newForEach");
console.log("Expected output:");
nums.forEach(echo);
console.log("Actual output for newForEach(nums, echo):");
newForEach(nums, echo);
console.groupEnd();

console.group("newSome");
testOutputs(
  newSome(nums, isNegative),
  nums.some(isNegative),
  "newSome(nums, isNegative)"
);

testOutputs(
  newSome(nums, isPositive),
  nums.some(isPositive),
  "newSome(nums, isPositive)"
);

testOutputs(
  newSome(nums, isAbove10),
  nums.some(isAbove10),
  "newSome(nums, isAbove10)"
);

testOutputs(
  newSome(nums, isAbove678),
  nums.some(isAbove678),
  "newSome(nums, isAbove678)"
);
console.groupEnd();

console.group("newEvery");
testOutputs(
  newEvery(nums, isNegative),
  nums.every(isNegative),
  "newEvery(nums, isNegative)"
);

testOutputs(
  newEvery(nums, isPositive),
  nums.every(isPositive),
  "newEvery(nums, isPositive)"
);

testOutputs(
  newEvery(nums, isAbove10),
  nums.every(isAbove10),
  "newEvery(nums, isAbove10)"
);

testOutputs(
  newEvery(nums, isAbove678),
  nums.every(isAbove678),
  "newEvery(nums, isAbove678)"
);
console.groupEnd();

console.group("newFind");
testOutputs(
  newFind(nums, isNegative),
  nums.find(isNegative),
  "newFind(nums, isNegative)"
);

testOutputs(
  newFind(nums, isPositive),
  nums.find(isPositive),
  "newFind(nums, isPositive)"
);

testOutputs(
  newFind(nums, isAbove10),
  nums.find(isAbove10),
  "newFind(nums, isAbove10)"
);

testOutputs(
  newFind(nums, isAbove678),
  nums.find(isAbove678),
  "newFind(nums, isAbove678)"
);
console.groupEnd();

console.group("newFindIndex");
testOutputs(
  newFindIndex(nums, isNegative),
  nums.findIndex(isNegative),
  "newFindIndex(nums, isNegative)"
);

testOutputs(
  newFindIndex(nums, isPositive),
  nums.findIndex(isPositive),
  "newFindIndex(nums, isPositive)"
);

testOutputs(
  newFindIndex(nums, isAbove10),
  nums.findIndex(isAbove10),
  "newFindIndex(nums, isAbove10)"
);

testOutputs(
  newFindIndex(nums, isAbove678),
  nums.findIndex(isAbove678),
  "newFindIndex(nums, isAbove678)"
);
console.groupEnd();

console.group("newMap");
testOutputs(
  newMap(nums, isNegative),
  nums.map(isNegative),
  "newMap(nums, isNegative)"
);

testOutputs(newMap(nums, addTwo), nums.map(addTwo), "newMap(nums, addTwo)");
console.groupEnd();

console.group("newFilter");
testOutputs(
  newFilter(nums, isNegative),
  nums.filter(isNegative),
  "newFilter(nums, isNegative)"
);

testOutputs(
  newFilter(nums, isPositive),
  nums.filter(isPositive),
  "newFilter(nums, isPositive)"
);

testOutputs(
  newFilter(nums, isAbove10),
  nums.filter(isAbove10),
  "newFilter(nums, isAbove10)"
);

testOutputs(
  newFilter(nums, isAbove678),
  nums.filter(isAbove678),
  "newFilter(nums, isAbove678)"
);
console.groupEnd();

console.group("newIncludes");
testOutputs(
  newIncludes(nums, 30),
  nums.includes(30),
  "newIncludes(nums, 30)"
);
testOutputs(
  newIncludes(nums, 400),
  nums.includes(400),
  "newIncludes(nums, 400)"
);
console.groupEnd();

console.group("newConcat");
testOutputs(
  newConcat(nums, letters),
  nums.concat(letters),
  "newConcat(nums, letters)"
);

console.groupEnd();

console.group("newIndexOf");
testOutputs(
  newIndexOf(nums, 30),
  nums.indexOf(30),
  "newIndexOf(nums)"
);

testOutputs(
  newIndexOf(nums, 400),
  nums.indexOf(400),
  "newIndexOf(nums)"
);

console.groupEnd();

console.group("newJoin");
testOutputs(
  newJoin(nums, '-'),
  nums.join('-'),
  "newJoin(nums)"
);

testOutputs(
  newJoin(nums, ' '),
  nums.join(' '),
  "newJoin(nums)"
);

testOutputs(
  newJoin(nums, ','),
  nums.join(','),
  "newJoin(nums)"
);

console.groupEnd();

console.group("newSlice");
testOutputs(
  newSlice(nums, 0, 1),
  nums.slice(0, 1),
  "newslice(nums)"
);

console.groupEnd();

// Test helper function
function testOutputs(actual, expected, test = "") {
  const condition = JSON.stringify(actual) === JSON.stringify(expected);
  if (condition) {
    console.groupCollapsed(`%cTest ${test}: PASS`, "color:green");
  } else {
    console.groupCollapsed(`%cTest ${test}: FAIL`, "color: red");
  }
  console.log("Expected: ");
  console.log(expected);
  console.log("Actual: ");
  console.log(actual);
  console.groupEnd();
}
