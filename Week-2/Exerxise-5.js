const n = prompt("Nhap n: ");
let nString = n.toString();
let nReverse = nString.split("").reverse().join("");
console.log("Chuỗi sau khi đổi: " + nReverse);