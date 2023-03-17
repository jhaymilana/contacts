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
  let contactName = document.createElement('p');
  let contactCity = document.createElement('p');
  let contactEmail = document.createElement('p');

  newContact.className = `contact-info`;
  contactName.innerHTML = 'Name:';
  contactCity.innerHTML = 'City:';
  contactEmail.innerHTML = 'Email:';
  storage.appendChild(newContact);
  newContact.appendChild(contactName);
  newContact.appendChild(contactCity);
  newContact.appendChild(contactEmail);
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

