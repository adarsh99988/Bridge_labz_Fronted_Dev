
// q4.js - Theme switcher using setAttribute to add data-theme on body
const themeBtns = document.querySelectorAll('.themeBtn');
themeBtns.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const t = btn.getAttribute('data-theme');
    document.body.setAttribute('data-theme', t);
  });
});
// optional: initialize from body attribute if present
