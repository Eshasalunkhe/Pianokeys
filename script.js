// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key',
              'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];

// Push key elements into the notes array
keys.forEach(function(key) {
  notes.push(document.getElementById(key));
});

// Functions to change color on key press and release
function keyPlay(event) {
  event.target.style.backgroundColor = 'plum';
}

function keyReturn(event) {
  event.target.style.backgroundColor = '';
}

// Assign key events
function assignKeyEvents(note) {
  note.onmousedown = keyPlay;
  note.onmouseup = keyReturn;
}

// Attach events to each key
notes.forEach(assignKeyEvents);

// Progress buttons
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// -END lyric element
let lastLyric = document.getElementById('column-optional');

// Hide all but the first button
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden = true;

// Event for nextOne
nextOne.onclick = function() {
  nextTwo.hidden = false;
  nextOne.hidden = true;

  // Update notes
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';
};

// Event for nextTwo
nextTwo.onclick = function() {
  nextThree.hidden = false;
  nextTwo.hidden = true;

  // Update lyrics
  document.getElementById('word-five').innerHTML = 'DEAR';
  document.getElementById('word-six').innerHTML = 'FRI-';

  // Show -END
  lastLyric.style.display = 'inline-block';

  // Update notes
  document.getElementById('letter-note-three').innerHTML = 'G';
  document.getElementById('letter-note-four').innerHTML = 'E';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('letter-note-six').innerHTML = 'B';
};

// Event for nextThree
nextThree.onclick = function() {
  startOver.hidden = false;
  nextThree.hidden = true;

  // Update lyrics
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('word-three').innerHTML = 'BIRTH';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('word-six').innerHTML = 'YOU!';

  // Update notes
  document.getElementById('letter-note-one').innerHTML = 'F';
  document.getElementById('letter-note-two').innerHTML = 'F';
  document.getElementById('letter-note-three').innerHTML = 'E';
  document.getElementById('letter-note-four').innerHTML = 'C';
  document.getElementById('letter-note-five').innerHTML = 'D';
  document.getElementById('letter-note-six').innerHTML = 'C';

  // Hide -END
  lastLyric.style.display = 'none';
};

// Event for startOver
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;

  // Reset lyrics
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
};

