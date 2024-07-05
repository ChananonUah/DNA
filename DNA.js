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
            ans += "A"
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

//Amino
function find_amino() {
    const codon_to_amino_acid = {
        'UUU': 'Phenylalanine', 'UUC': 'Phenylalanine',
        'UUA': 'Leucine', 'UUG': 'Leucine',
        'CUU': 'Leucine', 'CUC': 'Leucine', 'CUA': 'Leucine', 'CUG': 'Leucine',
        'AUU': 'Isoleucine', 'AUC': 'Isoleucine', 'AUA': 'Isoleucine',
        'AUG': 'Methionine',  // start codon
        'GUU': 'Valine', 'GUC': 'Valine', 'GUA': 'Valine', 'GUG': 'Valine',
        'UCU': 'Serine', 'UCC': 'Serine', 'UCA': 'Serine', 'UCG': 'Serine',
        'CCU': 'Proline', 'CCC': 'Proline', 'CCA': 'Proline', 'CCG': 'Proline',
        'ACU': 'Threonine', 'ACC': 'Threonine', 'ACA': 'Threonine', 'ACG': 'Threonine',
        'GCU': 'Alanine', 'GCC': 'Alanine', 'GCA': 'Alanine', 'GCG': 'Alanine',
        'UAU': 'Tyrosine', 'UAC': 'Tyrosine',
        'UAA': 'Stop', 'UAG': 'Stop',
        'CAU': 'Histidine', 'CAC': 'Histidine',
        'CAA': 'Glutamine', 'CAG': 'Glutamine',
        'AAU': 'Asparagine', 'AAC': 'Asparagine',
        'AAA': 'Lysine', 'AAG': 'Lysine',
        'GAU': 'Aspartic acid', 'GAC': 'Aspartic acid',
        'GAA': 'Glutamic acid', 'GAG': 'Glutamic acid',
        'UGU': 'Cysteine', 'UGC': 'Cysteine',
        'UGA': 'Stop',
        'UGG': 'Tryptophan',
        'CGU': 'Arginine', 'CGC': 'Arginine', 'CGA': 'Arginine', 'CGG': 'Arginine',
        'AGU': 'Serine', 'AGC': 'Serine',
        'AGA': 'Arginine', 'AGG': 'Arginine',
        'GGU': 'Glycine', 'GGC': 'Glycine', 'GGA': 'Glycine', 'GGG': 'Glycine'
    }


    let mRna = document.getElementById("DNA").value
    let count = 0
    let codon = ""
    let b = -1
    let ans = ""

    if (document.getElementById('a').value == 3) {
        mRna = mRna.split('').reverse().join('')
    }

    for (let i = 0; i < mRna.length; i++) {
        if (mRna[i] === "A" && mRna[i + 1] === "U" && mRna[i + 2] === "G") {
            b = i;
            break;
        }
    }

    if (b === -1) {
        console.log("ไม่มี start codon")
    } else {
        for (let j = b; j < mRna.length; j++) {
            codon += mRna[j]
            count++
            if (count === 3) {
                if (!["UAA", "UAG", "UGA"].includes(codon)) {
                    ans += ` |  ${codon}: ${codon_to_amino_acid[codon]}  | `
                    count = 0
                    codon = ""
                } else {
                    ans += ` |  ${codon}: ${codon_to_amino_acid[codon]}  | `
                    break
                }
            }
        }
    }
    document.getElementById('show_ans').innerHTML = (ans)
}

document.getElementById("find_amino").addEventListener('click', find_amino)
