# Student Registration Form

A simple and elegant student registration form with real-time validation built using HTML, Tailwind CSS, and vanilla JavaScript.

## Features

- **Real-time Form Validation**
  - Name field validation (cannot be empty)
  - Email field validation (proper email format required)
  - Password field validation (minimum 6 characters)
  
- **Dynamic Submit Button**
  - Disabled by default
  - Automatically enables when all validations pass
  
- **User Management**
  - Display registered users in a clean table
  - Delete functionality for each user
  - Data stored in memory during the session
  
- **Responsive Design**
  - Built with Tailwind CSS 2.2.19
  - Clean and modern UI
  - Mobile-friendly layout

## Demo

![Student Registration Form](screenshot.png)

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS 2.2.19)
- JavaScript (ES6+)

## Project Structure

```
registration-form/
│
├── index.html          # Main HTML file with form structure
├── java.js             # JavaScript file with validation logic
└── README.md           # Project documentation
```

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/student-registration-form.git
   ```

2. Navigate to the project directory:
   ```bash
   cd student-registration-form
   ```

3. Open `index.html` in your browser:
   ```bash
   # On Windows
   start index.html
   
   # On Mac
   open index.html
   
   # On Linux
   xdg-open index.html
   ```

## Usage

1. **Fill in the form fields:**
   - Enter your name
   - Enter a valid email address
   - Create a password (at least 6 characters)

2. **Real-time validation:**
   - Error messages appear instantly if inputs are invalid
   - The Register button remains disabled until all fields are valid

3. **Submit the form:**
   - Click the "Register" button once all validations pass
   - Your data will appear in the "Registered Users" table below

4. **Delete users:**
   - Click the red "Delete" button next to any user to remove them from the list

## Validation Rules

| Field    | Validation Rule                          |
|----------|------------------------------------------|
| Name     | Must not be empty                        |
| Email    | Must be a valid email format (xxx@xxx.xxx)|
| Password | Must be at least 6 characters long       |

## Code Highlights

### Real-time Validation
```javascript
// Example: Email validation
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
```

### Dynamic Table Rendering
```javascript
function renderTable() {
    usersTable.innerHTML = '';
    
    users.forEach((user, index) => {
        const row = document.createElement('tr');
        row.className = index % 2 === 0 ? 'bg-gray-100' : 'bg-white';
        // ... table row creation
    });
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Known Limitations

- Data is stored in memory only (resets on page refresh)
- No backend integration
- No data persistence

## Future Enhancements

- [ ] Add local storage support for data persistence
- [ ] Implement backend API integration
- [ ] Add more form fields (age, gender, course)
- [ ] Add edit functionality for registered users
- [ ] Implement search and filter features
- [ ] Add export to CSV functionality
- [ ] Implement dark mode toggle

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the amazing CSS framework
- Inspiration from modern web form designs

---

⭐ If you find this project helpful, please consider giving it a star!