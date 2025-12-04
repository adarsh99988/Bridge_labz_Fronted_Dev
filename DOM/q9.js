
// q9.js - Form submit blocker with live validation & preventDefault()
const form = document.getElementById('blockForm');
const fName = document.getElementById('fName');
const fEmail = document.getElementById('fEmail');
const fPass = document.getElementById('fPass');
const fNameErr = document.getElementById('fNameErr');
const fEmailErr = document.getElementById('fEmailErr');
const fPassErr = document.getElementById('fPassErr');
const formMsg = document.getElementById('formMsg');

function validateAll(){
  let ok = true;
  fNameErr.textContent = ''; fEmailErr.textContent=''; fPassErr.textContent='';
  if(!fName.value.trim()){ fNameErr.textContent='Name required'; ok=false; }
  if(!fEmail.value.includes('@')){ fEmailErr.textContent='Valid email required'; ok=false; }
  if(fPass.value.length < 6){ fPassErr.textContent='Password must be 6+ chars'; ok=false; }
  return ok;
}

form.addEventListener('submit', e=>{
  e.preventDefault();
  formMsg.hidden = true;
  if(!validateAll()) return;
  formMsg.hidden = false;
  formMsg.textContent = 'Form Submitted Successfully';
  form.reset();
});

// live validation: hide error when user corrects input
[fName, fEmail, fPass].forEach(input=>{
  input.addEventListener('input', ()=>{ validateAll(); });
});
