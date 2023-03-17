/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Assignment 3
Jayvee Milana

Contacts 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

let storage = document.querySelector('.contact-storage');
let add = document.querySelector('.add');
let output = document.querySelector('.output p');

function createContact() {
  let newContact = document.createElement('div');

  newContact.className = `contact-info`;
  storage.appendChild(newContact);
}

add.addEventListener('click', function() {
  if (storage.childElementCount <= 19) {
    createContact();
    output.innerHTML = 'Contact saved.'
//  unitArray.push(``);
  } else {
    output.innerHTML = 'Please delete 1 contact.'
  }
});

