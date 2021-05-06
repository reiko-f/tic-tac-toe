let counterPanel = document.getElementById('nums');
let counter = 0;

let panels = document.querySelectorAll('.grid-item');

// *todos*
// to fix repetitive parts
// to use switch
// to use 'tie' massage

for (let i=0; i<panels.length; i++) {
  panels[i].addEventListener('click', function() {
    counter += 1;
    counterPanel.innerHTML = counter;
    // let marks = panels[i].innerHTML;
    if (counter%2==0) {
      panels[i].innerHTML = 'X';
      panels[i].style.color = 'hotpink';
      // marks = 'X';
    } else if (counter%2==1) {
      panels[i].innerHTML = 'O';
      panels[i].style.color = 'turquoise';
      // marks = 'O';
    }

    function displayMessage() {
      let messageContainer = document.getElementById('message-container');
      let message = document.createElement('p');
      let winner = document.createTextNode('You won!');
      message.appendChild(winner);
      messageContainer.appendChild(message);
    }
    
    if (panels[0].innerHTML=='O' && panels[1].innerHTML=='O' && panels[2].innerHTML=='O') {
      displayMessage();

    } else if (panels[0].innerHTML=='X' && panels[1].innerHTML=='X' && panels[2].innerHTML=='X') {
      displayMessage();

    } else if (panels[3].innerHTML=='O' && panels[4].innerHTML=='O' && panels[5].innerHTML=='O') {      
      displayMessage();

    } else if (panels[3].innerHTML=='X' && panels[4].innerHTML=='X' && panels[5].innerHTML=='X') {      
      displayMessage();

    } else if (panels[6].innerHTML=='O' && panels[7].innerHTML=='O' && panels[8].innerHTML=='O') {      
      displayMessage();

    } else if (panels[6].innerHTML=='X' && panels[7].innerHTML=='X' && panels[8].innerHTML=='X') {      
      displayMessage();

    } else if (panels[0].innerHTML=='O' && panels[3].innerHTML=='O' && panels[6].innerHTML=='O') {
      displayMessage();

    } else if (panels[0].innerHTML=='X' && panels[3].innerHTML=='X' && panels[6].innerHTML=='X') {
      displayMessage();

    } else if (panels[1].innerHTML=='O' && panels[4].innerHTML=='O' && panels[7].innerHTML=='O') {      
      displayMessage();

    } else if (panels[1].innerHTML=='X' && panels[4].innerHTML=='X' && panels[7].innerHTML=='X') {      
      displayMessage();

    } else if (panels[2].innerHTML=='O' && panels[5].innerHTML=='O' && panels[8].innerHTML=='O') {      
      displayMessage();

    } else if (panels[2].innerHTML=='X' && panels[5].innerHTML=='X' && panels[8].innerHTML=='X') {      
      displayMessage();

    } else if (panels[0].innerHTML=='O' && panels[4].innerHTML=='O' && panels[8].innerHTML=='O') {      
      displayMessage();

    } else if (panels[0].innerHTML=='X' && panels[4].innerHTML=='X' && panels[8].innerHTML=='X') {      
      displayMessage();

    } else if (panels[2].innerHTML=='O' && panels[4].innerHTML=='O' && panels[6].innerHTML=='O') {      
      displayMessage();

    } else if (panels[2].innerHTML=='X' && panels[4].innerHTML=='X' && panels[6].innerHTML=='X') {      
      displayMessage();
    }
  });

  // let messageContainer = document.getElementById('message-container');
  // let message = document.createElement('p');
  // let winner = document.createTextNode('No winner this time.');
  // message.appendChild(winner);
  // messageContainer.appendChild(message);
}



