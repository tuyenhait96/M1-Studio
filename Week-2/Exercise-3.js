let x = prompt("Nhập số KWh: ");
let thanhTien = "";
if(isNaN(x) || x == "" || x <= 0){
    alert("Nhap lai")
}
else if(x < 50){
    thanhTien = 2.000 * 50;
    // console.log("Tiền điện: " + thanhTien)
}else if(x > 50 && x <= 100){
    thanhTien = 2.000 * 50 + (x-50) * 1.800;
    // console.log("Tiền điện: " + thanhTien)
}else if(x > 100 && x <= 200){
    thanhTien = 2.000 * 50 + 50 * 1.800 + (x-100) * 1.500
}else if(x>200) {
    thanhTien = 2.000 * 50 + 50 * 1.800 + 100 * 1.500 + (x-200)* 1.400 
}
alert(thanhTien.toFixed(3));


