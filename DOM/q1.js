
// q1.js - Dynamic Product List Manager using event delegation
const productInput = document.getElementById('productInput');
const productList = document.getElementById('productList');

// helper: create list item with edit & delete buttons
function createProductItem(text){
  const li = document.createElement('li');
  li.tabIndex = 0;
  li.innerHTML = `<span class="label">${escapeHtml(text)}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>`;
  return li;
}

function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

// add on Enter
productInput.addEventListener('keydown', e => {
  if(e.key === 'Enter'){
    const v = productInput.value.trim();
    if(!v) return;
    productList.appendChild(createProductItem(v));
    productInput.value = '';
  }
});

// event delegation for edit/delete and inline save
productList.addEventListener('click', e => {
  const li = e.target.closest('li');
  if(!li) return;
  if(e.target.classList.contains('delete')){
    li.remove();
    return;
  }
  if(e.target.classList.contains('edit')){
    enterEditMode(li);
  }
});

// click outside input saves edit: use document listener when editing
let currentlyEditing = null;
function enterEditMode(li){
  if(currentlyEditing) commitEdit(currentlyEditing);
  currentlyEditing = li;
  const span = li.querySelector('.label');
  const currentText = span.textContent;
  const input = document.createElement('input');
  input.value = currentText;
  input.className = 'edit-input';
  span.replaceWith(input);
  input.focus();
  // save on Enter or blur
  input.addEventListener('keydown', (ev)=>{
    if(ev.key === 'Enter') commitEdit(li);
  });
  // clicking outside: we listen on document once
  setTimeout(()=>{ // allow current event stack to finish
    const outside = (ev)=>{ if(!li.contains(ev.target)) commitEdit(li); };
    document.addEventListener('click', outside, {once:true});
  },0);
}

function commitEdit(li){
  if(!li) return;
  const input = li.querySelector('.edit-input');
  if(!input) return;
  const text = input.value.trim() || 'Untitled';
  const span = document.createElement('span');
  span.className = 'label';
  span.textContent = text;
  input.replaceWith(span);
  currentlyEditing = null;
}
