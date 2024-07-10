//result
function replication1() {
    let input_dna = document.getElementById("DNA").value.toUpperCase()
    let show = ""
    let rna = ""
    let a = document.getElementById('a').value
    let b = document.getElementById('b').value

    if (input_dna == "") {
        return alert("โปรดใส่ DNA / RNA")
    }

    if (a == "" || b == "") {
        return alert("โปรดใส่ทิศทาง")
    }

    if (a != 3 && b != 3) {
        return alert("ทิศทางผิด")
    }
    else if (a != 5 && b != 5) {
        return alert("ทิศทางผิด")
    }
    else if (a == b) {
        return alert("ทิศทางผิด")
    }

    if (document.getElementById("type_1").checked == true) {
        if (a == 5) {
            input_dna = input_dna.split('').reverse().join('')
        }
        ans = dna1(input_dna)
        rna = rna1(input_dna)
        amino = find_amino(rna)

        show += "<p>DNA Template : 3'  " + input_dna + "  5'</p>"
        show += "<p>DNA Non-Template : 5'  " + ans + "  3'</p>"
        show += "<p>mRNA : 5'  " + rna + "  3'</p>"
        show += "<p>" + amino + "</p>"
    }

    else if (document.getElementById("type_2").checked == true) {
        if (a == 3) {
            input_dna = input_dna.split('').reverse().join('')
        }
        ans = dna1(input_dna)
        rna = rna1(ans)
        amino = find_amino(rna)
        
        show += "<p>DNA Template : 3'  " + ans + "  5'</p>"
        show += "<p>DNA Non-Template : 5'  " + input_dna + "  3'</p>"
        show += "<p>mRNA : 5'  " + rna + "  3'</p>"
        show += "<p>" + amino + "</p>"
    }

    else if (document.getElementById("type_3").checked == true) {
        if (a == 3) {
            input_dna = input_dna.split('').reverse().join('')
        }
        ans = rna2(input_dna)
        dna_non = dna1(ans)
        amino = find_amino(input_dna)

        show += "<p>DNA Template : 3'  " + ans + "  5'</p>"
        show += "<p>DNA Non-Template : 5'  " + dna_non + "  3'</p>"
        show += "<p>mRNA : 5'  " + input_dna + "  3'</p>"
        show += "<p>" + amino + "</p>"
    }
    else {
        alert('เลือกประเภทสาย Polynuecleotile')
    }

    document.getElementById('show_ans').innerHTML = (show)
    
}

document.getElementById("dna_rep").addEventListener('click', replication1)

//dna to dna
function dna1(input_dna) {
    let dna = ""
    for (let i = 0; i < input_dna.length; i++) {
        if (input_dna[i] == "A") {
            dna += "T"
        }
        else if (input_dna[i] == "T") {
            dna += "A"
        }
        else if (input_dna[i] == "C") {
            dna += "G"
        }
        else if (input_dna[i] == "G") {
            dna += "C"
        }
        else if (input_dna[i] == "U") {
            alert("ใน DNA ไม่มีเบส U")
            window.stop();
            break
        }
        else {
            alert("มีบางอย่างผิดปกติ")
            window.stop();
            break
        }
    }
    return dna
}

//rna to dna
function rna2(input_dna) {
    let dna = ""
    for (let i = 0; i < input_dna.length; i++) {
        if (input_dna[i] == "A") {
            dna += "T"
        }
        else if (input_dna[i] == "T") {
            alert("ใน RNA ไม่มีเบส T")
        }
        else if (input_dna[i] == "C") {
            dna += "G"
        }
        else if (input_dna[i] == "G") {
            dna += "C"
        }
        else if (input_dna[i] == "U") {
            dna += "A"
        }
        else {
            alert("มีบางอย่างผิดปกติ")
            window.stop();
            break
        }
    }
    return dna
}

//dna to rna
function rna1(input_dna) {
    rna = ""
    for (let i = 0; i < input_dna.length; i++) {
        if (input_dna[i] == "A") {
            rna += "U"
        }
        else if (input_dna[i] == "T") {
            rna += "A"
        }
        else if (input_dna[i] == "C") {
            rna += "G"
        }
        else if (input_dna[i] == "G") {
            rna += "C"
        }
        else {
            rna = "มีบางอย่างผิดปกติ"
            break
        }
    }
    return rna
}

//Amino
function find_amino(mRna) {
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

    let count = 0
    let codon = ""
    let b = -1
    let ans = ""

    for (let i = 0; i < mRna.length; i++) {
        if (mRna[i] === "A"  && mRna[i + 1] === "U" && mRna[i + 2] === "G") {
            b = i;
            break;
        }
    }

    if (b === -1) {
        ans = "ไม่มี start codon"
    } else {
        for (let j = b; j < mRna.length; j++) {
            codon += mRna[j]
            count++
            if (count === 3) {
                if (!["UAA", "UAG", "UGA"].includes(codon)) {
                    ans += `<p>|  ${codon}: ${codon_to_amino_acid[codon]}  |</p>`
                    count = 0
                    codon = ""
                } else {
                    ans += `<p>|  ${codon}: ${codon_to_amino_acid[codon]}  |</p>`
                    break
                }
            }
        }
    }
    return ans
}


function check(p) {
    if(p==1){
    document.getElementById("type_1").checked = true;
    }
    if(p==2){
    document.getElementById("type_2").checked = true;
    }
    if(p==3){
        document.getElementById("type_3").checked = true;
        }
}

function reset() {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
            radioButtons.forEach(radio => {
                radio.checked = false;
            });
    document.getElementById('a').value = ''
    document.getElementById('b').value = ''
    document.getElementById('DNA').value = ''
    document.getElementById('show_ans').innerHTML = ('แสดงคำตอบที่นี่')
}
