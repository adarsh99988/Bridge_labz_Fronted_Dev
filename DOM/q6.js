
// q6.js - Real-time table filter (case-insensitive)
const students = [
  ['Alice','CSE','9.1'],
  ['Bob','ECE','8.3'],
  ['Charlie','ME','7.6'],
  ['Deepa','CSE','8.9'],
  ['Eve','EE','9.0']
];
const tbody = document.querySelector('#studentTable tbody');
const noResults = document.getElementById('noResults');
function renderRows(list){
  tbody.innerHTML = '';
  list.forEach(r=>{
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td>`;
    tbody.appendChild(tr);
  });
}
renderRows(students);

document.getElementById('searchBox').addEventListener('input', e=>{
  const q = e.target.value.trim().toLowerCase();
  if(!q){ renderRows(students); noResults.hidden = true; return; }
  const filtered = students.filter(r => r.some(c => String(c).toLowerCase().includes(q)));
  renderRows(filtered);
  noResults.hidden = filtered.length>0;
});
