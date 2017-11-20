let candidates = [
    { name: 'Wu Yuetian', likes: '700'},
    { name: 'Lin Junjie', likes: '135'},
    { name: 'Zhou Jielun', likes: '0'},
  ]

let num = candidates.length;
const table = document.getElementById('table');

// add original persons to list
for (i = 0; i < num; i++) {
  addToList(i);
}

// add person to list
function addToList(i) {
  table.insertRow();
  let j = 0;
  // insert Candidate Name
  table.rows[i].insertCell();
  table.rows[i].cells[j++].innerText = candidates[i].name;

  // insert Candidate Original Likes
  table.rows[i].insertCell();
  table.rows[i].cells[j++].innerText = candidates[i].likes;

  // insert Like button
  table.rows[i].insertCell();
  const fav = document.createElement("BUTTON");
  fav.textContent = "likes"; 
  const cell = table.rows[i].cells[1];
  fav.onclick = () => {cell.innerText = parseInt(cell.innerText) + 1};
  table.rows[i].cells[j++].appendChild(fav);

  // insert Delete Button
  table.rows[i].insertCell();
  const del = document.createElement("BUTTON");
  del.textContent = "Delete";
  const row = table.rows[i];
  del.onclick = () => {row.style.display = "none"};
  table.rows[i].cells[j++].appendChild(del);
}

// add new person to list
function add() {
  const input = document.getElementById('input').value;
  const person = { name: input, likes: '0' };
  candidates.push(person);
  // num wont sychronize by itself
  num = candidates.length;

  addToList(num - 1);
}