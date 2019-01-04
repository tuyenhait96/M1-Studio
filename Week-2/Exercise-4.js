const a = prompt("Nhập a: ");
const b = prompt("Nhập b: ");
const c = prompt("Nhập c: ");
if(a == "" && b == "" & c == ""){
    alert("Nhap lai")
}else if(a==0 && b==0){
    if( c==0 ){
        alert("PT VSN")
    }else if(c != 0){
        alert("PT VN")
    }
}
else if(a != 0 && b !=0){
    let delta = Math.pow(b,2) - 4*a*c;
    if(delta<0){
        alert("PT VN")
    }else if(delta==0){
        alert("PT có nghiệm kép: " + -b/(2*a))
    } else{
        alert("Phương trình có 2 nghiệm là: " + ((-b + Math.sqrt(delta))/2*a) + ", " + ((-b - Math.sqrt(delta))/2*a));
    }
}