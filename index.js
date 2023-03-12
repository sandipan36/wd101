      // Load entries from local storage on page load
      const entries = JSON.parse(localStorage.getItem('entries')) || [];
      const tableBody = document.querySelector('#entries tbody');

      // Add entries to the table
      function addEntry(entry) {
        const row = tableBody.insertRow();
        row.insertCell().textContent = entry.name;
        row.insertCell().textContent = entry.email;
        row.insertCell().textContent = entry.password;
        row.insertCell().textContent = entry.dob;
        row.insertCell().textContent = entry.acceptedTerms;
      }

      // Add submitted entry to the table and save to local storage
      function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const name = form.elements.name.value;
        const email = form.elements.email.value;
        const password = form.elements.password.value;
        const dob = form.elements.dob.value;
        const acceptedTerms = form.elements['accepted-terms'].checked;

        // Validate email and age
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const age = new Date().getFullYear() - new Date(dob).getFullYear();
        const validAge = age >= 18 && age <= 55;

        if (!validEmail || !validAge) {
          alert('Please enter a valid email address and age between 18 and 55.');
          return;
        }

        const entry = { name, email, password, dob, acceptedTerms };
        entries.push(entry);
        addEntry(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
        form.reset();
      }

      // Add saved entries to the table
      for (const entry of entries) {
        addEntry(entry);
      }

      // Listen for form submit event
      const form = document.querySelector('#registration-form');
      form.addEventListener('submit', handleSubmit);
