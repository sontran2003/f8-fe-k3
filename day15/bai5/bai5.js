var a = 12,
  b = 1,
  c = 9;

if (a > b) {
  b = a - b;
  a = a - b;
  b = b + a;
}
if (a > c) {
  c = a - c;
  a = a - c;
  c = c + a;
}
if (b > c) {
  c = b - c;
  b = b - c;
  c = c + b;
}

console.log(`sắp xếp theo thứ tự: ${a} ${b} ${c}`);