const printSegitiga = 5
if (typeof printSegitiga !== "number") {
    output = "Data harus number"
    console.log (output)
}
else {
    for (let i=printSegitiga; i>0; i--) {
        let hasil = ""
        for (let x=1; x<=i; x++) {
            hasil = hasil + x + " "
        }
        console.log (hasil)
    }
}