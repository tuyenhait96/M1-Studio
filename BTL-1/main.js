function main(input) {
    let realHP1 = ""; 
    let realHP2 = ""; 
    let p = "";

    const baseHP1 = prompt("Nhap baseHP1: ");
    const wp1 = prompt("Nhap wp1");
    const baseHP2 = prompt("Nhap baseHP2: ");
    const wp2 = prompt("Nhap wp2: ");
    const ground = prompt("Nhap ground: ");
    
    if (ground < 0 || ground > 1000 || ground == "") {
        alert("Thong tin sai, yeu cau nhap lai: ")
    }

    if (baseHP1 < 98 || baseHP1 > 1000 || baseHP1 == "") {
        alert("Thong tin sai, yeu cau nhap lai: ")

    }

    if (baseHP1 < 0 || baseHP1 > 889 || baseHP2 == "") {
        alert("Thong tin sai, yeu cau nhap lai: ")
    }

    if(wp1 == 1){
        realHP1 = baseHP1;
    }
    
    if(wp2 == 1){
        realHP2 = baseHP2;
    }
    if(wp1 == 0){
        realHP1 = Math.trunc(baseHP1/10);
    }

    if(wp2 == 0){
        realHP2 = Math.trunc(baseHP2/10);
    }
    if(ground != baseHP1 || ground != baseHP2){
        p = (realHP1 - realHP2 + 999) / 2000;
    }
    if(ground == baseHP1 || ground != baseHP2){
        p = (realHP1*1.1 - realHP2 + 999) / 2000;
    }
    if(ground != baseHP1 || ground == baseHP2){
        p = (realHP1 - realHP2*1.1 + 999) / 2000;
    }
    if(ground == baseHP1 || ground == baseHP2){
        p = (realHP1*1.1 - realHP2*1.1 + 999) / 2000;
    }
    console.log( "Ket qua: "+ p.toFixed(2))
}
main()

