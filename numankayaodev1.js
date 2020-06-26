const boyut = 20;
let square = "";

for (let i = 0; i < boyut; i++) {
  for (let j = 0; j < 2 * (boyut - i - 1); j++) square += " ";
  for (let k = 0; k < 2 * i; k++) square += "-";
  for (let m = boyut + 2 * i; m > boyut; m--) square += "\\";
  square += "\n";
}

for (let i = 0; i < boyut; i++) {
  for (let j = 0; j < 2 * i; j++) square += " ";
  for (let k = 0; k < 2 * (boyut - i - 1); k++) square += "*";
  for (let n = 0; n < 2 * (boyut - i - 1); n++) square += "/";
  square += "\n";
}

console.log(square);
