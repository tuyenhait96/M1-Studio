function main(input) {
    let baseHP1 = input['baseHP1']; // Round hero HP
    let baseHP2 = input['baseHP2']; // Saxon hero HP
    let wp1 = input['wp1']; // Round hero Weapon
    let wp2 = input['wp2']; // Saxon hero Weapon
    let ground = input['ground'];
    let realHP1 = getRealHP(baseHP1, getRealHPWithNoGround(wp1, baseHP1), ground);
    let realHP2 = getRealHP(baseHP2, getRealHPWithNoGround(wp2, baseHP2), ground);

    if (validateInput(98, 1000, baseHP1, 'baseHP1') && validateInput(-1, 4, wp1, 'wp1') && validateInput(0, 889, baseHP2, 'baseHP2') && validateInput(-1, 4, wp2, 'wp2') && validateInput(0, 1000, ground, 'ground')) {
        console.log(getResult(baseHP1, baseHP2, wp1, wp2, realHP1, realHP2));
    } else {
        console.error('Data is invalid');
    }
}

function validateInput(min, max, currentValue, fieldName) {
    if (currentValue < min) {
        console.error(`This ${fieldName} must be bigger than ${min}`);
        return false;
    } else if (currentValue > max) {
        console.error(`This ${fieldName} must be smaller than ${max}`);
        return false
    }
    return true;
}

function getRealHPWithNoGround(wp, baseHP) {
    if (wp === 0) {
        return Math.trunc(baseHP / 10);
    }
    return baseHP;
}

function getRealHP(baseHP, currentHP, ground) {
    if (baseHP === ground) {
        const newHP = currentHP + currentHP / 100 * 10;
        return newHP > 999 ? 999 : newHP.toFixed(2);
    }
    return currentHP.toFixed(2);
}

function getPR(realHP1, realHP2) {
    return (realHP1 - realHP2 + 999) / 2000;
}

function isPrimeNumber(value) {
    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value !== 1 && value !== 0;
}

function getResult(baseHP1, baseHP2, wp1, wp2, realHP1, realHP2) {
    let _realHP1 = realHP1;
    if (wp1 === 2 || wp2 === 2) {
        if (wp1 === 2) {
            if (realHP1 < realHP2) {
                return 0.5;
            }
        } else if (wp2 === 2) {
            if (realHP2 < realHP1 && wp1 !== 3) {
                return 0.50;
            }
        }
    }
    if (wp1 === 3 || wp2 === 3) {
        if (wp1 === 3) {
            _realHP1 = realHP1 * 2 > 999 ? 999 : realHP1 * 2;
        }
    }
    console.log(baseHP1, baseHP2, _realHP1, realHP2);
    return getResultBaseHP(baseHP1, baseHP2, _realHP1, realHP2).toFixed(2);
}

function getResultBaseHP(baseHP1, baseHP2, realHP1, realHP2) {
    if (baseHP1 === 999) {
        return 1.00;
    } else if (baseHP2 === 888) {
        return 0.00;
    } else if (isPrimeNumber(baseHP1) || isPrimeNumber(baseHP2)) {
        if (isPrimeNumber(baseHP1)) {
            return 0.99;
        } else if (isPrimeNumber(baseHP2)) {
            return 0.01;
        } else {
            if (baseHP1 < baseHP2) {
                return 0.01;
            } else if (baseHP1 > baseHP2) {
                return 0.99;
            } else {
                return 0.50;
            }
        }
    } else {
        return getPR(realHP1, realHP2);
    }
}

function input() {
    const obj = {};
    obj.baseHP1 = Number(prompt("Enter baseHP1: "));
    obj.wp1 = Number(prompt("Enter wp1: "));
    obj.baseHP2 = Number(prompt("Enter baseHP2: "));
    obj.wp2 = Number(prompt("Enter wp2: "));
    obj.ground = Number(prompt("Enter ground: "));
    return obj;
}

main(input());
