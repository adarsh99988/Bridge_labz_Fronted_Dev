
// q3.js - Multi-step form with validation
const steps = Array.from(document.querySelectorAll('.step'));
let idx = 0;
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');
const summary = document.getElementById('summary');

function showStep(i){
  steps.forEach((s,si)=> s.hidden = si !== i);
  backBtn.disabled = i===0;
  nextBtn.textContent = i === steps.length-1 ? 'Finish' : 'Next';
}

function validateStep(i){
  const step = steps[i];
  const input = step.querySelector('input');
  const err = step.querySelector('.error');
  err.textContent = '';
  if(!input.value.trim()){
    err.textContent = 'This field is required';
    return false;
  }
  if(i===1 && !input.value.includes('@')){ err.textContent='Invalid email'; return false; }
  if(i===2 && input.value.length < 6){ err.textContent='Password must be 6+ chars'; return false; }
  return true;
}

nextBtn.addEventListener('click', ()=>{
  if(!validateStep(idx)) return;
  if(idx < steps.length-1){ idx++; showStep(idx); return; }
  // finish: show summary
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const pass = document.getElementById('passInput').value;
  summary.hidden = false;
  summary.innerHTML = `<h3>Summary</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Password:</strong> ${'*'.repeat(Math.min(10, pass.length))}</p>`;
});

backBtn.addEventListener('click', ()=>{ if(idx>0){ idx--; showStep(idx); } });
showStep(0);
