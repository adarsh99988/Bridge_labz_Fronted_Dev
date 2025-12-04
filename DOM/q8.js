
// q8.js - Custom dropdown using capturing phase for outside click
const dropBtn = document.getElementById('dropBtn');
const dropList = document.getElementById('dropList');
const dropdown = document.getElementById('customDropdown');

dropBtn.addEventListener('click', ()=> dropList.hidden = !dropList.hidden);

// option click updates button text
dropList.addEventListener('click', e=>{
  const li = e.target.closest('li');
  if(!li) return;
  dropBtn.textContent = li.textContent;
  dropList.hidden = true;
});

// capturing phase listener on document to close when clicking outside
document.addEventListener('click', e=>{
  if(!dropdown.contains(e.target)) dropList.hidden = true;
}, true);
