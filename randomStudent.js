var students = [
  'Ahmet Koylan',
  'Alexander Lovell',
  'Anastasia Fefilova',
  'Barry Williams',
  'Bo Jiang',
  'Chris Stento',
  'David Cheng',
  'Emma Morales',
  'Enoch Wu',
  'Gina Assar',
  'James Brashear',
  'James Markotic',
  'Karen Song',
  'Pavel Gerasimenko',
  'Renato Farias',
  'ROBERT SALA',
  'Shivram Jayakumar',
  'Valeriya Romashchenko',
  'Vishwanath Ramachandran',
  'William Aspelin'
]

function randomNum() { return Math.floor(Math.random() * students.length) }

var studentName = document.querySelector("#displayRandomStudent")

var generateButton = document.querySelector("#generate")

generateButton.addEventListener("click", function(e) {
  studentName.innerHTML = students[randomNum()]
})