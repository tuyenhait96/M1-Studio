/*Đề bài:
        *
        **
        ***
Vòng lặp:
i: row: chỉ dòng
j: col: chỉ cột, ngang 
Chạy i = 1,
	j chạy j = 1; j <= i (j=1 <= i=1)(thỏa điều kiện)
	       j = 2; 2 <= 1 : sai => thoát
Chạy i = 2
	j = 1, 
	  1 <= 2,
	j = 2
	  2 <= 2	   
Chạy i = 5
Mỗi vòng lặp i sẽ là xuống dòng, console.log() */

//---------------- Cach 1 ----------------
const n = prompt("Nhap n: ")
for(let i = 1; i <= n; i++){
  let a = ""
  for(let j = 1; j <=i; j++){
    a = a.concat("*")
  }
  console.log(a);
  console.log("\n")
}

//---------------- Cach 2 ----------------
const n = prompt("Nhap n:");
for(let i = 1; i <= n; i++){
    for(let j = 1; j<=i; j++){
        document.write("*")
    }
    document.write("<br>");
}

//---------------- Cach 3 ----------------
const n = prompt("Nhap n:");
let a = ""
for(let i = 0; i < n; i++){
    a+="*"
    console.log(a)
    console.log("\n")
}

