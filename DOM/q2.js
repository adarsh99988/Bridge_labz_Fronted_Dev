
// q2.js - Live character counter with warning & prevention
const charArea = document.getElementById('charArea');
const charCounter = document.getElementById('charCounter');
const resetBtn = document.getElementById('resetBtn');
const MAX = 100;

function updateCounter(){
  const remaining = MAX - charArea.value.length;
  charCounter.textContent = remaining + ' characters remaining';
  charCounter.style.background = '';
  if(remaining <= 0){
    charCounter.style.background = 'rgba(255,0,0,0.15)';
  } else if(remaining <= 20){
    charCounter.style.background = 'rgba(255,255,0,0.2)';
  }
}

charArea.addEventListener('keydown', e=>{
  const remaining = MAX - charArea.value.length;
  // allow control keys
  if(remaining <= 0 && !['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){
    e.preventDefault();
    // optional small shake or feedback could be added here
  }
});

charArea.addEventListener('input', updateCounter);
resetBtn.addEventListener('click', ()=>{ charArea.value=''; updateCounter(); });
updateCounter();
