// Get form elements
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const classInput = document.getElementById('class');
const hostelInput = document.getElementById('hostel');
const residenceInput = document.getElementById('residence');

// Get submit button
const submitButton = document.getElementById('submit');

// Add event listener to submit button
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get values from form inputs
  const usernameValue = usernameInput.value;
  const passwordValue = passwordInput.value;
  const classValue = classInput.value;
  const hostelValue = hostelInput.value;
  const residenceValue = residenceInput.value;

  // TODO: Do something with the form data, e.g. submit to server
});
