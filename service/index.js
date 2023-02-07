import * as math from './matematikaDasar.js';
import RuleMessage from '../dbMessage/message.js'
let listPilihan = "";

const buttom = document.getElementById('kirim')
const header = document.getElementById('header')
const listTam = document.getElementById('tambah')
const listKur = document.getElementById('kurang')
const listKal = document.getElementById('kali')
const listBag = document.getElementById('bagi')

listTam.addEventListener("click", () => {
  if(listPilihan === "tambah" || listPilihan === "Tambah") {
    speakBot("Kamu sudah memilih tambah")
  } else {
    listPilihan = "tambah"
    header.innerHTML = "Tambah"
    speakBot('kamu memilih tambah')
    setTimeout(() => {
      speakBot(RuleMessage.tambah())
    }, 5);
  }
  
})
listKur.addEventListener("click", () => {
  if(listPilihan === "kurang" || listPilihan === "Kurang") {
    speakBot('kamu sudah memilih kurang')
  } else {
    listPilihan = "kurang"
    header.innerHTML = "Kurang"
    speakBot('Kamu memilih kurang')
    setTimeout(() => {
      speakBot(RuleMessage.kurang())
    }, 50);
  }
})
listKal.addEventListener("click", () => {
  if(listPilihan === "kali" || listPilihan === "Kali") {
    speakBot('kamu sudah memilih kali')
  } else {
    listPilihan = "kali"
    header.innerHTML = "Kali"
    speakBot('Kamu memilih kali')
    setTimeout(() => {
      speakBot(RuleMessage.kali())
    }, 10);
  }
})
listBag.addEventListener("click", () => {
  if(listPilihan === "bagi" || listPilihan === "Bagi") {
    speakBot('kamu sudah memilih bagi')
  } else {
    listPilihan = "bagi"
    header.innerHTML = "Bagi"
    speakBot('Kamu memilih bagi')
    setTimeout(() => {
      speakBot(RuleMessage.bagi())
    }, 50);
  }
})

function tambah() {
  const boxInput1 = Number(document.getElementById('value').value);
  const boxInput2 = Number(document.getElementById('value2').value);
  const answerArea = document.getElementById('text-ans')
  console.log(boxInput1);
  const finalAnswer = math.tambah(boxInput1, boxInput2);
  speakBot(`${boxInput1} ditambah ${boxInput2} adalah ${finalAnswer}`)
  answerArea.innerHTML = finalAnswer
}

function kurang() {
  const boxInput1 = Number(document.getElementById('value').value);
  const boxInput2 = Number(document.getElementById('value2').value);
  const answerArea = document.getElementById('text-ans')
  console.log(boxInput1);
  const finalAnswer = math.kurang(boxInput1, boxInput2);
  speakBot(`${boxInput1} dikurang ${boxInput2} adalah ${finalAnswer}`)
  answerArea.innerHTML = finalAnswer
}

function kali() {
  const boxInput1 = Number(document.getElementById('value').value);
  const boxInput2 = Number(document.getElementById('value2').value);
  const answerArea = document.getElementById('text-ans')
  console.log(boxInput1);
  const finalAnswer = math.kali(boxInput1, boxInput2);
  speakBot(`${boxInput1} dikali ${boxInput2} adalah ${finalAnswer}`)
  answerArea.innerHTML = finalAnswer
}

function bagi() {
  const boxInput1 = Number(document.getElementById('value').value);
  const boxInput2 = Number(document.getElementById('value2').value);
  const answerArea = document.getElementById('text-ans')
  console.log(boxInput1);
  const finalAnswer = math.bagi(boxInput1, boxInput2);
  
  speakBot(`${boxInput1} dibagi ${boxInput2} adalah ${finalAnswer}`)
  answerArea.innerHTML = finalAnswer
}

buttom.addEventListener("click", () =>{
  switch(listPilihan) {
    case "tambah":
      tambah();
      break;
    case "kurang":
      kurang();
      break;
    case "kali":
      kali();
      break;
    case "bagi":
      bagi();
      break;
    default:
      //alert("silahkan pilih list dibawah");
      speakBot("Silahkan pilih list dibawah")
      break;
  }
})

function speakBot(message) {
  const test = new SpeechSynthesisUtterance(message)
  window.speechSynthesis.speak(test)
}