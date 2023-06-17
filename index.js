// Get the elements from the DOM
const input = document.querySelector('.newsletter__input');
const button = document.querySelector('.newsletter__button');
const popup = document.querySelector('.popup__overlay');
const popupButton = document.querySelector('.newsletter__popup-button');
const error = document.querySelector('.newsletter__error');
const popupEmail = document.querySelector('.newsletter__popup-email');

button.disabled = true;
button.classList.add('disabled');

// Email validation regex
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Add event listener to the input field
input.addEventListener('input', function () {
  if (emailRegex.test(input.value)) {
    // If email is valid
    input.classList.remove('newsletter__input_error');
    button.classList.remove('disabled');
    button.disabled = false;
    error.classList.add('invisable');
  } else {
    // If email is not valid
    input.classList.add('newsletter__input_error');
    button.style.backgroundColor = 'default';
    button.classList.add('disabled');
    button.disabled = true;
    error.classList.remove('invisable');
  }
});

button.addEventListener('click', function () {
  if (!button.disabled) {
    // If button is not disabled (email is valid)
    popupEmail.textContent = input.value; // Set popup email to input value
    popup.classList.remove('invisable'); // show the popup
  }
});

popupButton.addEventListener('click', function () {
  popup.classList.add('invisable');
});
