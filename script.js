class ForeignTradingSystem {
    constructor() {
        this.currentForm = null;
        this.switchForm(LoginForm);
    }

    switchForm(formClass) {
        const newForm = new formClass(this);
        if (this.currentForm !== null) {
            this.currentForm.hide();
        }
        this.currentForm = newForm;
        this.currentForm.show();
    }
}

class LoginForm {
    constructor(master) {
        this.master = master;
        this.element = document.createElement('div');
        this.element.innerHTML = `
            <label>Username:</label>
            <input id="username" type="text"><br>
            <label>Password:</label>
            <input id="password" type="password"><br>
            <button onclick="login()">Login</button>
            <button onclick="signup()">Signup</button>
        `;
    }

    hide() {
        this.element.style.display = 'none';
    }

    show() {
        this.element.style.display = 'block';
        document.getElementById('app').appendChild(this.element);
    }
}

class SignupForm {
    constructor(master) {
        this.master = master;
        this.element = document.createElement('div');
        this.element.innerHTML = `
            <label>Username:</label>
            <input id="username" type="text"><br>
            <label>Password:</label>
            <input id="password" type="password"><br>
            <button onclick="signup()">Signup</button>
            <button onclick="cancel()">Cancel</button>
        `;
    }

    hide() {
        this.element.style.display = 'none';
    }

    show() {
        this.element.style.display = 'block';
        document.getElementById('app').appendChild(this.element);
    }
}

// Define other classes and functions similarly

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Implement login functionality
}

function signup() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Implement signup functionality
}

function cancel() {
    // Implement cancel functionality
}