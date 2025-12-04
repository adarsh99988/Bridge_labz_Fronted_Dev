
// q5.js - Simple image gallery with modal preview
const gallery = document.getElementById('gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

// create 6 placeholder images (using data URLs simple gradients)
for(let i=1;i<=6;i++){
  const img = document.createElement('img');
  img.src = `https://picsum.photos/seed/gip${i}/400/300`;
  img.alt = `Image ${i}`;
  img.dataset.index = i;
  gallery.appendChild(img);
}

// open modal
gallery.addEventListener('click', e=>{
  const img = e.target.closest('img');
  if(!img) return;
  modalImg.src = img.src.replace('/400/300','/800/600');
  modal.hidden = false;
});

// clicking outside modal-inner closes it
modal.addEventListener('click', ()=> modal.hidden = true);
// prevent closing when clicking inside the inner box
modal.querySelector('.modal-inner').addEventListener('click', e=> e.stopPropagation());
