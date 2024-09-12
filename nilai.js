const matematika = 90
const bahasaIndonesia = 90
const bahasaInggris = undefined
const ipa = undefined

const nilai = matematika + bahasaIndonesia + bahasaInggris + ipa
const rataRata = nilai / 4

if (matematika === undefined, bahasaIndonesia === undefined, bahasaInggris === undefined, ipa === undefined) {
    console.log("Semua nilai harus diisi")
} else {
    
    if (rataRata >= 90) {
        grade = "A"
    }
    else if (rataRata >= 80) {
        grade = "B"
    }
    else if (rataRata >= 70) {
        grade = "C"
    }
    else if (rataRata >= 60) {
        grade = "D"
    }
    else {
        grade = "E"
    }
    console.log ("Rata-rata = " + rataRata)
    console.log ("Grade = " + grade)
}

