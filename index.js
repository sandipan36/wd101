const form = document.querySelector('form');
const tableBody = document.querySelector('tbody');

// Retrieve data from web storage on page load
if (localStorage.getItem('formData')) {
  const formData = JSON.parse(localStorage.getItem('formData'));
  addRowToTable(formData);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = {
    name: form.elements.name.value,
    email: form.elements.email.value,
    password: form.elements.password.value,
    dob: form.elements.dob.value,
    termsAccepted: form.elements.terms.checked
  };

  // Check if date of birth is between 18 and 55 years ago
  const dobDate = new Date(formData.dob);
  const eighteenYearsAgo = new Date();
  eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
  const fiftyFiveYearsAgo = new Date();
  fiftyFiveYearsAgo.setFullYear(fiftyFiveYearsAgo.getFullYear() - 55);
  if (dobDate > eighteenYearsAgo || dobDate < fiftyFiveYearsAgo) {
    alert('Date of birth must be between 18 and 55 years ago.');
    return;
  }

  // Save data to web storage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Add row to table
  addRowToTable(formData);

  // Reset form
  form.reset();
});

function addRowToTable(formData) {
  const tableRow = document.createElement('tr');
  tableRow.innerHTML = `
    <td>${formData.name}</td>
    <td>${formData.email}</td>
    <td>${formData.password}</td>
    <td>${formData.dob}</td>
    <td>${formData.termsAccepted ? 'Yes' : 'No'}</td>
  `;
  tableBody.appendChild(tableRow);
}
