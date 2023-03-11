




const form = document.getElementById('registration-form');
const usersTable = document.getElementById('users-table');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Retrieve input values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const acceptTerms = document.getElementById('accept-terms').checked;

  // Create new row in table
  const newRow = usersTable.insertRow();
  const nameCell = newRow.insertCell();
  const emailCell = newRow.insertCell();
  const passwordCell = newRow.insertCell();
  const dobCell = newRow.insertCell();
  const acceptTermsCell = newRow.insertCell();

  nameCell.innerText = name;
  emailCell.innerText = email;
  passwordCell.innerText = password;
  dobCell.innerText = dob;
  acceptTermsCell.innerText = acceptTerms ? 'Yes' : 'No';

  

  // Clear form
  form.reset();
});
