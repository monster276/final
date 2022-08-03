// Bài 2
function numberOneTriangle() {
    let N = prompt('Nhap gia tri số nguyên N')
    N = Number(N)
    for (i = 0; i < N; i++) {
        for (j = 0; j <= i; j++) {
            document.writeln(" * ")
        }
        document.writeln("<br/>")
    }
}
numberOneTriangle()