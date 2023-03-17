/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

Assignment 3
Jayvee Milana

Contacts 

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - */

'use strict';

let storage = document.querySelector('.contact-storage');
let input = document.querySelector('.contact-input');
let add = document.querySelector('.add');
let output = document.querySelector('.output p');

function createContact() {
  let newContact = document.createElement('div');
  let contactName = document.createElement('p');
  let contactCity = document.createElement('p');
  let contactEmail = document.createElement('p');
  let inputArr = input.value.split(',');

  newContact.className = `contact-info`;
  
  contactName.innerHTML = `Name: ${inputArr[0]}`;
  contactCity.innerHTML = `City: ${inputArr[1]}`;
  contactEmail.innerHTML = `Email: ${inputArr[2]}`;

  storage.appendChild(newContact);
  newContact.appendChild(contactName);
  newContact.appendChild(contactCity);
  newContact.appendChild(contactEmail);
}

add.addEventListener('click', function() {
  if (storage.childElementCount <= 19) {
    createContact();
    output.innerHTML = 'Contact saved.'
  } else {
    output.innerHTML = 'Please delete 1 contact.'
  }
});

