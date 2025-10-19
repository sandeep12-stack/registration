// Store users data
let users = [];

// Get form elements
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');
const usersTable = document.getElementById('usersTable');

// Error message elements
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

// Validation states
let isNameValid = false;
let isEmailValid = false;
let isPasswordValid = false;

// Validate Name
function validateName() {
    const name = nameInput.value.trim();
    if (name === '') {
        nameError.classList.remove('hidden');
        isNameValid = false;
    } else {
        nameError.classList.add('hidden');
        isNameValid = true;
    }
    updateSubmitButton();
}

// Validate Email
function validateEmail() {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        emailError.classList.remove('hidden');
        isEmailValid = false;
    } else {
        emailError.classList.add('hidden');
        isEmailValid = true;
    }
    updateSubmitButton();
}

// Validate Password
function validatePassword() {
    const password = passwordInput.value;
    if (password.length < 6) {
        passwordError.classList.remove('hidden');
        isPasswordValid = false;
    } else {
        passwordError.classList.add('hidden');
        isPasswordValid = true;
    }
    updateSubmitButton();
}

// Update Submit Button State
function updateSubmitButton() {
    if (isNameValid && isEmailValid && isPasswordValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

// Add event listeners for real-time validation
nameInput.addEventListener('input', validateName);
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

// Handle form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Create user object
    const user = {
        id: Date.now(),
        name: nameInput.value.trim(),
        email: emailInput.value.trim()
    };

    // Add to users array
    users.push(user);

    // Update table
    renderTable();

    // Reset form
    form.reset();
    isNameValid = false;
    isEmailValid = false;
    isPasswordValid = false;
    updateSubmitButton();
});

// Render users table
function renderTable() {
    usersTable.innerHTML = '';
    
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.className = index % 2 === 0 ? 'bg-gray-100' : 'bg-white';
        
        row.innerHTML = `
            <td class="py-3 px-4">${user.name}</td>
            <td class="py-3 px-4">${user.email}</td>
            <td class="py-3 px-4">
                <button onclick="deleteUser(${user.id})" 
                    class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition duration-200">
                    Delete
                </button>
            </td>
        `;
        
        usersTable.appendChild(row);
    });
}

// Delete user
function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderTable();
}