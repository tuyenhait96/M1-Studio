// /*Đề bài:
//         ***
//         **
//         *
// */
//----------------- Cach 1 -----------------
const n = prompt("Nhap n: ");
for(let i = n; i >= 1; i--){
    let a = "";
    for(let j=i; j>=1; j--){
        a = a.concat("*");
    }
    console.log(a);
    console.log("\n");

}

//---------------- Cach 2 -----------------
const n = prompt("Nhap n: ");
for(let i = n; i >= 1; i--){
    for(let j=i; j>=1; j--){
        document.write("*")
    }
    document.write("<br>")

}

//----------------- Cach 3 -----------------
let a = ""
const n = prompt("Nhap n")
for (let i = 0; i < n; i++) {
    a += "*"
}
for (let i = 0; i < n; i++) {
    console.log(a)
    console.log("\n")
    a = a.substr(0, a.length - 1)
}