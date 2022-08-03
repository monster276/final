// Bài 1

let a = Number(prompt('Nhập số thứ 1'))
let b = Number(prompt("Nhập số thứ 2")) 
let SNT=[]
for (i = a; i <= b; i++) {
    let flag = true
    if (i < 2) {
        flag = false
    }
    else {
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
    }
    if (flag == true) {
        SNT.push(i)
        
    }
    
} 
alert("các số nguyên tố trong dãy là:   " + SNT)



