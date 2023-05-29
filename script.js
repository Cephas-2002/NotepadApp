

function getNote() {
  if (localStorage.getItem('note')) {
    var note = localStorage.getItem('note');
  } else {
    var note = '1. I will not attend lectures.';
  }

  document.getElementById('note').innerHTML = note;
}

function saveNote(id) {
  var note = document.getElementById('note').innerHTML;
  localStorage.setItem('note', note);
  
}


function clearNote() {
  clear: localStorage.clear();
  return false;
}


var newYear = document.querySelector('.year');

function setYear() {
  now = new Date();

  newYear.innerHTML = now.getFullYear();
}

setYear();
