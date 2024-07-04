//DNA
function replication1() {
    let input_dna = document.getElementById("DNA").value
    let ans = ""

    for (let i = 0; i < input_dna.length; i++) {
        if (input_dna[i] == "A") {
            ans += "T"
        }
        else if (input_dna[i] == "T") {
            ans += "A"
        }
        else if (input_dna[i] == "C") {
            ans += "G"
        }
        else if (input_dna[i] == "G") {
            ans += "C"
        }
        else if (input_dna[i] == "U") {
            ans = "เบส U อยู่ใน mRNA"
            break
        }
        else {
            ans = "มีบางอย่างผิดปกติ"
            break
        }
    }
    console.log(ans)
    if (document.getElementById('a').value == 3) {
        ans = "DNA สังเคราะห์ : 5'  " + ans + "  3'"
    }
    else if (document.getElementById('a').value == 5){
        ans = "DNA แม่แบบ : 3'  " + ans + "  5'"
    }

    document.getElementById('show_ans').innerHTML = (ans)
}

document.getElementById("dna_rep").addEventListener('click', replication1)


// RNA
function replication2() {
    let input_dna = document.getElementById("DNA").value
    let ans = ""
    
    if (document.getElementById('a').value == 5) {
        input_dna = input_dna.split('').reverse().join('')
    }
    
    for (let i = 0; i < input_dna.length; i++) {
        if (input_dna[i] == "A") {
            ans += "U"
        }
        else if (input_dna[i] == "T") {
            ans += "A"
        }
        else if (input_dna[i] == "C") {
            ans += "G"
        }
        else if (input_dna[i] == "G") {
            ans += "C"
        }
        else {
            ans = "มีบางอย่างผิดปกติ"
            break
        }
    }

    document.getElementById('show_ans').innerHTML = ("mRNA ที่ได้ : 5'  " + ans + "  3'")
}

document.getElementById("rna_rep").addEventListener('click', replication2)
