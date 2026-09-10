const modalElement = document.getElementById("register-modal");
const myModal = modalElement ? new bootstrap.Modal(modalElement) : null;

let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");

checkLogged();

const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email-input").value.trim();
        const password = document.getElementById("password-input").value;
        const sessionCheck = document.getElementById("session-check-login").checked;

        if (email.length < 5) {
            alert("O e-mail deve ter pelo menos 5 caracteres.");
            return;
        }

        if (password.length < 4) {
            alert("A senha deve ter pelo menos 4 caracteres.");
            return;
        }

        const account = getAccount(email);
        if (!account) {
            alert("Usuário não encontrado.");
            return;
        }

        if (account.password !== password) {
            alert("Senha incorreta!");
            return;
        }

        saveSession(email, sessionCheck);
        if (myModal) {
            myModal.hide();
        }
        window.location.href = "home.html";
    });
}

const createForm = document.getElementById("create-form");
if (createForm) {
    createForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email-create-input").value.trim();
        const password = document.getElementById("password-create-input").value;
        const confirmPassword = document.getElementById("confirm-password-input").value;
        const sessionCheck = document.getElementById("session-check").checked;

        if (email.length < 5) {
            alert("O e-mail deve ter pelo menos 5 caracteres.");
            return;
        }

        if (password.length < 4) {
            alert("A senha deve ter pelo menos 4 caracteres.");
            return;
        }

        if (password !== confirmPassword) {
            alert("As senhas não conferem.");
            return;
        }

        if (getAccount(email)) {
            alert("Este e-mail já está cadastrado.");
            return;
        }

        saveAccount({ login: email, password, transactions: [] });
        saveSession(email, sessionCheck);

        if (myModal) {
            myModal.hide();
        }

        alert("Conta criada com sucesso!");
        window.location.href = "home.html";
    });
}

function checkLogged() {
    // A sessão persistente é copiada para a sessão da aba quando o usuário opta por permanecer conectado.
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if (logged) {
        saveSession(logged, Boolean(session));
        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSession(data, keepLoggedIn) {
    if (keepLoggedIn) {
        localStorage.setItem("session", data);
    } else {
        localStorage.removeItem("session");
    }

    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const account = localStorage.getItem(key);
    return account ? JSON.parse(account) : null;
}
