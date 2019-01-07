function main(input) {
    let realHP1 = "";
    let realHP2 = "";
    let p = "";

    const baseHP1 = prompt("Nhập baseHP1: ");
    const wp1 = prompt("Nhập wp1");
    const baseHP2 = prompt("Nhập baseHP2: ");
    const wp2 = prompt("Nhập wp2: ");
    const ground = prompt("Nhập ground: ");

    // const baseHP1 = 612;
    // const wp1 = 3;
    // const baseHP2 = 800;
    // const wp2 = 1;
    // const ground = 800;

    if (baseHP1 < 99 || baseHP1 > 999) {
        alert("baseHP1 phải từ 99 đến 999");
        return
    }
    if (baseHP2 < 1 || baseHP2 > 888) {
        alert("baseHP1 phải từ 1 đến 888");
        return
    }
    /* Debug Error
        console.log(wp1,wp2)
        console.log([0,1,2,3].indexOf(Number(wp1)))
        console.log([0,1,2,3].indexOf(Number(wp2)))
    */
    if ([0, 1, 2, 3].indexOf(Number(wp1)) === -1 || [0, 1, 2, 3].indexOf(Number(wp2)) === -1) {
        alert("wp1 va wp2 là 1 trong các số 1,2,3,4");
        return
    }
    if (ground < 1 || ground > 999) {
        alert("ground phải từ 99 đến 999");
        return
    }
    if (wp1 == 1) {
        realHP1 = baseHP1;
    }
    if (wp2 == 1) {
        realHP2 = baseHP2;
    }
    if (wp1 == 0) {
        realHP1 = Math.trunc(baseHP1 / 10);
    }
    if (wp2 == 0) {
        realHP2 = Math.trunc(baseHP2 / 10);
    }
    if (wp1 == 2) {
        realHP1 = baseHP1;
    }
    if (wp2 == 2) {
        realHP2 = baseHP2;
    }

    //--------------- III: Đặc biệt, chiến đấu trên địa hình quen thuộc
    if (ground == baseHP1) {
        realHP1 *= 1.1;
    }
    if (ground == baseHP2) {
        realHP2 *= 1.1;
    }
    if (realHP1 > 999 && ground == baseHP1) {
        realHP1 = 999;
    }
    if (realHP2 > 999 && ground == baseHP2) {
        realHP2 = 999;
    }

    //--------------- IV: wpi = 2, trang bị được sử dụng là một áo giáp đặc biệt được làm từ Mithril
    if (wp1 == 2 && ground == baseHP1) {
        realHP1 *= 1.1
    }
    if (wp2 == 2 && ground == baseHP2) {
        realHP2 *= 1.1
    }
    if (wp1 == 2 && ground == baseHP1 && realHP1 > 999) {
        realHP1 = 999
    }

    if (wp2 == 2 && ground == baseHP2 && realHP2 > 999) {
        realHP2 = 999
    }

    if (wp1 == 2 && realHP1 < realHP2) {
        p = 0.50;
        console.log("Trận đấu hòa: " + p.toFixed(2))
        return p
    }

    if (wp2 == 2 && realHP2 < realHP1) {
        p = 0.50;
        console.log("Trận đấu hòa: " + p.toFixed(2))
        return p
    }

    //--------------- V: wpi = 3, vũ khí sử dụng là gươm Excalibur
    if (wp1 == 3) {
        realHP1 = baseHP1
        realHP1 *= 2 
    }

    if (wp1 == 3 && ground == baseHP1) {
        realHP1 *= 1.1 
    }

    if (wp1 == 3 && realHP1 > 999) {
        realHP1 = 999
    }

    // if (wp1 == 3 && ground ==baseHP1 && realHP1 > 999) {
    //     realHP1 = 999
    // }
    if (wp2 == 3) {
        realHP2 = baseHP2
    }

    if (wp2 == 3 && ground == baseHP2) {
        realHP2 *= 1.1
    }
    if (wp2 == 3 && realHP2 > 999) {
        realHP2 = 999
    }
    // if (wp2 == 3 && ground == baseHP2 && realHP2 > 999) {
    //     realHP2 = 999
    // }
    
    if (wp1 == 3 && wp2 == 2) {
        {
            if (ground == baseHP2 && realHP2 < realHP1) {
                realHP2 *= 1.1
            }else if(realHP2 < realHP1){
                realHP2 = baseHP2
            }
        }
    }

    //-------------------- VI: Arthur ra trận luôn luôn thắng bất chấp đối thủ
    if (baseHP1 == 999) {
        p = 1;
        console.log("Vua Arthur luôn luôn thắng. Output: " + p.toFixed(2))
        return p
    }

    //-------------------- VII: Cerdic ra trận
    if(baseHP2 == 888) {
        p = 0
        console.log("Vua Cerdic ra trận: " + p.toFixed(2))
        return p
    }

    if(baseHP2 == 888 && baseHP1 == 999) {
        p = 1
        console.log("Vua Cerdic ra trận: " + p.toFixed(2))
        return p
    }
    
    //-------------------- VIII: baseHPi là một số nguyên tố
    

    //-------------------- In giá trị
    console.log(realHP1, realHP2)
    p = (realHP1 - realHP2 + 999) / 2000;
    console.log("Khả năng chiến thắng của hiệp sĩ Bàn Tròn: " + p.toFixed(2))
}
main()


