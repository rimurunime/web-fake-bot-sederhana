const soal = document.getElementById('soal');
const jawaban = document.getElementById('jawaban');
const loading = document.getElementById('loading');
const container = document.getElementsByClassName('container');

let init = 0;


const botSay = (data) => {
    return [
        "saya fake bot. siapa namamu?",
        `halo ${data?.nama}. berapa usiamu sekarang?`,
        `oh umurmu ${data?.umur}. apa hobimu?`,
        `aku juga hobi ${data?.hobi}, udah dulu ya...`
    ];
}

soal.innerHTML = botSay()[0];

let userData = []

function botStart() {
    if(jawaban.value.length < 1) return alert("kolom wajib di isi")
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value });
    } else if (init === 2) {
        botDelay({ umur: jawaban.value });
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value });
    } else if (init === 4) {
        setTimeout(() => finishing(), 1300);
    } else {
        setTimeout(() => botEnd(), 1300);
    }
}


function botDelay(iniJawaban) {
    loading.style.display = "block"
    container[0].style.filter = "blur(1px)"
    setTimeout(() => {
        soal.innerHTML = botSay(iniJawaban)[init];
        loading.style.display = "none"
        container[0].style.filter = "none"
    }, 2000)
    
    userData.push(jawaban.value);
    jawaban.value = ""
}

function finishing() {
    soal.innerHTML = `Thank u ${userData[0]} sudah berkunjung ke fakebot, lain kali kita ${userData[2]} bareng ya!`;
    jawaban.value = "oke"
}

function botEnd() {
    alert(`terimakasih sudah berkunjung anda akan diarahkan kehalaman utama`);
    window.location.reload()
}