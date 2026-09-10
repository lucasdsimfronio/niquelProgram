const modalElement = document.getElementById("transaction-modal");
const myModal = modalElement ? new bootstrap.Modal(modalElement) : null;

let logged = sessionStorage.getItem("logged");
const session = localStorage.getItem("session");
let data = { transactions: [] };

document.getElementById("logout-button").addEventListener("click", logout);
document.getElementById("transaction-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const value = parseFloat(document.getElementById("value-input").value);
    const description = document.getElementById("description-input").value;
    const date = document.getElementById("date-input").value;
    const type = document.querySelector('input[name="type-input"]:checked').value;

    data.transactions.unshift({ value, type, description, date });
    saveData(data);
    event.target.reset();

    if (myModal) {
        myModal.hide();
    }

    getTransactions();
    alert("Lançamento adicionado com sucesso!");
});

function checkLogged() {
    // A sessão persistente é copiada para a sessão da aba quando o usuário opta por permanecer conectado.
    if (session) {
        sessionStorage.setItem("logged", session);
        logged = session;
    }

    if (!logged) {
        window.location.href = "index.html";
        return;
    }

    const dataUser = localStorage.getItem(logged);
    if (dataUser) {
        data = JSON.parse(dataUser);
    }

    getTransactions();
}

function logout() {
    sessionStorage.removeItem("logged");
    localStorage.removeItem("session");
    window.location.href = "index.html";
}

function getTransactions() {
    const transactions = data.transactions;
    let transactionsHtml = "";

    transactions.forEach((item) => {
        const type = item.type === "2" ? "Saída" : "Entrada";

        transactionsHtml += `
            <tr>
                <th scope="row">${item.date}</th>
                <td>${item.value}</td>
                <td>${type}</td>
                <td>${escapeHtml(item.description)}</td>
            </tr>
        `;
    });

    document.getElementById("transactions-list").innerHTML = transactionsHtml;
}

function saveData(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

// As descrições vêm do usuário e precisam ser escapadas antes de serem inseridas com innerHTML.
function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;") 
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

checkLogged();
