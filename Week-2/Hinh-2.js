/*Đề bài:
        ***
        ***
        ***
*/
//----------------- Cach 1 -----------------
const n = prompt("Nhap n: ");
for(let i = 1; i <= n; i++){
    let a = "";
    for(let j= 1; j <= n; j++){
        a = a.concat("*");
    }
    console.log(a);
    console.log("\n");

}

//----------------- Cach 2 -----------------
const n = prompt("Nhap n: ");
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= n; j++){
        document.write("*")
    }
    document.write("<br>")

}