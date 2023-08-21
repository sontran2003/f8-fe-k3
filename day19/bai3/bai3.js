var arr = [
  ["a", 1, true],
  ["b", 2, false],
];

var result = [[], [], []];

var results = arr.forEach(function (subArray) {
  subArray.forEach(function (item) {
    // kiểm tra điều kiện
    if (typeof item === "string") {
      // khi đúng thêm phần tử vào cuối mảng
      result[0].push(item);
    } else if (typeof item === "number") {
      result[1].push(item);
    } else if (typeof item === "boolean") {
      result[2].push(item);
    }
  });
  return result;
});
result[0] = `["${result[0]}"]`;
result[1] = `[${result[1]}]`;
result[2] = `[${result[2]}]`;
console.log(`phần tử đã được tách trong mảng: [${result}]`);
