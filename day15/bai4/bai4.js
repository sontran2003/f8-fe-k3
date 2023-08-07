function hehe(a, b) {
    if(a > 0 && b > 0) {
        console.log('Bai 4:', a, b, "Cung dau +")
    }else if (a < 0 && b < 0) {
        console.log('Bai 4:', a, b, "Cung dau -")
    }else if (a == 0 && b == 0) {
        console.log('Bai 4:', a, b, "Cung bang 0")
    }else if(a != 0 && b != 0) {
        console.log('Bai 4:', a, b, "Khac dau")
    }else {
        console.log('Bai 4:', a, b, "Mot so bang 0, mot so khac 0 =)))")
    }   
}
hehe(1, -2)