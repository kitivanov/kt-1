function generateTable() {
  var numbers = [];
  for (var i = 0; i < 30; i++) {
    numbers.push(Math.floor(Math.random() * 99));
  }

  var table = document.getElementById('numberTable');
  table.innerHTML = '';

  for (var i = 0; i < 5; i++) {
    var row = table.insertRow();
    for (var j = 0; j < 6; j++) {
      var cell = row.insertCell();
      var index = i * 6 + j;
      cell.textContent = numbers[index];
      if (numbers[index] >= 50) {
        cell.classList.add('orange');
      }
    }
  }
}

var index = 0;

function addNumber() {
  var randomNumber = Math.floor(Math.random() * 99);
  var table = document.getElementById('numberTable');

  var cell = table.getElementsByTagName('td')[index];
  if (index < 29) {
    cell.textContent = randomNumber;
    index += 1;
  } else {
    cell.textContent = randomNumber;
    index = 0;
  }

  if (randomNumber >= 50) {
    cell.classList.add('orange');
  } else {
    cell.classList.remove('orange');
  }
}
